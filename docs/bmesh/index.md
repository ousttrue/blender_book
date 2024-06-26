# BMesh

[Source/Modeling/BMesh/Design - Blender Developer Wiki](https://wiki.blender.org/wiki/Source/Modeling/BMesh/Design)

> Blender’s internal mesh editing API

## articles

- @2022 [blender python で、meshの縁のedgeを選択 - end0tknr&#39;s kipple - web写経開発](https://end0tknr.hateblo.jp/entry/20221021/1666298016)
- @2022 [blender python で いろいろ処理 - end0tknr&#39;s kipple - web写経開発](https://end0tknr.hateblo.jp/entry/20221021/1666297830)
- @2021 [Blenderのメッシュ調査](https://zenn.dev/hzuika/scraps/f15bf5a13a07bc)

- @2012 [扉の先の無限の世界　　～Blender 2.5 & 2.6 で作る3DCG～ BMeshの使い方](http://silverspirecg.blog119.fc2.com/blog-entry-66.html)
- @2012 [扉の先の無限の世界　　～Blender 2.5 & 2.6 で作る3DCG～ BMesh概要](http://silverspirecg.blog119.fc2.com/blog-entry-65.html)

## crease

- https://blender.stackexchange.com/questions/275841/how-to-change-value-of-edge-crease-via-python-script

## from_edit_mesh

- [Blenderでbmeshを操作 | コマンドの達人](https://life-is-command.com/blender-bmesh/)
- [Blender2.8で利用可能なpythonスクリプトを作る その２５（オブジェクトの分離） - MRが楽しい](https://bluebirdofoz.hatenablog.com/entry/2020/05/09/225003)

## selction

```python
import bpy
import bmesh

context = bpy.context

bpy.ops.mesh.primitive_plane_add(
        enter_editmode=True)
ob = context.object
me = ob.data

bm = bmesh.from_edit_mesh(me)
for i, v in enumerate(bm.verts):
    v.select_set(not i)
bm.select_mode |= {'VERT'}
bm.select_flush_mode()
bmesh.update_edit_mesh(me)
```

## from_mesh

`ObjectMode OK`
`readonly ?`

- [blender python bmeshをオブジェクトモードで使う方法 - アストラルプリズム](https://katsumi3.hatenablog.com/entry/2020/01/28/223355)
  Mesh操作用のライブラリ(bpyとは別系統)
  https://docs.blender.org/api/current/bmesh.html
  https://docs.blender.org/api/2.83/bmesh.html

      [Blender Python BMesh 〜点の操作〜 http://takunoji.hatenablog.com/entry/2018/03/26/225317]
      [Blender Python 開発メモ 〜UV座標の取得〜 http://takunoji.hatenablog.com/entry/2018/03/20/221150]

- https://docs.blender.org/api/current/bmesh.html
  - https://wiki.blender.org/wiki/Source/Modeling/BMesh/Design

```{toctree}
bmesh_types
```

## basic

```py
import bmesh
```

### create empty

```py
# Get a BMesh representation
bm = bmesh.new()   # create an empty BMesh
```

### load from mesh

```py
bm.from_mesh(mesh)
```

### apply to mesh

```py
# Finish up, write the bmesh back to the mesh
bm.to_mesh(mesh)
bm.free()  # free and prevent further access
```

## vertex

- https://docs.blender.org/api/current/bmesh.types.html#bmesh.types.BMVert
- [Blender Python BMesh 〜点の操作〜](http://takunoji.hatenablog.com/entry/2018/03/26/225317)

### add

```py
v = bm.verts.new((x, y, z))
```

### vertex group

- https://gist.github.com/jirihnidek/64f2f269c9aa2021b33ae79989e21ebd
- [Manipulate vertex groups via bmesh?](https://devtalk.blender.org/t/manipulate-vertex-groups-via-bmesh/11192)
- https://blender.stackexchange.com/questions/69426/accessing-weights-of-a-bmesh
- https://programtalk.com/python-examples/bmesh.new/

```py
layer = bm.verts.layers.deform.active

bm.verts[vertex_index][layer][vertex_group_index] = weight
```

### morph target

```py
layer = bm.verts.layers.shape.new(target.name)
```

## loop

### uv_layer

- [Blender Python 開発メモ 〜UV座標の取得〜](http://takunoji.hatenablog.com/entry/2018/03/20/221150)

`loop` の `UV layer` に格納されている。
`vert` から接続する `loop` を得て、その `uv layer` から値を得る。

```py
uv_layer = bm.loops.layers.uv.new(UV_LAYER_NAME)
```

```py
layer = bm.loops.layers.uv.active

def uv_from_vert_first(uv_layer, v):
    for l in v.link_loops:
        return l[uv_layer].uv
    return None
```

## walker

https://devtalk.blender.org/t/walking-edge-loops-across-a-mesh-from-c-to-python/14297/4

## source

- `source\blender\bmesh\bmesh.h`
- `source\blender\bmesh\bmesh_class.h`
- `source\blender\bmesh\intern\bmesh_mesh.h`

```c
typedef struct BMesh {
  int totvert, totedge, totloop, totface;
  int totvertsel, totedgesel, totfacesel;

  /**
   * Flag index arrays as being dirty so we can check if they are clean and
   * avoid looping over the entire vert/edge/face/loop array in those cases.
   * valid flags are: `(BM_VERT | BM_EDGE | BM_FACE | BM_LOOP)`
   */
  char elem_index_dirty;

  /**
   * Flag array table as being dirty so we know when its safe to use it,
   * or when it needs to be re-created.
   */
  char elem_table_dirty;

  /* element pools */
  struct BLI_mempool *vpool, *epool, *lpool, *fpool;

  /* mempool lookup tables (optional)
   * index tables, to map indices to elements via
   * BM_mesh_elem_table_ensure and associated functions.  don't
   * touch this or read it directly.\
   * Use BM_mesh_elem_table_ensure(), BM_vert/edge/face_at_index() */
  BMVert **vtable;
  BMEdge **etable;
  BMFace **ftable;

  /* size of allocated tables */
  int vtable_tot;
  int etable_tot;
  int ftable_tot;

  /* operator api stuff (must be all NULL or all alloc'd) */
  struct BLI_mempool *vtoolflagpool, *etoolflagpool, *ftoolflagpool;

  uint use_toolflags : 1;

  int toolflag_index;

  CustomData vdata, edata, ldata, pdata;

#ifdef USE_BMESH_HOLES
  struct BLI_mempool *looplistpool;
#endif

  struct MLoopNorSpaceArray *lnor_spacearr;
  char spacearr_dirty;

  /* Should be copy of scene select mode. */
  /* Stored in #BMEditMesh too, this is a bit confusing,
   * make sure they're in sync!
   * Only use when the edit mesh cant be accessed - campbell */
  short selectmode;

  /* ID of the shape key this bmesh came from */
  int shapenr;

  int totflags;
  ListBase selected;

  /**
   * The active face.
   * This is kept even when unselected, mainly so UV editing can keep showing the
   * active faces image while the selection is being modified in the 3D viewport.
   *
   * Without this the active image in the UV editor would flicker in a distracting way
   * while changing selection in the 3D viewport.
   */
  BMFace *act_face;

  /** List of #BMOpError, used for operator error handling. */
  ListBase errorstack;

  /**
   * Keep a single reference to the Python instance of this #BMesh (if any exists).
   *
   * This allows save invalidation of a #BMesh when it's freed,
   * so the Python object will report it as having been removed,
   * instead of crashing on invalid memory access.
   */
  void *py_handle;
} BMesh;
```

---
title: bpy.types.Mesh
sidebar_position: 1
---

# データ構造

mesh は頂点の配列(mesh.vertices) と 面の配列(mesh.polygons) から構成される。
ある頂点の法線やUVが面A と面Bで異なる場合があり、これを別頂点として扱いたい。
ループ(mesh.loops)がそれである。
`glb` などに export する場合は、`len(mesh.loops)` が頂点数になる。

# positoin, normal, uv の取得

```python
import ctypes
import bpy
import mathutils
from typing import Optional


class Float2(ctypes.Structure):
    _fields_ = [
        ("x", ctypes.c_float),
        ("y", ctypes.c_float),
    ]

    def __str__(self) -> str:
        return f"({self.x},{self.y})"

    @staticmethod
    def from_vector(v: mathutils.Vector) -> "Float2":
        return Float2(v.x, v.y)


class Float3(ctypes.Structure):
    _fields_ = [
        ("x", ctypes.c_float),
        ("y", ctypes.c_float),
        ("z", ctypes.c_float),
    ]

    def __str__(self) -> str:
        return f"({self.x},{self.y},{self.z})"

    @staticmethod
    def from_vector(v: mathutils.Vector) -> "Float3":
        return Float3(v.x, v.y, v.z)


class Vertex(ctypes.Structure):
    _fields_ = [
        ("position", Float3),
        ("normal", Float3),
        ("uv", Float2),
    ]

    def __str__(self) -> str:
        return f"[pos: {self.position}, nom: {self.normal}, uv: {self.uv}]"

    @staticmethod
    def from_mesh(
        mesh: bpy.types.Mesh, mat: mathutils.Matrix
    ) -> ctypes.Array["Vertex"]:
        # triangles
        mesh.transform(mat)
        if mat.is_negative:
            mesh.flip_normals()
        mesh.calc_loop_triangles()

        vertices = (Vertex * len(mesh.loops))()
        uv_layer = mesh.uv_layers and mesh.uv_layers[0]
        for tri in mesh.loop_triangles:
            for loop_index in tri.loops:
                dst = vertices[loop_index]
                v = mesh.vertices[mesh.loops[loop_index].vertex_index]
                dst.position = Float3.from_vector(v.co)
                if tri.normal:
                    dst.normal = Float3.from_vector(tri.normal)
                else:
                    dst.normal = Float3.from_vector(v.normal)
                if isinstance(uv_layer, bpy.types.MeshUVLoopLayer):
                    dst.uv = Float2.from_vector(uv_layer.data[loop_index].uv)

        return vertices

    @staticmethod
    def from_object(
        ob: bpy.types.Object, matrix: mathutils.Matrix, *, use_mesh_modifiers=False
    ):
        if ob.mode == "EDIT":
            ob.update_from_editmode()

        if use_mesh_modifiers:
            # get the modifiers
            depsgraph = bpy.context.evaluated_depsgraph_get()
            mesh_owner = ob.evaluated_get(depsgraph)
        else:
            mesh_owner = ob

        # Object.to_mesh() is not guaranteed to return a mesh.
        try:
            mesh = mesh_owner.to_mesh()
            if not isinstance(mesh, bpy.types.Mesh):
                return

            mat = matrix @ ob.matrix_world
            return Vertex.from_mesh(mesh, mat)

        except RuntimeError:
            return
        finally:
            mesh_owner.to_mesh_clear()

```

# uv\_layers

* [テクスチャUVを調べる｜Hajime Saito](https://note.com/replicorn/n/nc6f582006a99)

# mesh

tessface無くなった
https://dskjal.com/blender/script-279-to-280.html

```
http://blenderscripting.blogspot.com/2011/06/using-frompydata.html

https://docs.blender.org/api/current/bpy.types.Mesh.html
https://docs.blender.org/api/current/bpy.types.MeshTessFace.html
```

https://docs.blender.org/api/current/bpy.types.MeshVertex.html

\[Blender PythonのMeshデータアクセスのチートシート https://qiita.com/kenyoshi17/items/b93bbba6451e3c6017e5]

```py
import bpy

me = bpy.context.object.data
uv_layer = me.uv.layers.active.data

for poly in me.polygons:
    print("Polygon index: %d, length: %d" % (poly.index, poly.loop_total))

    # range is used here to show how the polygons reference loops,
    # for convenience 'poly.loop_indices' can be used instead.
    for loop_index in range(poly.loop_start, poly.loop_start + poly.loop_total):
        print("    Vertex: %d" % me.loops[loop_index].vertex_index)
        print("    UV: %r" % uv_layer[loop_index].uv)
```

* [Blender PythonのMeshデータアクセスのチートシート](https://qiita.com/kenyoshi17/items/b93bbba6451e3c6017e5)

```
Mesh.vertices (3 points in space)
Mesh.edges (reference 2 vertices)
Mesh.loops (reference a single vertex and edge) = indices ?
Mesh.polygons: (reference a range of loops) = faces ?
```


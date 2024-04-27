---
title: mode
sidebar_position: 2
---

## current mode

```py
print(bpy.context.object.mode)
```

> context.mode は active_object の mode

```py
Literal['EDIT_MESH', 'EDIT_CURVE', 'EDIT_CURVES', 'EDIT_SURFACE', 'EDIT_TEXT', 'EDIT_ARMATURE', 'EDIT_METABALL', 'EDIT_LATTICE', 'EDIT_GREASE_PENCIL', 'EDIT_POINT_CLOUD', 'POSE', 'SCULPT', 'PAINT_WEIGHT', 'PAINT_VERTEX', 'PAINT_TEXTURE', 'PARTICLE', 'OBJECT', 'PAINT_GPENCIL', 'EDIT_GPENCIL', 'SCULPT_GPENCIL', 'WEIGHT_GPENCIL', 'VERTEX_GPENCIL', 'SCULPT_CURVES', 'PAINT_GREASE_PENCIL']
```

## mode を変える

```py
bpy.ops.object.mode_set(mode='POSE', toggle=False)

Literal['OBJECT','EDIT','POSE','SCULPT','VERTEX_PAINT','WEIGHT_PAINT','TEXTURE_PAINT','PARTICLE_EDIT','EDIT_GPENCIL','SCULPT_GPENCIL','PAINT_GPENCIL','WEIGHT_GPENCIL','VERTEX_GPENCIL','SCULPT_CURVES','PAINT_GREASE_PENCIL']='OBJECT'
```

- [【Blender】【Python】bpy.ops.object.mode_set が context is incorrect で失敗する - ゲーム作りが大好きな人のブログ](https://toofu0.hatenablog.com/entry/2020/10/10/033418)

### to objectmode

```py
bpy.context.view_layer.objects.active = obj
bpy.ops.object.mode_set('OBJECT',toggle=False)
```

### to editmode

```py
bpy.context.view_layer.objects.active = obj
bpy.ops.object.mode_set(mode='EDIT')
```

## 一時的に別モード

```py
from contextlib import contextmanager
@contextmanager
def tmp_active(obj: bpy.types.Object | None = None):
    active = bpy.context.active_object
    bpy.context.view_layer.objects.active = obj
    try:
        yield
    finally:
        bpy.context.view_layer.objects.active = active


MODE_MAP: dict[str, str] = {
    "EDIT_MESH": "EDIT",
    "EDIT_CURVE": "EDIT",
    "EDIT_CURVES": "EDIT",
    "EDIT_SURFACE": "EDIT",
    "EDIT_TEXT": "EDIT",
    "EDIT_ARMATURE": "EDIT",
    "EDIT_METABALL": "EDIT",
    "EDIT_LATTICE": "EDIT",
    "EDIT_GREASE_PENCIL": "EDIT",
    "EDIT_POINT_CLOUD": "EDIT",
    "PAINT_WEIGHT": "WEIGHT_PAINT",
    "PAINT_VERTEX": "VERTEX_PAINT",
    "PAINT_TEXTURE": "TEXTURE_PAINT",
    "PARTICLE": "PARTICLE_EDIT",
}


@contextmanager
def tmp_mode(
    mode: Literal[
        "OBJECT",
        "EDIT",
        "POSE",
        "SCULPT",
        "VERTEX_PAINT",
        "WEIGHT_PAINT",
        "TEXTURE_PAINT",
        "PARTICLE_EDIT",
        "EDIT_GPENCIL",
        "SCULPT_GPENCIL",
        "PAINT_GPENCIL",
        "WEIGHT_GPENCIL",
        "VERTEX_GPENCIL",
        "SCULPT_CURVES",
        "PAINT_GREASE_PENCIL",
    ],
    obj: bpy.types.Object | None = None,
):
    with tmp_active(obj):
        last_mode = cast(str, bpy.context.mode)
        bpy.ops.object.mode_set(mode=mode)
        try:
            yield
        finally:
            bpy.ops.object.mode_set(mode=MODE_MAP.get(last_mode, last_mode))  # type: ignore

```

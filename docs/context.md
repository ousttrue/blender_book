---
title: Context
sidebar_position: 1
---

[Context(bpy_struct) — Blender Python API](https://docs.blender.org/api/current/bpy.types.Context.html)

型は、[bpy.types.context](/docs/bpy_types/context)

`bpy.context` からアクセスできるのは、[ScreenContext](https://docs.blender.org/api/latest/bpy.context.html#screen-context)。

> Note that all context values are readonly, but may be modified through the data API or by running operators

## Active Object

### readonly

`bpy.context.active_object`

### writable

```python
bpy.context.view_layer.objects.active = None
```

## Selected Object

`bpy.context.selected_objects`

## Contextオーバーライド

https://docs.blender.org/api/blender2.8/bpy.ops.html#overriding-context

- [python - How to define context for a script? - Blender Stack Exchange](https://blender.stackexchange.com/questions/89277/how-to-define-context-for-a-script)

```py
# remove all objects in scene rather than the selected ones
import bpy
override = bpy.context.copy()
override['selected_objects'] = list(bpy.context.scene.objects)
bpy.ops.object.delete(override)
```

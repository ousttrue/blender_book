---
title: bpy.types.Object
sidebar_position: 2
---

https://docs.blender.org/api/current/bpy.types.Object.html

# scene

```python
bpy.context.scene.objects
```

# active

`readonly`
`view_layer.objects.active` へのショートカットか？

```python
object = bpy.context.active_object
```

# selected

```python
object = bpy.context.selected_objects
```

# bpy.types.Object

https://docs.blender.org/api/current/bpy.types.Object.html

- https://docs.blender.org/manual/en/latest/scene_layout/object/types.html

```{toctree}
mesh
armature
pointer
```

## empty

```py
import bpy
o = bpy.data.objects.new("empty", None)
bpy.context.scene.collection.objects.link(o)
```

## active object

```py
# これ
bpy.context.active_object # readonly

# active_object と object 同じぽい？
bpy.context.object # readonly

# change
bpy.context.scene.objects.active
```

https://blender.stackexchange.com/questions/31759/are-bpy-context-object-and-bpy-context-active-object-still-the-same
`context.object == context.active_object ?`

```py
# 2.80
bpy.context.view_layer.objects.active = obj
# 2.79
bpy.context.scene.objects.active = obj
```

## selected object

`bpy.context.selected_objects`

```py
# 2.8
obj.select_set(True)
# 2.79
obj.select = True
```

## select all

```py
bpy.ops.object.select_all(action='SELECT')

bpy.ops.object.select_all(action='DESELECT')
```

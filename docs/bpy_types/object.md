---
title: bpy.types.Object
---

https://docs.blender.org/api/current/bpy.types.Object.html

- https://docs.blender.org/manual/en/latest/scene_layout/object/types.html

- @2024 [BlenderのPythonにおけるアクティブオブジェクトについて #Python - Qiita](https://qiita.com/SaitoTsutomu/items/eb859dc41b7f585252cd)

## active

```py
# readonly
bpy.context.active_object

# active_object と object 同じぽい？
bpy.context.object # readonly

# change
bpy.context.view_layer.objects.active = active
```

[python - are bpy.context.object and bpy.context.active_object STILL the same? - Blender Stack Exchange](https://blender.stackexchange.com/questions/31759/are-bpy-context-object-and-bpy-context-active-object-still-the-same)
`context.object == context.active_object ?`

:::note blender-2.8

```py
# 2.80
bpy.context.view_layer.objects.active = obj
# 2.79
bpy.context.scene.objects.active = obj
```

:::

## selected

```python
bpy.context.selected_objects
```

:::note blender-2.8

```py
# 2.8
obj.select_set(True)
# 2.79
obj.select = True
```

:::

### select all

current scene のすべて？

```py
bpy.ops.object.select_all(action='SELECT')

bpy.ops.object.select_all(action='DESELECT')
```

## create

### empty

```py
import bpy
o = bpy.data.objects.new("empty", None)
bpy.context.scene.collection.objects.link(o)
```


[[bpy]] 

[Object(ID) — Blender Python API](https://docs.blender.org/api/current/bpy.types.Object.html#bpy.types.Object)

```python
active = bpy.context.active_object
```

# 構造
[[bpy.types.Collection]]

```python
# 本体
bpy.data.objects
# outliner
collection.objects
# parent
object.parent
# children
object.children
```

# data block
`ID` タイプ？
```python
obj.data
```

## Mesh
[[bpy.types.Mesh]]

## Armature
[[bpy.types.Armature]]

# custom property
- [Blenderのカスタムプロパティの使い方 - Qiita](https://qiita.com/SaitoTsutomu/items/b6cfd5aeb760d49ea657)

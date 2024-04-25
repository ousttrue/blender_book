# scene and collection

* https://code.blender.org/2017/09/view-layers-and-collections/
* https://code.blender.org/2018/05/collections-and-groups/

## active scene

get

`bpy.context.scene`

set

```py
bpy.context.window.scene = bpy.data.scenes['Scene.001']
```

## master collection

`bpy.context.scene.collection`

> While the master collection contains all the Scene’s objects
> collections of Objects

## nested collection

```py
collection = bpy.data.collections.new(name='name')
context.scene.collection.children.link(collection)
```

## view layer

`bpy.context.view_layer`

Collection をグループ化して可視制御する。

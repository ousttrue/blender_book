# Blender2.8より前の動かないコード

* [BlenderのPythonスクリプトのコードが2.80で動かなかった時に見る記事](https://qiita.com/hibit/items/d6b92d49d4d3a5730aa4)
* [Blender 2.8の低レベルPython APIを利用してオブジェクトを操作する](https://qiita.com/t-sin/items/ac3a6d05b02b4ed990b3)

```py
scene = bpy.conetxt.scene
scene.objects.link(obj) # 無くなった

collection = bpy.context.view_layer.collections.active.collection
collection.objects.link(obj)
```

```py
obj.select = True # 無くなった
 
obj.select_set("SELECT")
```

```py
# create
cube = bpy.data.objects.new(name = "New", object_data = bpy.data.meshes["Cube"])

# get
cube = bpy.data.objects["New"]

# link
bpy.context.scene.collection.objects.link(cube) # 2.80
bpy.context.scene.objects.link(cube) # 2.79 
```

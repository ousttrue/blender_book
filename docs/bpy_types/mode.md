---
title: mode
sidebar_position: 2
---

```py
bpy.ops.object.mode_set(mode='POSE', toggle=False)
```

- [【Blender】【Python】bpy.ops.object.mode_set が context is incorrect で失敗する - ゲーム作りが大好きな人のブログ](https://toofu0.hatenablog.com/entry/2020/10/10/033418)
context.mode は active_object の mode
```python
 import bpy
 #現在のモード取得
 bpy.context.mode

 # アクティブオブジェクトを設定する
 bpy.context.view_layer.objects.active = obj
 #オブジェクトモードに変更
 bpy.ops.object.mode_set('OBJECT',toggle=False)
 ```


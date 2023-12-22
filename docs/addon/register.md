---
sidebar_position: 3
---

# 機能の登録

`blender` - `preferences` - `Add-ons` 

```python
# 作ったクラスを格納
classes = [KJ_Monkey_Panel,KJ_Create_Monkey]

# belnderに登録する関数
def register():
   for cls in classes:
       bpy.utils.register_class(cls)
   # メニュー関数はappendする
   bpy.types.VIEW3D_MT_mesh_add.append(menu_monkey)

# belnderから登録解除する関数
def unregister():
   for cls in classes:
       bpy.utils.unregister_class(cls)
   bpy.types.VIEW3D_MT_mesh_add.remove(menu_monkey)

# pythonファイルを実行するおまじない
if __name__ == "__main__":
   register()
```


# class
## Operator
[[bpy.types.Operator]]

## Panel
[[bpy.types.Panel]]

## Property
[[bpy.types.ProertyGroup]]

# menu

TODO:


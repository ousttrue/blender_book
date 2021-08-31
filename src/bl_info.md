# bl_info

```py
bl_info = {
    "name": "yup gltf exporter",
    "author": "ousttrue",
    "version": (0, 1),
    "blender": (2, 79, 0),
    "location": "File > Export > yup gltf-2.0(.glb)",
    "description": "yup gltf exporter",
    "warning": "",
    "support": "COMMUNITY",
    "wiki_url": "",
    "tracker_url": "",
    "category": "Import-Export"
}
         
def register():
    bpy.utils.register_module(__name__)
    bpy.types.INFO_MT_mesh_add.append(menu_fn)
    print("サンプル2-1: アドオン「サンプル2-1」が有効化されました。")


# アドオン無効化時の処理
def unregister():
    bpy.types.INFO_MT_mesh_add.remove(menu_fn)
    bpy.utils.unregister_module(__name__)
    print("サンプル2-1: アドオン「サンプル2-1」が無効化されました。")


# メイン処理
if __name__ == "__main__":
    register()
```

addonの登録情報を記述する。
* <https://wiki.blender.org/wiki/Process/Addons/Guidelines/metainfo>
* <https://github.com/nikorummukainen/blender-python-code-templates>
* [はじめてのBlenderアドオン開発](https://www.gitbook.com/book/nutti/introduction-to-add-on-development-in-blender/details)
* <https://nutti.gitbooks.io/introduction-to-add-on-development-in-blender/content/>
* <https://nutti.gitbooks.io/introduction-to-add-on-development-in-blender/content/body/chapter_01/02_Use_Blender_Add-on.html>
* <https://docs.blender.org/manual/en/dev/advanced/scripting/addon_tutorial.html>

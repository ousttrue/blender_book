---
title: bl_info
sidebar_position: 2
---

addonの登録情報を記述する。

https://wiki.blender.org/wiki/Process/Addons/Guidelines/metainfo

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
         
```

## 登録に関する情報

### support

* "TESTING" # TESTING は 3.5 で廃止
* "COMMUNITY": default
* "OFFICIAL"

つまり書かなくて良い。


:::danger TESTING は preference に表示されない
bl_info の内容を COMMUNITY に書きかえるなど。

* [Blender 3.5で、addonにTestingを復活させる方法 - Qiita](https://qiita.com/SaitoTsutomu/items/5872c5e0358394360697)
:::

### category

3D View Add Mesh Add Curve Animation Compositing Development Game Engine Import-Export Lighting Material Mesh Node Object Paint Physics Render Rigging Scene Sequencer System Text Editor UV UserInterface

### blender

`(major, minor, patch)`

```python
(2, 83, 0)
```

## パネルに表示する情報

### description

`text`
自由に書いて良い

### location

`text`
UIのアクセス方法。自由に書いて良い

### author

`text`

### version

`(major, minor, patch)`

### warning

`text`
自由に書いて良い

### wiki\_url

`text`

### tracker\_url

`text`

## 参考

* https://github.com/nikorummukainen/blender-python-code-templates
* [はじめてのBlenderアドオン開発](https://www.gitbook.com/book/nutti/introduction-to-add-on-development-in-blender/details)
* https://nutti.gitbooks.io/introduction-to-add-on-development-in-blender/content/
* https://nutti.gitbooks.io/introduction-to-add-on-development-in-blender/content/body/chapter\_01/02\_Use\_Blender\_Add-on.html
* https://docs.blender.org/manual/en/dev/advanced/scripting/addon\_tutorial.html
* https://note.com/kageji/n/ncbacc5428a55
* [Blenderのアドオン作成のメモ - Qiita](https://qiita.com/SaitoTsutomu/items/6b8e6e734c99be6eeb5e)

- [【Blender】アドオン開発環境構築 | ツクロウヤ](https://www.omusubi-tech.com/?p=422)
- [VSCodeでBlenderスクリプト編集環境準備 - Hello World / plɹoM ollǝH](https://dungeonneko.hatenablog.com/entry/2021/04/05/002319)

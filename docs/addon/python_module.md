---
sidebar_position: 1
---

* https://docs.blender.org/manual/en/latest/advanced/scripting/addon\_tutorial.html

# path

## Windows

`%APPDATA%/Blender Foundation/Blender/BL_VERSION/scripts/addons`

に python module として配置する。

# 構成

## 単一ファイル例

`hello.py`

```py
bl_info = {
  "name": "Hello Single File Module",
  "version": (0,0,1),
}
```

上記の内容で
`blender` - `preferences` - `Add-ons` から見えるようになる。
追加して、`operator` などを登録する必要がある(後述)。
フォルダを作らなくてもよい。

## ディレクトリ例

`hello/__init__.py`

```py
bl_info = {
  "name": "Hello Directory Module",
  "version": (0,0,1),
}
```

python の directory モジュール。 このファイルから import される module は reload 時に自動では更新されないので対応が必用。 さもないと、 script の更新を反映するのに blender を再起動する必要がある。

## 孫モジュールの reimport


- [Python で from import を reload する。 - graphics.hatenablog.com](https://graphics.hatenablog.com/entry/2017/12/03/004714#%E3%81%9D%E3%82%82%E3%81%9D%E3%82%82%E3%81%AA%E3%82%93%E3%81%A7-reload-%E3%81%99%E3%82%8B%E3%81%AE%E3%81%8B)

```python
if "bpy" in locals():
    import importlib

    local_map = locals()

    def reload(module_name: str):
        module = local_map.get(module_name)
        if module:
            importlib.reload(module)
        else:
            print(f'{module_name} is not in locals')

    reload("hoge")

import bpy  # type: ignore
from . import hoge
```

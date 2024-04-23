---
title: addon は python module
sidebar_position: 1
---

- https://docs.blender.org/manual/en/4.1/advanced/scripting/addon_tutorial.html

## module

python module として実装します。

```py title="blender からの見た目の疑似コード"
import sys
sys.path.append(PATH_TO_ADDONS)
import my_addon

# 登録情報
my_addon.bl_info

# 登録(enable)
my_addon.register()

# 終了時(disable)
my_addon.unregister()
```

## path

### Windows

`%APPDATA%/Blender Foundation/Blender/%BLENDER_VERSION%/scripts/addons`

## 構成

### 単一ファイル例

```py title="hello.py"
bl_info = {
  "name": "Hello Single File Module",
  "version": (0,0,1),
}

def register():
  print 'hello'

def unregister():
  print 'good bye'
```

上記の内容で `blender` - `preferences` - `Add-ons` から見えるようになる。

### ディレクトリ例

```py title="hello/__init__.py"
bl_info = {
  "name": "Hello Directory Module",
  "version": (0,0,1),
}

def register():
  print 'hello'

def unregister():
  print 'good bye'
```

### 孫モジュールの reimport

これをやらない場合、変更を反映するのに blender の再起動が必要です。

- [Python で from import を reload する。 - graphics.hatenablog.com](https://graphics.hatenablog.com/entry/2017/12/03/004714#%E3%81%9D%E3%82%82%E3%81%9D%E3%82%82%E3%81%AA%E3%82%93%E3%81%A7-reload-%E3%81%99%E3%82%8B%E3%81%AE%E3%81%8B)

```python
if "bpy" in locals():
    # 2回目以降
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

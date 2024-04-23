---
title: dev
sidebar_position: 4
---

## LSP

## RNA ?

```py
import bpy
import rna_info # import bpy すると使えるようになる
structs, funcs, ops, props = rna_info.BuildRNAInfo()
```

## bpystubgen

- https://github.com/mysticfall/bpystubgen

```sh
pip install blender-stubs==3.12.27
```

- https://github.com/mysticfall/bpystubgen/issues/3

### usage

- https://download.blender.org/source/

```sh
> cd blender-4.1.1
> py .\doc\python_api\sphinx_doc_gen.py
# output to doc/python_api/sphinx-in

> py -m bpystubgen doc/python_api/sphinx-in stub
```

### fake-bpy-module

- [GitHub - nutti/fake-bpy-module: Fake Blender Python API module collection for the code completion.](https://github.com/nutti/fake-bpy-module)

### fake-bpy

- [4-3. BlenderのAPIをコード補完する | はじめてのBlenderアドオン開発](https://colorful-pico.net/introduction-to-addon-development-in-blender/2.8/html/chapter_04/03_Code_Complete_Blender_API.html)

### stub_generator

TODO: 整理して使えるようにするべし

- https://github.com/ousttrue/bpy_module

## standalone module

- [Blender as a Python Module — Blender Python API](https://docs.blender.org/api/current/info_advanced_blender_as_bpy.html)

### pip

`for Python-3.10 only`

### build

- @2022 [Windows で Blender 最新版の bpy をソースコードからビルドして、インストールする（Build Tools for Visual Studio を利用）（書きかけ）](https://www.kkaneko.jp/tools/win/bpy.html)
- @2018 [Blenderのモジュールビルドとインストール(Windows) - Qiita](https://qiita.com/ousttrue/items/db68f5a1939fd3a9d982)

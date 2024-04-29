---
title: rna_info から型hintを作る
---

bpy.types などは rna_info から情報を取得できます。

```py
import bpy
import rna_info # import bpy すると import できる
structs, funcs, ops, props = rna_info.BuildRNAInfo()
```

:::tip
blender 本体のドキュメントは、rna_info から sphinx 向けの rst を生成しています。
:::

:::warning
bmesh, mathutils などは rna_info がありません。
:::

:::pylance stub order

1. user code
2. stub
3. stub package(`-stub` `*.pyi`)
4. inline package(annotation `py.typed`)
5. typeshed
   `typings/bpy`

:::

:::tip 一部の機能は python で追加されている

なので rna_info には含まれない(bpy.types.children など)。

https://projects.blender.org/blender/blender/src/branch/main/scripts/modules/bpy_types.py
:::

[blender/blender/intern/tools/dump_rna2xml.py at master · lubosz/blender · GitHub](https://github.com/lubosz/blender/blob/master/blender/intern/tools/dump_rna2xml.py)

## 実装例

### Blender-PyCharm

https://github.com/ranjian0/Blender-PyCharm

### bpystubgen

sphinx 向けの rst をから 型ヒントを生成する。

- https://github.com/mysticfall/bpystubgen

```sh
pip install blender-stubs==3.12.27
```

- https://github.com/mysticfall/bpystubgen/issues/3

#### usage

- https://download.blender.org/source/

```sh
> cd blender-4.1.1
> py .\doc\python_api\sphinx_doc_gen.py
# output to doc/python_api/sphinx-in

> py -m bpystubgen doc/python_api/sphinx-in stub
```

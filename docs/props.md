---
sidebar_position: 6
---

[Blender の RNA プロパティと ID プロパティとの違い](https://dskjal.com/blender/rna-vs-id-property.html)

## bpy.props

- https://docs.blender.org/api/current/bpy.props.html
- https://gist.github.com/jirihnidek/2e5218dd8bf06787e538
- https://blender.stackexchange.com/questions/27361/duplicating-object-and-default-value-of-property

- https://dskjal.com/blender/rna-vs-id-property.html
- http://blenderscript.ni-moe.com/

## rna property

既存のRNA型に property を追加できる

```py
def register():
    bpy.types.Armature.humanoid = bpy.props.PointerProperty(
        type=human_rig.HumanoidProperties
    )
```

継承時

```py
# 型ヒント経由で特殊な処理をしているぽい？
class HumanoidProperties(bpy.types.PropertyGroup):
    # self.hips: str が追加されるが、
    # lsp は認識できない。
    hips: bpy.props.StringProperty(name="hips")  # type: ignore
```

### FloatProperty

- https://docs.blender.org/api/current/bpy.props.html#bpy.props.FloatProperty

### PointerProperty

- https://docs.blender.org/api/current/bpy.types.PointerProperty.html
- https://blender.stackexchange.com/questions/6975/is-it-possible-to-use-bpy-props-pointerproperty-to-store-a-pointer-to-an-object/98651#98651

ObjectやPropertyGroupへの参照

- [Property Definitions (bpy.props) — Blender Python API](https://docs.blender.org/api/current/bpy.props.html)

[`bpy.types.PropertyGroup`](https://docs.blender.org/api/current/bpy.types.PropertyGroup.html#bpy.types.PropertyGroup "bpy.types.PropertyGroup") or [`bpy.types.ID`](https://docs.blender.org/api/current/bpy.types.ID.html#bpy.types.ID "bpy.types.ID").

```python
class MaterialSettings(bpy.types.PropertyGroup):
    my_int: bpy.props.IntProperty()
    my_float: bpy.props.FloatProperty()
    my_string: bpy.props.StringProperty()

bpy.utils.register_class(MaterialSettings)

bpy.types.Material.my_settings = bpy.props.PointerProperty(type=MaterialSettings)
```

### floatVector

```python
bpy.types.Scene.my_vector = bpy.props.FloatVectorProperty(
		default=(1, 1, 1),
		subtype='DIRECTION')

class OP:
    scale: bpy.props.FloatVectorProperty(  # type: ignore
        name="拡大率",
        description="複製したオブジェクトの拡大率を設定します",
        default=(1.0, 1.0, 1.0),
        subtype="XYZ",
        unit="LENGTH",
    )
    rotation: bpy.props.FloatVectorProperty(  # type: ignore
        name="回転角度",
        description="複製したオブジェクトの回転角度を設定します",
        default=(0.0, 0.0, 0.0),
        subtype="AXISANGLE",
        unit="ROTATION",
    )
    offset: bpy.props.FloatVectorProperty(  # type: ignore
        name="オフセット",
        description="複製したオブジェクトの配置位置からのオフセットを設定します",
        default=(0.0, 0.0, 0.0),
        subtype="TRANSLATION",
        unit="LENGTH",
    )
```

### enum

```python
def location_list_fn(scene, context):
    items = [("3D_CURSOR", "3Dカーソル", "3Dカーソル上に配置します"), ("ORIGIN", "原点", "原点に配置します")]
    items.extend([("OBJ_" + o.name, o.name, "オブジェクトに配置します") for o in bpy.data.objects])

    return items

class OP:
    location: bpy.props.EnumProperty(  # type: ignore
        name="配置位置", description="複製したオブジェクトの配置位置", items=location_list_fn
    )
```

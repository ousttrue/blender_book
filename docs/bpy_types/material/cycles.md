
## Cycles

- @2015 [The Cycles Input Encyclopedia &mdash; Blender Guru](https://www.blenderguru.com/articles/cycles-input-encyclopedia)
- [python - Any way of serializing Blender cycles materials data? - Blender Stack Exchange](https://blender.stackexchange.com/questions/43017/any-way-of-serializing-blender-cycles-materials-data)

```py
from rna_xml import rna2xml
import bpy

material = bpy.context.object.active_material
xml = rna2xml(root_rna=material.node_tree, root_node = "glTF Metallic Roughness")
print(xml)
```

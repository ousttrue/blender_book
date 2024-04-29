- [Shader Nodes](https://docs.blender.org/manual/en/latest/render/shader_nodes/index.html)

[Control Cycles/Eevee material nodes and material properties using python? - Blender Stack Exchange](https://blender.stackexchange.com/questions/23436/control-cycles-material-nodes-and-material-properties-in-python)

```python
blender_material.use_nodes = True
tree = blender_material.node_tree
for x in tree.nodes:
print(x)
```

## ShaderNode

- @2019 [BlenderのShader NodesにPythonからアクセスする #Python - Qiita](https://qiita.com/sketchbooks99/items/da828a102edc401f649a)

### ShaderNodeOutputMaterial("Material Output")

### ShaderNodeBsdfPrincipled("Principled BSDF")

### NodeGroup

- [Blender Addon List: Addon: Node Group to Python Script (.ngr)](http://blenderaddonlist.blogspot.com/2014/08/addon-node-group-to-python-script-ngr.html)

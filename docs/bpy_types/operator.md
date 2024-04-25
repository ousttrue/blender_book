# operator

https://docs.blender.org/api/current/bpy.types.Operator.html

```py
import bpy


class HelloWorldOperator(bpy.types.Operator):
    bl_idname = "wm.hello_world"
    bl_label = "Minimal Operator"

    def execute(self, context):
        print("Hello World")
        return {'FINISHED'}

bpy.utils.register_class(HelloWorldOperator)

# test call to the newly defined operator
bpy.ops.wm.hello_world()
```

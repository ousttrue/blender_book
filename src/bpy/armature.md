# armature

```py
def create_humanoid():
    print('#### create_humanoid ####')
    # data
    armature = bpy.data.armatures.new(name='Armature')
    # obj
    obj = bpy.data.objects.new(name='Armature', object_data=armature)
    # link
    bpy.context.scene.collection.objects.link(obj)
    # edit mode
    bpy.context.view_layer.objects.active = obj
    print(bpy.context.object.mode)
    bpy.ops.object.mode_set(mode='EDIT')
    # add bone
    bone = armature.edit_bones.new('Bone')
    bone.tail = [0, 0, 1]
```

```py
# data
data = bpy.data.armatures.new(name = "Armature")
# obj
obj = bpy.data.objects.new(name = "Armature", object_data = data)
# link
bpy.context.scene.collection.objects.link(obj)
```

boneの追加
```py
# create hips
with enter_edit_mode():
    hips = armature.edit_bones.new('hips')
    ot.report({'INFO'}, f'create: {hips}'
```

* <https://docs.blender.org/api/current/bpy.types.Armature.html>
* <https://docs.blender.org/api/current/bpy.types.Bone.html>
* <https://docs.blender.org/api/current/bpy.types.ArmatureEditBones.html#bpy.types.ArmatureEditBones>
* <https://docs.blender.org/api/current/info_gotcha.html#editbones-posebones-bone-bones>
* <https://dskjal.com/blender/bone-script.html>

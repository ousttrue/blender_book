---
title: bpy.types.Armature
---

## bpy.types.Armature

- https://docs.blender.org/api/current/bpy.types.Armature.html

```py
# data
data = bpy.data.armatures.new(name = "Armature")
# obj
obj = bpy.data.objects.new(name = "Armature", object_data = data)
# link
bpy.context.scene.collection.objects.link(obj)
```

## bone

- https://docs.blender.org/api/current/info_gotcha.html#editbones-posebones-bone-bones
- https://dskjal.com/blender/bone-script.html

### bpy.types.Bone

- https://docs.blender.org/api/current/bpy.types.Bone.html

```python
for bone in a.bones:
	print(bone)
```

### bpy.types.EditBone

- https://docs.blender.org/api/current/bpy.types.ArmatureEditBones.html#bpy.types.ArmatureEditBones

```py
# create hips
with enter_edit_mode():
    hips = armature.edit_bones.new('hips')
    ot.report({'INFO'}, f'create: {hips}'
```

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

## bpy.types.Pose

### bpy.types.PoseBone

`Armature.pose` ではなく `obj.pose` であることに注意。

```python
o = bpy.context.active_object
pose = o.pose

for b in pose.bones:
	print(b)
```

### POSE mode

```python
@contextlib.contextmanager
def enter_pose(obj: bpy.types.Object):
    bpy.context.view_layer.objects.active = obj
    if bpy.context.mode == 'POSE':
        yield
    else:
        bpy.ops.object.posemode_toggle()
        try:
            yield
        finally:
            bpy.context.view_layer.objects.active = obj
            bpy.ops.object.posemode_toggle()

```

## Snap

カーソルによるハックでできる。
バグ仕様みたいな。

- [rigging - Snapping Bones to Bones (In Other Armature) - Blender Stack Exchange](https://blender.stackexchange.com/questions/194024/snapping-bones-to-bones-in-other-armature)

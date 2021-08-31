# mesh

tessface無くなった
	https://dskjal.com/blender/script-279-to-280.html

	http://blenderscripting.blogspot.com/2011/06/using-frompydata.html

	https://docs.blender.org/api/current/bpy.types.Mesh.html
 	https://docs.blender.org/api/current/bpy.types.MeshTessFace.html
  https://docs.blender.org/api/current/bpy.types.MeshVertex.html

 [Blender PythonのMeshデータアクセスのチートシート https://qiita.com/kenyoshi17/items/b93bbba6451e3c6017e5]

```py
import bpy

me = bpy.context.object.data
uv_layer = me.uv.layers.active.data

for poly in me.polygons:
    print("Polygon index: %d, length: %d" % (poly.index, poly.loop_total))

    # range is used here to show how the polygons reference loops,
    # for convenience 'poly.loop_indices' can be used instead.
    for loop_index in range(poly.loop_start, poly.loop_start + poly.loop_total):
        print("    Vertex: %d" % me.loops[loop_index].vertex_index)
        print("    UV: %r" % uv_layer[loop_index].uv)
```

* [Blender PythonのMeshデータアクセスのチートシート https://qiita.com/kenyoshi17/items/b93bbba6451e3c6017e5]

Mesh.vertices (3 points in space)
Mesh.edges (reference 2 vertices)
Mesh.loops (reference a single vertex and edge) = indices ?
Mesh.polygons: (reference a range of loops) = faces ?

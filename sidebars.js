// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  sidebar: [
    'index',
    'structure',
    'context',
    'mode',
    {
      type: 'category',
      label: 'Operator',
      link: { type: 'doc', id: 'operator/index' },
      items: [
        'operator/import_export',
      ]
    },
    {
      type: 'category',
      label: 'bpy.types',
      link: { type: 'doc', id: 'bpy_types/index' },
      items: [
        'bpy_types/object',
        {
          type: 'category',
          label: 'ID',
          link: { type: 'doc', id: 'bpy_types/data/index' },
          items: [
            {
              type: 'category',
              label: 'Mesh',
              link: { type: 'doc', id: 'bpy_types/data/mesh/index' },
              items: [
              ]
            },
          ]
        },
        {
          type: 'category',
          label: 'Material',
          link: { type: 'doc', id: 'bpy_types/material/index' },
          items: [
            'bpy_types/material/shadernodes',
          ]
        },
      ]
    },
    {
      type: 'category',
      label: 'addon',
      link: { type: 'doc', id: 'addon/index' },
      items: [
        'addon/python_module',
        'addon/bl_info',
        'addon/register',
      ],
    },
    'props',
    'mathutils/index',
    {
      type: 'category',
      label: 'BMesh',
      link: { type: 'doc', id: 'bmesh/index' },
      items: [
        'bmesh/bmesh_types',
      ]
    },
    {
      type: 'category',
      label: 'bpy.bpy_extras',
      link: { type: 'doc', id: 'bpy_extras/index' },
      items: [
        'bpy_extras/io_utils',
      ]
    },
    'build',
    {
      type: 'category',
      label: '開発環境',
      link: { type: 'doc', id: 'dev/index' },
      items: [
        'dev/rna_info',
      ]
    },
  ],
};

export default sidebars;

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  sidebar: [
    'index',
    {
      type: 'category',
      label: 'addon',
      link: { type: 'doc', id: 'addon/index' },
      items: [
        'addon/python_module',
        'addon/bl_info',
        'addon/register',
        {
          type: 'category',
          label: 'Operator',
          link: { type: 'doc', id: 'addon/operator/index' },
          items: [
            'addon/operator/import_export',
          ]

        },
      ],
    },
    'bpy_types/index',
    'props',
    'mathutils/index',
    'dev/index',
  ],
};

export default sidebars;

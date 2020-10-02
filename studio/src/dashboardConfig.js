export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f774b6a601c96587b881559',
                  title: 'Sanity Studio',
                  name: 'ffori-studio',
                  apiId: '72a94c08-c2ae-4a77-8eb9-5aebc1f0e54a'
                },
                {
                  buildHookId: '5f774b6a422a4d51f3408b0c',
                  title: 'Blog Website',
                  name: 'ffori',
                  apiId: '14f14471-96ac-4b1f-9be7-2b3bcb092023'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hcdw/ffori',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://ffori.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

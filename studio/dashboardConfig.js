export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5deeaa0d1cc99a8a44c19fda',
                  title: 'Sanity Studio',
                  name: 'jasperspaws-studio',
                  apiId: '83a9852b-fab5-4d4b-8ebb-0378d6cb3c8f'
                },
                {
                  buildHookId: '5deeaa0dcf91328c4931851b',
                  title: 'Blog Website',
                  name: 'jasperspaws',
                  apiId: '2c3f90e6-5c19-4f5c-b9a2-c494ca5dda6e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/BoraALAP/jasperspaws',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://jasperspaws.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

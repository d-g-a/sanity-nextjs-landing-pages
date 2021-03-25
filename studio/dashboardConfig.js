export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '605bfe9e5efa610083fc0ac6',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-gewpcimo',
                  apiId: '5ab84824-ce5c-4f22-ae0d-52a70ae89829'
                },
                {
                  buildHookId: '605bfe9f24221b00aab25427',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-gnyiu8o9',
                  apiId: '64c5148c-134e-4552-9910-46dc0596643a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dieglitter/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-gnyiu8o9.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

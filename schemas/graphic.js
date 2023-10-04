export default {
    name: 'graphic',
    type: 'document',
    title: 'Graphic',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
      },
      {
        name: 'link',
        type: 'string',
        title: 'Link'
      },
      {
        name: 'whatIHaveDone',
        type: 'array',
        title: 'Array of what I have done',
        of: [
          {
            type: 'object',
            name: 'whatIHaveDone',
            fields: [
              {
                type: 'string',
                name: 'task_title',
              },
              {
                type: 'text',
                name: 'task_description',
              },
            ],
          },
        ],
      },
      {
        name: 'array_of_posters',
        type: 'array',
        title: 'Array of posters',
        of: [
            {
                title: 'Poster',
                name: 'poster',
                type: 'image',
                options: {
                    hotspot: true, // <-- Defaults to false
                },
                fields: [
                    {
                        name: 'caption',
                        type: 'string',
                        title: 'Caption',
                    },
                    {
                        name: 'attribution',
                        type: 'string',
                        title: 'Attribution',
                    }
                ]
            }
        ]
    }
    ],
    preview: {
      select: {
        title: 'name',
        desc: 'description',
      },
      prepare({title, desc}) {
        return {
          title,
          subtitle: desc,
        }
      },
    },
  }
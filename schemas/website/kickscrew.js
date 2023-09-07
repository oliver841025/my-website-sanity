export default {
    name: 'kickscrew',
    type: 'document',
    title: 'KICKSCREW',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description'
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
                            type: 'string', name: 'task_title'
                        },
                        {
                            type: 'text', name: 'task_description'
                        },
                    ]
                }
            ]
        },
        {
            name: 'array_of_posters',
            type: 'array',
            title: 'Array of posters',
            of: [
                {
                    type: 'object',
                    name: 'posters',
                    fields: [
                        {
                            title: 'Poster',
                            name: 'poster',
                            type: 'image',
                            options: {
                              hotspot: true // <-- Defaults to false
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
            ]
        },
    ]
}
export default {
    name: 'info',
    type: 'document',
    title: 'Info',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'content',
            type: 'text',
            title: 'Content'
        },
        {
            name: 'experience',
            type: 'array',
            title: 'Array for experience',
            of: [
                {
                    type: 'object',
                    name: 'experience',
                    fields: [
                        {
                            type: 'string', name:'duration'
                        },
                        {
                            type: 'string', name:'company'
                        },
                        {
                            type: 'string', name:'position'
                        }
                    ]
                }
            ]
        },
        {
            name: 'avatar',
            type: 'array',
            title: 'Array of avatars',
            of: [
                {
                    type: 'object',
                    name: 'avatar',
                    options: {
                        hotspot: true // <-- Defaults to false
                    },
                    fields: [
                        {
                            type: 'image', name: 'avatar'
                        },
                    ]
                }
            ]
        },
    ]
}
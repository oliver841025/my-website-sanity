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
    ]
}
export default {
    name: 'homepage',
    type: 'document',
    title: 'Homepage',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            title: 'Poster',
            name: 'poster',
            type: 'image',
            options: {
                hotspot: true, // <-- Defaults to false
            },
        },
    ],
    preview: {
      select: {
        title: 'name',
      },
      prepare({title}) {
        return {
          title,
        }
      },
    },
  }
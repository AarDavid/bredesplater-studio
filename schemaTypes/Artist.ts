// schemas/artist.ts
export default {
    name: 'artist',
    type: 'document',
    title: 'Artist',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options: {
          source: 'name',
          maxLength: 96,
        },
      },
      {
        name: 'bio',
        type: 'text',
        title: 'Bio',
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image',
        options: {
          hotspot: true,
        },
      },
      
    ],
  };
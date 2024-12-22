
// schemas/album.ts
export default {
    name: 'album',
    type: 'document',
    title: 'Album',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
      {
        name: 'label',
        type: 'string',
        title: 'Label',
      },
    {
        name: 'format',
        type: 'string',
        title: 'Format',
        options: {
            list: [
                { title: 'Vinyl', value: 'vinyl' },
                { title: 'CD', value: 'cd' },
            ],
        },
    },
      {
        name: 'releaseDate',
        type: 'datetime',
        title: 'Release Date',
        options: {
            dateFormat: 'YYYY',
        }
      },
      {
        name: 'details',
        type: 'text',
        title: 'Detaljer',
      },
      {
        name: 'conditionCoverRating',
        type: 'string',
        title: 'Cover condition Rating',
        options: {
          list: [
            { title: 'Mint (M)', value: 'M' },
            { title: 'Very Good Plus (VG+)', value: 'VG+' },
            { title: 'Very Good (VG)', value: 'VG' },
            { title: 'Very Good (VG-)', value: 'VG-' },
            { title: 'Good Plus (G+)', value: 'G+' },
            { title: 'Good (G)', value: 'G' },
            { title: 'Good (G-)', value: 'G-' },
          ],
        },
        
      },
      {
        name: 'conditionVinylRating',
        type: 'string',
        title: 'Vinyl condition Rating',
        options: {
          list: [
            { title: 'Mint (M)', value: 'M' },
            { title: 'Very Good Plus (VG+)', value: 'VG+' },
            { title: 'Very Good (VG)', value: 'VG' },
            { title: 'Very Good (VG-)', value: 'VG-' },
            { title: 'Good Plus (G+)', value: 'G+' },
            { title: 'Good (G)', value: 'G' },
            { title: 'Good (G-)', value: 'G-' },
          ],
        },
        
      },
      {
        name: 'coverImage',
        type: 'image',
        title: 'Cover Image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'artist',
        type: 'reference',
        to: [{ type: 'artist' }],
        title: 'Artist',
      },
    ],
  };
  
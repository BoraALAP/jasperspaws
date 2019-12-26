import {format} from 'date-fns'

export default {
  name: 'dog',
  type: 'document',
  title: 'Dog',
  initialValue: () => ({
    adopted: false,
    publishedAt: new Date().toISOString(),
    foundAt: new Date().toISOString(),
    microchipped: false,
    vacinated: false,
    neutered: false
  }),
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Pet Name',
      description: 'Please write the Pet Name here',
      validation: Rule => Rule.required()
    },
    {
      name: 'adopted',
      type: 'boolean',
      title: 'Adopted',
      description: 'if animal is adopted please activate this.',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: "You don't need to write this, you can generate it",
      validation: Rule => Rule.required(),
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
      description: 'This can be used to schedule post for publishing',
      validation: Rule => Rule.required()
    },
    {
      name: 'foundAt',
      type: 'datetime',
      title: 'Found',
      description: 'this is for when the dog is found'
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Main image'
    },
    {
      name: 'authors',
      title: 'Authors',
      description: 'This will not be displayed to the Visitors',
      type: 'array',
      of: [
        {
          type: 'authorReference'
        }
      ]
    },
    {
      name: 'ages',
      type: 'string',
      title: 'Age Category',
      validation: Rule => Rule.required(),
      options: {
        list: [
          {title: 'Puppy', value: 'puppy'},
          {title: 'Young', value: 'young'},
          {title: 'Adult', value: 'adult'},
          {title: 'Senior', value: 'senior'}
        ], // <-- predefined values
        layout: 'radio' // <-- defaults to 'dropdown'
      }
    },
    {
      name: 'ageWrite',
      type: 'string',
      title: 'Age',
      description: 'If you know the full age, please write here'
    },

    {
      name: 'breed',
      type: 'string',
      title: 'Breed',
      description: 'Please write the Breed here'
    },
    {
      name: 'gender',
      type: 'string',
      title: 'Gender',
      options: {
        list: [
          {title: 'Female', value: 'female'},
          {title: 'Male', value: 'male'}
        ], // <-- predefined values
        layout: 'radio' // <-- defaults to 'dropdown'
      }
    },
    {
      name: 'size',
      type: 'string',
      title: 'Size',
      options: {
        list: [
          {title: 'Small', value: 'small'},
          {title: 'Medium', value: 'medium'},
          {title: 'Large', value: 'large'},
          {title: 'Extra Large', value: 'extra large'}
        ], // <-- predefined values
        layout: 'radio' // <-- defaults to 'dropdown'
      }
    },
    {
      name: 'weight',
      type: 'string',
      title: 'Weight',
      description: 'Write the weight'
    },
    {
      name: 'coatLength',
      type: 'string',
      title: 'Coat Length',
      options: {
        list: [
          {title: 'Hairless', value: 'hairless'},
          {title: 'Short', value: 'short'},
          {title: 'Medium', value: 'medium'},
          {title: 'Long', value: 'long'}
        ], // <-- predefined values
        layout: 'radio' // <-- defaults to 'dropdown'
      }
    },
    {
      name: 'goodWiths',
      type: 'array',
      title: 'Good With',
      of: [
        {
          type: 'goodWithReference'
        }
      ]
    },
    {
      name: 'microchipped',
      type: 'boolean',
      title: 'Microchipped',
      description: 'activate'
    },
    {
      name: 'vacinated',
      type: 'boolean',
      title: 'Vacinated',
      description: 'activate'
    },
    {
      name: 'neutered',
      type: 'boolean',
      title: 'Neutered / Spayed',
      description: 'activate'
    },
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Body'
    }
  ],
  orderings: [
    {
      name: 'publishingDateAsc',
      title: 'Publishing date new–>old',
      by: [
        {
          field: 'publishedAt',
          direction: 'asc'
        },
        {
          field: 'name',
          direction: 'asc'
        }
      ]
    },
    {
      name: 'publishingDateDesc',
      title: 'Publishing date old->new',
      by: [
        {
          field: 'publishedAt',
          direction: 'desc'
        },
        {
          field: 'name',
          direction: 'asc'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'name',
      publishedAt: 'publishedAt',
      slug: 'slug',
      media: 'mainImage'
    },
    prepare ({title = 'No title', publishedAt, slug = {}, media}) {
      const dateSegment = format(publishedAt, 'YYYY/MM')
      const path = `/${dateSegment}/${slug.current}/`
      return {
        title,
        media,
        subtitle: publishedAt ? path : 'Missing publishing date'
      }
    }
  }
}

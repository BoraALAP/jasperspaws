export default {
  name: 'goodWithReference',
  type: 'object',
  title: 'GoodWith reference',
  fields: [
    {
      name: 'goodWith',
      type: 'reference',
      to: [
        {
          type: 'goodWith'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'goodWith.title'
      // media: 'goodWith.image.asset'
    }
  }
}

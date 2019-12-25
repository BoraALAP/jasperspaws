import S from '@sanity/desk-tool/structure-builder'
import MdSettings from 'react-icons/lib/md/settings'
import MdPerson from 'react-icons/lib/md/person'
import MdPhotoSizeSelectSmall from 'react-icons/lib/md/photo-size-select-small'
import MdAddBox from 'react-icons/lib/md/add-box'

const hiddenDocTypes = listItem =>
  !['age', 'author', 'dog', 'siteSettings', 'size', 'gender', 'goodWith', 'coatLength'].includes(
    listItem.getId()
  )

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Dogs')
        .icon(MdAddBox)
        .schemaType('dog')
        .child(S.documentTypeList('dog').title('Dogs')),
      S.listItem()
        .title('Authors')
        .icon(MdPerson)
        .schemaType('author')
        .child(S.documentTypeList('author').title('Authors')),
      S.listItem()
        .title('GoodWiths')
        .schemaType('goodWith')
        .child(S.documentTypeList('goodWith').title('GoodWiths')),
      S.listItem()
        .title('Settings')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])

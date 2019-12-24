import {format, distanceInWords, differenceInDays} from 'date-fns';
import React from 'react';
import {buildImageObj} from '../lib/helpers';
import {imageUrlFor} from '../lib/image-url';
import PortableText from '../components/portableText';

function DogPost (props) {
  const {_rawBody, ages, name, mainImage, publishedAt} = props

  console.log(props)

  return (
    <article>
      {mainImage && mainImage.asset && (
        <div>
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit('crop')
              .auto('format')
              .url()}
            alt={mainImage.alt}
          />
        </div>
      )}
      <Container>
        <div>
          <div>
            <h1>{name}</h1>
            {_rawBody && <PortableText blocks={_rawBody} />}
          </div>
          <aside>
            {publishedAt && (
              <div>
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), 'MMMM Do, YYYY')}
              </div>
            )}
            {ages && (
              <div>
                <h3>Age</h3>
                <ul>
                  {ages.map(({age, _key}) => (
                    <li key={age._id}>{age.title}</li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </Container>
    </article>
  )
}

export default DogPost

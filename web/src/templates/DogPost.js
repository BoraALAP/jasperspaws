import React from "react";
import { graphql } from "gatsby";
import GraphQLErrorList from "../components/graphql-error-list";
import DogPost from "../pages/DogPost";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import { toPlainText } from "../lib/helpers";

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    dog: sanityDog(id: { eq: $id }) {
      id
      publishedAt
      foundAt

      ageWrite
      breed

      weight
      microchipped
      neutered
      mainImage {
        ...SanityImage
        alt
      }
      name
      slug {
        current
      }

      _rawBody(resolveReferences: { maxDepth: 5 })
      authors {
        _key
        author {
          image {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
          }
          name
        }
      }
      ages
      size
    }
  }
`;

const DogPostTemplate = props => {
  const { data, errors } = props;
  const post = data && data.dog;
  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}
      {post && (
        <SEO
          title={post.name || "Untitled"}
          description={toPlainText(post._rawExcerpt)}
          image={post.mainImage}
        />
      )}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {post && <DogPost {...post} />}
    </Layout>
  );
};

export default DogPostTemplate;

import React from "react";
import { graphql } from "gatsby";
import GraphQLErrorList from "../components/graphql-error-list";
import DogPostWeb from "../components/post/DogPostWeb";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import { toPlainText } from "../lib/helpers";

export const query = graphql`
  query DogPostTemplateQuery($id: String!) {
    dog: sanityDog(id: { eq: $id }) {
      id
      ages
      ageWrite
      breed
      gender
      name
      microchipped
      neutered
      vacinated
      size
      weight
      coatLength
      goodWiths {
        goodWith {
          title
          _id
        }
      }
      mainImage {
        ...SanityImage
        alt
      }
      _rawBody(resolveReferences: { maxDepth: 10 })
    }
  }
`;

const DogPostTemplate = props => {
  const { data, errors } = props;
  const dog = data && data.dog;
  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}
      {dog && (
        <SEO
          title={dog.name || "Untitled"}
          description={toPlainText(dog._rawExcerpt)}
          image={dog.mainImage}
        />
      )}

      {errors && (
        <div>
          <GraphQLErrorList errors={errors} />
        </div>
      )}

      {dog && <DogPostWeb {...dog} />}
    </Layout>
  );
};

export default DogPostTemplate;

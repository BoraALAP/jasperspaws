import React from "react";
import { graphql, Link } from "gatsby";
import GraphQLErrorList from "../components/graphql-error-list";
import DogPostWeb from "../components/post/DogPostWeb";
import SEO from "../components/seo";
import Layout from "../components/global/Layout";
import { toPlainText } from "../lib/helpers";

export const query = graphql`
  query DogPostTemplateQuery($id: String!) {
    dog: sanityDog(id: { eq: $id }) {
      id
      adopted
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

  // const prevLink = props.location.state.prevPath;
  // console.log(prevLink);

  return (
    <Layout>
      {errors && <SEO pageTitle="GraphQL Error" />}
      {dog && (
        <SEO
          pageTitle={dog.name || "Untitled"}
          description={toPlainText(dog._rawExcerpt)}
          image={dog.mainImage}
        />
      )}

      {errors && (
        <div>
          <GraphQLErrorList errors={errors} />
        </div>
      )}
      {/* <Link to={prevLink}>back</Link> */}
      {dog && <DogPostWeb {...dog} />}
    </Layout>
  );
};

export default DogPostTemplate;

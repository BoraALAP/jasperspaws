import React, { useContext } from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import media from "styled-media-query";
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from "../lib/helpers";

import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";

import ListingMain from "../components/listing/ListingMain";

export const query = graphql`
  fragment SanityImage on SanityMainImage {
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

  query ListingPage {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    dog: allSanityDog(
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          _id
          adopted
          ageWrite
          ages
          breed
          id
          goodWiths {
            goodWith {
              _id
              title
            }
            _key
          }
          gender
          coatLength
          microchipped
          name
          neutered
          size
          vacinated
          slug {
            current
          }
          publishedAt
          mainImage {
            ...SanityImage
            alt
          }
        }
      }
    }
  }
`;

const Listing = props => {
  const { data, errors } = props;

  // const { store, dispatch } = useContext(appContext);

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;
  const postNodes = (data || {}).dog
    ? mapEdgesToNodes(data.dog)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : [];

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />

      <ListingMain postNodes={postNodes} adoptable />
    </Layout>
  );
};

export default Listing;

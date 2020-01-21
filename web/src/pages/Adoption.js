import React from "react";
import styled from "styled-components";
import media from "styled-media-query";

import Layout from "../components/global/Layout";
import SEO from "../components/seo";

import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from "../lib/helpers";

import ListingMainHome from "../components/listing/ListingMainHome";

import { graphql } from "gatsby";
import Title from "../components/ui/Title";
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

  query Adoption {
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

const Adoption = props => {
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
      <SEO pageTitle="Adoption" />
      <Title title="Adoption Process" />
      <Content>
        <p>If you are interested in adopting a dog listed, please fill out the adoption form. </p>
        <p>
          We will review the adoption form and contact the candidate you if they are a good fit for
          the dog interested in. Please note that due to high volume of application, we will only
          contact those we feel are the right match for the dog, as we simply do not have the
          resources to respond to every inquiry.
        </p>
        <p>
          Once we review all applications, we will be in contact to complete a home visit. Please
          note that a home visit does not mean that the application has been fully approved, as we
          often conduct multiple home visits for the same dog to find the best match, as our
          ultimate responsibility is to the dogs. If the candidate is not selected for the dog
          applied for, but wish to apply for another dog in the future, a second home visit will not
          be required.
        </p>
        <p>
          Once an application is approved, the adoption is finalized by signing an adoption contract
          and transferring the non refundable adoption fee.
        </p>
        <p>
          All adopters will have an opportunity to meet the dog they are interested in prior to
          adoption. Please note that we do NOT arrange transport of the dog in order to facilitate a
          meet and greet. It is the adopter’s responsibility to visit the dog in their foster home.
        </p>
      </Content>
      <Title title="Adoption Application" />
      <Detail>
        <p>
          Please send your application to{" "}
          <a href="mailto:jasperspawsrescue@gmail.com" target="_blank">
            jasperspawsrescue@gmail.com
          </a>
        </p>
      </Detail>
      <Title title="Happy Tails" />
      <ListingMainHome postNodes={postNodes} />
    </Layout>
  );
};

const Detail = styled.div`
  background-color: ${({ theme }) => theme.color.two_bg};
  padding: ${({ theme }) => theme.pagePadding};
  display: grid;
  justify-self: center;
  margin: 24px auto;
  width: max-content;
  p {
    margin-bottom: 0;
  }
`;

const Content = styled.div`
  display: grid;
  justify-content: center;

  p {
    max-width: 600px;
  }
`;

export default Adoption;

import React from "react";

import { graphql } from "gatsby";
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from "../lib/helpers";
import GraphQLErrorList from "../components/graphql-error-list";

import styled from "styled-components";

import SEO from "../components/seo";
import Layout from "../components/global/Layout";

import Enterence from "../components/home/Enterence";
import HomeListing from "../components/home/HomeListing";
import BottomBanner from "../components/home/BottomBanner";
import PawDivider from "../components/ui/decoration/PawDivider";

export const query = graphql`
  query HomeListing {
    dog: allSanityDog(
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          adopted
          _id
          name
          breed
          ages
          ageWrite
          publishedAt
          goodWiths {
            goodWith {
              _id
              title
            }
            _key
          }
          slug {
            current
          }
          mainImage {
            ...SanityImage
            alt
          }
        }
      }
    }
  }
`;

const IndexPage = props => {
  const { data, errors } = props;

  // const { store, dispatch } = useContext(appContext);

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const postNodes = (data || {}).dog
    ? mapEdgesToNodes(data.dog)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : [];

  return (
    <Layout>
      <SEO pageTitle="Home Page" />
      <PageContent>
        <Enterence />
        <HomeListing postNodes={postNodes} />
        <Container>
          <CopyLine>
            <PawDivider />
            <p>
              They are often abandoned, injured, tortured or abused. Struggling to survive on the
              streets. Our goal is to bring as many of these beautiful souls to Canada as possible,
              and find them forever loving homes. They all deserve to be loved, taken care of and
              showered with the same love that they show us.
            </p>
            <PawDivider />
          </CopyLine>
          <BottomBanner />
          <ContainerBG />
        </Container>
      </PageContent>
    </Layout>
  );
};

const Container = styled.div`
  position: relative;
`;

const PageContent = styled.div`
  display: grid;
  grid-gap: 4em;
`;

const CopyLine = styled.div`
  display: grid;
  justify-self: center;
  margin: 0 auto 3em;
  max-width: 600px;
  p {
    margin: ${({ theme }) => theme.pagePadding};
    text-align: center;
    color: ${({ theme }) => theme.color.five};
  }
`;

const ContainerBG = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.color.three};
  opacity: 0.03;
  border-radius: 100%;
  height: 80vw;
  width: 90vw;
  top: -5vw;
  right: -10vw;
  z-index: -30;
`;

export default IndexPage;

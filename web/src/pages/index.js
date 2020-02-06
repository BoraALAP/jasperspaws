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

import Enterence from "../components/home/enterence";
import HomeListing from "../components/home/HomeListing";
import BottomBanner from "../components/home/BottomBanner";
import PawDivider from "../components/ui/decoration/PawDivider";

export const query = graphql`
  query HomeListing {
    dog: allSanityDog(
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
      limit: 4
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

  const postNodes = (data || {}).dog.edges;

  console.log(postNodes, data.dog.edges);

  return (
    <Layout>
      <SEO pageTitle="Home Page" />
      <Enterence />
      <HomeListing postNodes={postNodes} />
      <Container>
        <CopyLine>
          <PawDivider />
          <p>
            They are mostly abandoned, thriving to survive; some of them found as injured, tortured,
            and abused. Our goal is to bring as many stray dogs as possible over to Canada, and find
            forever homes for them to live safely. They all deserve to be loved, taken care of and
            be part of your families..
          </p>
          <PawDivider />
        </CopyLine>
        <BottomBanner />
        <ContainerBG />
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  position: relative;
`;

const CopyLine = styled.div`
  display: grid;
  justify-self: center;
  margin: calc(${({ theme }) => theme.pagePadding} * 2) auto;
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
  height: 90vw;
  width: 90vw;
  top: -5vw;
  right: -10vw;
`;

export default IndexPage;

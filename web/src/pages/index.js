import React, { useEffect } from "react";

import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from "../lib/helpers";

import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../components/global/Layout";

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
  }
`;

const IndexPage = props => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;
  console.log(site);

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  return (
    <Layout>
      <SEO pageTitle="Home" />
    </Layout>
  );
};

export default IndexPage;

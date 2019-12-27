import React from "react";
import styled from "styled-components";
import media from "styled-media-query";

import Layout from "../containers/layout";
import SEO from "../components/seo";

const Contact = () => {
  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />

      <ListingMain postNodes={postNodes} adoptable />
    </Layout>
  );
};

export default Contact;

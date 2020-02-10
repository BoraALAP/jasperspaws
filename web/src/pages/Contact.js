import React from "react";
import styled from "styled-components";
import media from "styled-media-query";

import Layout from "../components/global/Layout";
import SEO from "../components/seo";
import Title from "../components/ui/Title";

const Contact = () => {
  return (
    <Layout>
      <SEO pageTitle="Contact" />
      <Container>
        <Title title="Contact" />
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  display: grid;
  justify-content: center;
  h6 {
    padding: 16px;
  }
`;

export default Contact;

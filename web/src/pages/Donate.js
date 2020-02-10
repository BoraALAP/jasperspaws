import React from "react";
import styled from "styled-components";
import media from "styled-media-query";

import Layout from "../components/global/Layout";
import SEO from "../components/seo";
import Title from "../components/ui/Title";

const Donate = props => {
  return (
    <Layout>
      <SEO pageTitle="Donate" />
      <Container>
        <Title title="Donate" />
      </Container>
    </Layout>
  );
};

const Container = styled.div``;

export default Donate;

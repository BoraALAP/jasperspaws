import React from "react";
import styled from "styled-components";
import media from "styled-media-query";

import Layout from "../components/global/Layout";
import SEO from "../components/seo";

const Contact = () => {
  return (
    <Layout>
      <SEO pageTitle="Contact" />
      <Container>
        <h6>
          For general inquiries: <a href="mailto=info@jasperspaws.com">info@jasperspaws.com</a>
        </h6>
        <h6>
          For adoption inquiries: <a href="mailto=adopt@jasperspaws.com">adopt@jasperspaws.com</a>
        </h6>
        <h6>
          For foster inquiries: <a href="mailto=foster@jasperspaws.com">foster@jasperspaws.com</a>
        </h6>
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  display: grid;
  justify-content: center;
  padding: ${({ theme }) => theme.pagePadding};
  h6 {
    padding: 16px;
  }
`;

export default Contact;

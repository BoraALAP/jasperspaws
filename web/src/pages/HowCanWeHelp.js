import React from "react";
import styled from "styled-components";
import media from "styled-media-query";

import Layout from "../components/global/Layout";
import SEO from "../components/seo";
import Title from "../components/ui/Title";

const HowCanWeHelp = () => {
  return (
    <Layout>
      <SEO pageTitle="How Can You Help" />
      <Title title="Foster" />
      <Content>
        <p>
          We are always looking for fosters to allow our dogs a safe place to land while they wait
          to find their forever homes, If you are interested in fostering, please email{" "}
          <a href="mailto:jasperspawsrescue@gmail.com" target="_blank">
            jasperspawsrescue@gmail.com
          </a>
        </p>
      </Content>

      <Title title="Volunteer" />
      <Content>
        <p>
          As a non-profit, we rely purely on our wonderful volunteers to get every day tasks done as
          well as airport pickups, fundraising and transportation. If you are interested in
          volunteering with us, please email{" "}
          <a href="mailto:jasperspawsrescue@gmail.com" target="_blank">
            jasperspawsrescue@gmail.com
          </a>
          .
        </p>
      </Content>
      <Title title="Donate" />
      <Content>
        <p>Coming Soon!</p>
      </Content>
    </Layout>
  );
};

const Content = styled.div`
  display: grid;
  justify-content: center;

  p {
    max-width: 600px;
  }
`;

export default HowCanWeHelp;

import React, { useContext } from "react";
import styled from "styled-components";
import media from "styled-media-query";

import Layout from "../components/global/Layout";
import SEO from "../components/seo";
import Title from "../components/ui/Title";

const About = props => {
  console.log(props);

  return (
    <Layout>
      <SEO pageTitle="About" />
      <Title title="About Us" />
      <Content>
        <p>
          We are a non-profit organization operating out of Toronto and Ottawa that aims to rescue
          street dogs in Turkey and find the loving and forever homes in Canada.
        </p>
        <p>
          There are thousands of stray dogs living on the streets of Turkey. Abandoned, injured,
          sometimes tortured or abused.
        </p>
        <p>
          Our goal is to bring as many of these beautiful and loving dogs to Canada as possible, so
          they can find their loving furever families and live the life they truly deserve.
        </p>
        <p>
          All dogs are are vet checked, vaccinated, microchipped and spayed/neutered (their age and
          health permitting) prior to adoption.
        </p>
        <p>
          Each dog’s adoption fee helps cover the cost of their veterinary care as well as their
          flight to Canada.
        </p>
        <p>Adoption fees may vary.</p>
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

export default About;

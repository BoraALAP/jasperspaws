import React, { useContext } from "react";
import styled from "styled-components";
import media from "styled-media-query";

import Layout from "../components/global/Layout";
import SEO from "../components/seo";

const About = props => {
  console.log(props);

  return (
    <Layout>
      <SEO pageTitle="About" />
    </Layout>
  );
};

export default About;

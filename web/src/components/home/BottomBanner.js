import React from "react";

import styled from "styled-components";
import Media from "styled-media-query";
import PageTransition from "../ui/PageTransition";

import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";

import BottomBannerImage from "../../assets/BottomBannerImage.jpg";

const BottomBanner = props => {
  return (
    <Container>
      <Image />
      <RightBox>
        <SectionTitle subtext="Love is give and take">
          Would You Like to Volunteer, Foster or Maybe Donate?
        </SectionTitle>
        <p>
          We are so thankful that we have many volunteers show empathy and understanding to the
          cause. However to be able to pay the expenses for transportation and doctor reports, and
          documents, there will be an adoption fee. This will enable us to rescue more lives. Any
          donations are accepted if you wish to support the organization.
        </p>
        <Buttons>
          <PageTransition to="/HowCanWeHelp/">
            <Button secondary>Volunteer</Button>
          </PageTransition>
          <PageTransition to="/HowCanWeHelp/">
            <Button secondary>Foster</Button>
          </PageTransition>
          <PageTransition to="/Donate/">
            <Button secondary>Donate</Button>
          </PageTransition>
        </Buttons>
      </RightBox>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  justify-content: center;
  grid-gap: 32px;
  z-index: 10;
  ${Media.greaterThan("medium")`
  grid-template-columns: 35vw auto;
    grid-auto-flow: column;
    display: grid;
    align-items: end;
    align-content: end;
    
    justify-content: start;
    `};
`;

const Image = styled.div`
  background-image: url(${BottomBannerImage});
  background-size: cover;
  background-position: right;
  display: grid;
  border-radius: 100%;
  justify-self: center;
  width: 60vw;
  height: 60vw;

  ${Media.greaterThan("medium")`
  width: 40vw;
  height: 40vw;
  position: relative;
  left: -10vw;
  `}
`;

const RightBox = styled.div`
  p {
    margin: 0;
    max-width: 600px;
  }
`;

const Buttons = styled.div`
  display: grid;
  grid-gap: 16px;
  margin: 24px 0;
  ${Media.greaterThan("medium")`
    grid-auto-flow: column;
    
    justify-content: start;
    `}
`;

export default BottomBanner;

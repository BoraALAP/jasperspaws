import React from "react";
import styled from "styled-components";
import Media from "styled-media-query";

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
          <Button secondary>Volunteer</Button>
          <Button secondary>Foster</Button>
          <Button secondary>Donate</Button>
        </Buttons>
      </RightBox>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  justify-content: center;
  grid-gap: 32px;

  ${Media.greaterThan("medium")`
  grid-template-columns: 35vw auto;
    grid-auto-flow: column;
    
    justify-content: start;
    `}
`;

const Image = styled.div`
  background-image: url(${BottomBannerImage});
  background-size: cover;
  background-position: right;
  display: grid;
  border-radius: 100%;

  width: 90vw;
  height: 90vw;

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

import React from "react";
import PageTransition from "../ui/PageTransition";

import { buildImageObj, cn, getBlogUrl } from "../../lib/helpers";
import { imageUrlFor } from "../../lib/image-url";

import styled from "styled-components";
import media from "styled-media-query";
import GoodWith from "./GoodWith";

const Card = props => {
  return (
    <PageTransition to={getBlogUrl(props.publishedAt, props.slug.current)} key={props._id}>
      <Container>
        {props.mainImage && props.mainImage.asset && (
          <Img
            src={imageUrlFor(buildImageObj(props.mainImage))
              .width(600)
              .height(Math.floor((9 / 16) * 600))
              .auto("format")
              .url()}
            alt={props.mainImage.alt}
          />
        )}

        <TextContainer>
          <Top>
            <h4>{props.name}</h4>
            <h6>
              {props.ageWrite
                ? props.ageWrite
                : props.ages.charAt(0).toUpperCase() + props.ages.slice(1)}
            </h6>
          </Top>
          <Bottom>
            {props.breed && <h6>{props.breed.charAt(0).toUpperCase() + props.breed.slice(1)}</h6>}
            {props.goodWiths && props.goodWiths.length > 0 && (
              <GoodWith goodWiths={props.goodWiths} />
            )}
          </Bottom>
        </TextContainer>
      </Container>
    </PageTransition>
  );
};

const Container = styled.div`
  border-radius: ${({ theme }) => theme.radius};
  background: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.boxshadow};
  display: grid;
  max-width: 360px;
  height: 100%;
  transition: box-shadow 0.55s ease-in-out, transform 0.3s ease-in-out;
  &:hover {
    box-shadow: ${({ theme }) => theme.boxshadowhover};
    transform: scale(1.015);
  }
`;

const Img = styled.img`
  width: 100%;
  border-radius: 10px 10px 0px 0px;
`;

const TextContainer = styled.div`
  padding: 24px;
  display: grid;
  grid-gap: 8px;
`;

const Top = styled.div`
  display: grid;
  grid-auto-flow: row;
  align-items: end;
  text-align: center;
  justify-content: center;
  grid-gap: 8px;

  h6 {
    color: ${({ theme }) => theme.color.three};
  }

  ${media.greaterThan("medium")`
    grid-auto-flow: column;
    justify-content: space-between;
  `}
`;

const Bottom = styled.div`
  display: grid;
  grid-auto-flow: row;
  align-items: end;
  justify-content: center;

  text-align: center;
  grid-gap: 8px;

  ${media.greaterThan("medium")`
    grid-auto-flow: column;
    justify-content: space-between;
  `}
`;

export default Card;

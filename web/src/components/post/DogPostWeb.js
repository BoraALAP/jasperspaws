import React from "react";
import { buildImageObj } from "../../lib/helpers";
import { imageUrlFor } from "../../lib/image-url";
import PortableText from "../portableText";

import styled from "styled-components";
import media from "styled-media-query";
import GoodWith from "../listing/GoodWith";
import CardForm from "./CardForm";

const DogPostWeb = props => {
  const {
    _rawBody,
    adopted,
    mainImage,
    id,
    ages,
    ageWrite,
    breed,
    gender,
    name,
    microchipped,
    neutered,
    vacinated,
    size,
    weight,
    coatLength,
    goodWiths
  } = props;

  return (
    <div>
      <Container>
        <Top>
          {mainImage && mainImage.asset && (
            <div>
              <Img
                src={imageUrlFor(buildImageObj(mainImage))
                  .width(1200)
                  .height(1200)
                  .auto("format")
                  .url()}
                alt={mainImage.alt}
              />
            </div>
          )}
          <TextContainer>
            <NameBox>
              <h3>{name}</h3>
              <h6>{ageWrite ? ageWrite : ages && ages.charAt(0).toUpperCase() + ages.slice(1)}</h6>
            </NameBox>
            <div>
              <SubInfo>
                {breed && (
                  <Group>
                    <h6>Breed:</h6>
                    <p>{breed.charAt(0).toUpperCase() + breed.slice(1)}</p>
                  </Group>
                )}
                {gender && (
                  <Group>
                    <h6>Gender:</h6>
                    <p>{gender.charAt(0).toUpperCase() + gender.slice(1)}</p>
                  </Group>
                )}
                {size && (
                  <Group>
                    <h6>Size:</h6>
                    <p>{size.charAt(0).toUpperCase() + size.slice(1)}</p>
                  </Group>
                )}
                {coatLength && (
                  <Group>
                    <h6>Coat Length:</h6>
                    <p>{coatLength.charAt(0).toUpperCase() + coatLength.slice(1)}</p>
                  </Group>
                )}
                {weight && (
                  <Group>
                    <h6>Weight:</h6>
                    <p>{weight.charAt(0).toUpperCase() + weight.slice(1)}</p>
                  </Group>
                )}
                {goodWiths && goodWiths.length > 0 && (
                  <Group>
                    <h6>GoodWith:</h6>
                    <GoodWith goodWiths={goodWiths} withText />
                  </Group>
                )}
              </SubInfo>
              {_rawBody && (
                <Group>
                  <h6>Description:</h6>
                  <PortableText blocks={_rawBody} />
                </Group>
              )}
            </div>
            {(microchipped || neutered || vacinated) && (
              <BlueContainer>
                {microchipped && <h6>Microchipped</h6>}
                {neutered && (gender == "male" ? <h6>Neutered</h6> : <h6>Spayed</h6>)}
                {vacinated && <h6>Vacinated</h6>}
              </BlueContainer>
            )}
          </TextContainer>
        </Top>
      </Container>
      {!adopted && <CardForm name={name} />}
    </div>
  );
};

const Container = styled.div`
  padding: ${({ theme }) => theme.pagePadding};
`;

const Top = styled.div`
  display: grid;

  ${media.greaterThan("medium")`
    grid-template-columns: 1fr 1fr;
    grid-gap: 2.5em;
  `}
`;

const TextContainer = styled.div`
  padding: 1.5em ${({ theme }) => theme.pagePadding};
  max-width: 600px;
  ${media.greaterThan("medium")`
  padding: 0;
  `}
`;

const NameBox = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  grid-gap: 1em;
  align-items: end;

  h6 {
    color: ${({ theme }) => theme.color.three};
    margin-bottom: 2px;
  }
  margin-bottom: 2em;
`;

const SubInfo = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 1em;
`;

const Group = styled.div`
  p {
    margin-bottom: 0;
  }
`;

const BlueContainer = styled.div`
  background-color: ${({ theme }) => theme.color.five};
  border-radius: ${({ theme }) => theme.radius};
  padding: 0.5em 1.5em;
  display: grid;
  grid-gap: 1.5em;
  grid-auto-flow: column;
  justify-content: space-evenly;
  width: fit-content;
  margin-top: 1.5em;
  h6 {
    color: ${({ theme }) => theme.color.white};
  }
`;

const FormContainer = styled.div``;

const Img = styled.img`
  width: 100%;
  border-radius: ${({ theme }) => theme.radius};
`;

export default DogPostWeb;

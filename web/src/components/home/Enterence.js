import React from "react";
import styled from "styled-components";
import Media from "styled-media-query";
import Button from "../ui/Button";

import { Link } from "gatsby";

import enterenceDog from "../../assets/enterenceDog.png";
import Icon from "../../assets/icon";

import { Link as Connection } from "react-scroll";

const Enterence = props => {
  return (
    <Container>
      <H3>
        <i>
          There are thousands
          <br />
          of stray dogs living <br />
          on the streets of <br />
          Turkey.
        </i>
      </H3>
      <Img>
        <img src={enterenceDog} alt="Sad Pup" />
      </Img>
      <Last>
        <H2>
          <i>Adopt</i>
        </H2>
        <H4>
          <i>Give Them a Forever Home</i>
        </H4>
        <Link to="/Adoptable/">
          <Button>See the pups</Button>
        </Link>
      </Last>
      <Connection to="listing" smooth={true} duration={500} offset={-100}>
        <IconButton>
          <Icon symbol="down" />
        </IconButton>
      </Connection>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  min-height: 70vh;
  padding: 650px ${({ theme }) => theme.pagePadding} calc(${({ theme }) => theme.pagePadding} * 2);
  margin-top: -650px;
  grid-auto-flow: row;
  align-content: center;
  justify-content: center;
  width: 90vw;
  margin-left: -5vw;
  background-color: ${({ theme }) => theme.color.two_bg};
  margin-bottom: 20vh;
  grid-template-columns: auto;

  ${Media.greaterThan("medium")`
  grid-auto-flow: auto;
  justify-content: normal;
  grid-template-columns: repeat(3,auto);
  height: 60vh;
  `}
`;

const H3 = styled.h3`
  color: ${({ theme }) => theme.color.three};
  display: grid;
  z-index: 20;

  ${Media.greaterThan("medium")`
  justify-content: end;
  `}
`;

const H2 = styled.h2`
  color: ${({ theme }) => theme.color.four};
`;

const H4 = styled.h4`
  color: ${({ theme }) => theme.color.four};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  margin-bottom: 1em;
`;

const Img = styled.div`
  display: grid;
  position: relative;
  width: 100%;
  align-items: center;
  z-index: 10;

  img {
    width: 100%;
  }

  ${Media.greaterThan("small")`
  
  img{
    width: 40vw;
    
  }
  `}

  ${Media.greaterThan("medium")`
  height: inherit;
  width: 15vw;
  img{
    position: absolute;
    left: -5vw;
    
  }
  `}

  ${Media.greaterThan("large")`
  img{
    width: 35vw;
  }`}
`;

const Last = styled.div`
  display: grid;

  align-content: end;
  justify-items: end;
  grid-gap: 0.5em;
  z-index: 20;

  ${Media.greaterThan("medium")`
  justify-content: start;
  `}
`;

const IconButton = styled.div`
  position: absolute;
  bottom: calc(-10vw - 15px);
  left: calc(50vw - 20px);
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.color.five};
  display: grid;
  justify-content: center;
  align-content: center;
  border-radius: 100%;
  box-shadow: ${({ theme }) => theme.buttonshadow};
`;

export default Enterence;

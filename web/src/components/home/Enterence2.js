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
    <div>
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
      </Container>
      <Connection to="listing" smooth={true} duration={500} offset={-100}>
        <IconButton>
          <Icon symbol="down" />
        </IconButton>
      </Connection>
    </div>
  );
};

const Container = styled.div`
  display: grid;
  min-height: 70vh;
  padding: 170px 5vw calc(5vw * 2);
  margin-top: calc(-5% - 140px);
  background-color: ${({ theme }) => theme.color.two_bg};
  width: 90vw;
  margin-left: -5vw;
  margin-bottom: 6em;

  ${Media.greaterThan("medium")`
    grid-template-columns: repeat(3,auto);
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
  width: 100%;
  align-items: center;
  align-self: center;
  justify-items: center;
  justify-self: center;
  z-index: 10;
  img {
    width: 60%;
  }
  ${Media.greaterThan("medium")`
  width: 10vw;
    img {
      width: 500%;
    }
  `}

  ${Media.greaterThan("large")`
  width: 5vw;
    img {
      width: 800%;
    }
  `}
`;

const Last = styled.div`
  display: grid;
  text-align: right;
  align-content: end;
  justify-items: end;
  grid-gap: 0.5em;
  z-index: 20;

  ${Media.greaterThan("medium")`
  justify-content: start;
  `}
`;

const IconButton = styled.div`
  position: relative;
  bottom: calc(6em + 20px);
  left: calc(45vw - 20px);
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.color.five};
  display: grid;
  justify-content: center;
  align-content: center;
  border-radius: 100%;
  box-shadow: ${({ theme }) => theme.buttonshadow};
  z-index: 400;
`;

export default Enterence;

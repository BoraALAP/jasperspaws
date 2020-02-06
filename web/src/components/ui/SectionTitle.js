import React from "react";
import styled from "styled-components";

const SectionTitle = props => {
  return (
    <Container>
      <h3>{props.children}</h3>
      <Bottom>
        <Line />
        <h6>{props.subtext}</h6>
      </Bottom>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  max-width: 500px;
  margin-bottom: 1.5em;
`;

const Bottom = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-gap: 0.5em;
  justify-content: start;
  margin-top: 0.5em;
  h6 {
    color: ${({ theme }) => theme.color.three};
  }
`;

const Line = styled.div`
  display: grid;
  height: 1px;
  width: 4em;
  background-color: ${({ theme }) => theme.color.three};
`;

export default SectionTitle;

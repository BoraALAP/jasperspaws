import React from "react";
import styled from "styled-components";

const Title = props => {
  return (
    <Container>
      <h4>{props.title}</h4>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  justify-content: center;
  display: grid;
  margin-bottom: 2em;
`;

export default Title;

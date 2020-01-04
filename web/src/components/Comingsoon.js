import React from "react";
import styled from "styled-components";

const Comingsoon = props => {
  return (
    <Container>
      <h5>Currently, We are working on our website.</h5>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${({ theme }) => theme.color.two_bg};
  padding: 100px 5%;
  h5 {
    color: ${({ theme }) => theme.color.five};
    text-align: center;
  }
`;

export default Comingsoon;

import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Comingsoon = props => {
  return (
    <Container>
      <h5>Currently, We are working on our website.</h5>
      <p>
        You can still submit your application from <Link to="/Adoption/">Adoption</Link> page.
      </p>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${({ theme }) => theme.color.two_bg};
  padding: 100px 5%;
  display: grid;
  justify-content: center;
  h5 {
    color: ${({ theme }) => theme.color.five};
    text-align: center;
  }
  p {
    margin-bottom: 0;
    margin-top: 24px;
    text-align: center;
  }
`;

export default Comingsoon;

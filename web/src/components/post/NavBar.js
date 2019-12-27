import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const NavBar = props => {
  return (
    <Container>
      <Link to=""></Link>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${({ theme }) => theme.color.five};
  color: ${({ theme }) => theme.color.white};
  grid-auto-flow: column;
`;

export default NavBar;

import React from "react";
import { Link } from "gatsby";

import styled from "styled-components";
import Media from "styled-media-query";

import ListingMainHome from "../listing/ListingMainHome";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";

const HomeListing = ({ postNodes }) => {
  return (
    <Container id="listing">
      <TopBar>
        <SectionTitle subtext="They all deserve a good life">
          These little guys are waiting for you
        </SectionTitle>
        <Link to="/Adoptable/">
          <Button>See All of Them</Button>
        </Link>
      </TopBar>
      <ListingMainHome postNodes={postNodes} adoptable />
    </Container>
  );
};

const Container = styled.div``;

const TopBar = styled.div`
  display: grid;
  align-items: start;

  ${Media.greaterThan("medium")`
  grid-auto-flow: column;
  justify-content: space-between;
`};
`;

export default HomeListing;

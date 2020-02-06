import React from "react";

import styled from "styled-components";
import Media from "styled-media-query";

import ListingMain from "../listing/ListingMainHome";

const HomeListing = ({ postNodes }) => {
  console.log(postNodes);

  return (
    <Container>
      <ListingMain postNodes={postNodes} adoptable />
    </Container>
  );
};

const Container = styled.div``;

export default HomeListing;

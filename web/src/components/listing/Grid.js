import React, { useState, useEffect } from "react";

import styled from "styled-components";
import media from "styled-media-query";

import Card from "./Card";

const Grid = props => {
  return (
    <Container>
      <GridS>
        {props.nodes ? (
          props.nodes.map(node => <Card key={node._id} {...node} />)
        ) : (
          <h3>Sorry there is no adoptable pup at the moment</h3>
        )}
      </GridS>
    </Container>
  );
};

const Container = styled.div``;

const GridS = styled.div`
  display: grid;
  grid-gap: 16px 2.5%;
  grid-template-columns: repeat(2, minmax(140px, 1fr));
  ${media.greaterThan("medium")`
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  `}
`;

Grid.defaultProps = {
  name: "",
  nodes: [],
  browseMoreHref: ""
};

export default Grid;

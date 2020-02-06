import React, { useContext, useState, useEffect, useLayoutEffect } from "react";
import Grid from "./Grid";
import appContext from "../../context/context";
import styled from "styled-components";
import media from "styled-media-query";
import Card from "../listing/Card";

const ListingMain = ({ postNodes, adoptable }) => {
  const { store, dispatch } = useContext(appContext);

  const [usableArray, setUsableArray] = useState([]);
  const [size, setSize] = useState(0);
  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const filtered = adoptable
    ? postNodes.filter(item => !item.adopted)
    : postNodes.filter(item => item.adopted);

  useEffect(() => {
    setUsableArray(filtered);
  }, []);

  return (
    <Container>
      <GridS>
        {usableArray ? (
          usableArray.map(node => <Card key={node._id} {...node} />)
        ) : (
          <h3>Sorry there is no adoptable pup at the moment</h3>
        )}
      </GridS>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  padding: ${({ theme }) => theme.pagePadding};
  grid-gap: 2.5%;
  grid-auto-flow: column;

  ${media.greaterThan("medium")`
    grid-auto-flow: column;
  `}
`;

const GridS = styled.div`
  display: grid;
  grid-gap: 1em 2.5%;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  justify-items: center;
`;
export default ListingMain;

import React, { useContext, useState, useEffect, useLayoutEffect } from "react";
import Grid from "./Grid";
import appContext from "../../context/context";
import styled from "styled-components";
import media from "styled-media-query";

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

  console.log(usableArray, postNodes, filtered);

  return <Container>{usableArray && <Grid title="Adopable Dogs" nodes={usableArray} />}</Container>;
};

const Container = styled.div`
  display: grid;
  padding: ${({ theme }) => theme.pagePadding};
  grid-gap: 2.5%;
  grid-auto-flow: row;

  ${media.greaterThan("medium")`
    
    grid-auto-flow: column;
  `}
`;
export default ListingMain;

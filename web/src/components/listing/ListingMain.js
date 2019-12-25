import React, { useContext, useState, useEffect } from "react";
import Filter from "./Filter";
import Grid from "./Grid";
import appContext from "../../context/context";
import styled from "styled-components";
import media from "styled-media-query";

const ListingMain = ({ postNodes, adoptable }) => {
  const { store } = useContext(appContext);

  const [usableArray, setUsableArray] = useState([]);

  const filtered = adoptable
    ? postNodes.filter(item => !item.adopted)
    : postNodes.filter(item => item.adopted);

  useEffect(() => {
    setUsableArray(filtered);
  }, []);

  useEffect(() => {
    const filterKeys = Object.keys(store.filters);

    const filterIt = () => {
      if (
        filterKeys.some(
          k => Array.isArray(store.filters[k]) && store.filters[k].length !== 0 && true
        )
      ) {
        const arr = usableArray.filter(dog => {
          return filterKeys.every(key => {
            if (Array.isArray(store.filters[key]) && store.filters[key].length !== 0) {
              if (key === "breed") {
                return dog[key].toLowerCase() == store.filters[key].map(filter => filter.value);
              } else if (key === "goodWiths") {
                return dog[key].some(sub => {
                  return (
                    sub.goodWith.title.toLowerCase() ==
                    store.filters[key].map(filter => filter.value)
                  );
                });
              } else {
                return dog[key] == store.filters[key].map(filter => filter.value);
              }
            } else {
              return true;
            }
          });
        });

        setUsableArray([...arr]);
      } else {
        setUsableArray([...filtered]);
      }
    };
    filterIt();
  }, [store.filters]);

  return (
    <Container>
      <Filter nodes={usableArray} />
      {usableArray && <Grid title="Adopable Dogs" nodes={usableArray} />}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  padding: ${({ theme }) => theme.pagePadding};
  grid-gap: 2.5%;
  grid-auto-flow: row;

  ${media.greaterThan("medium")`
    grid-template-columns: 30% 67.5%;
    grid-auto-flow: column;
  `}
`;
export default ListingMain;

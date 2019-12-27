import React, { useContext, useState, useEffect, useLayoutEffect } from "react";
import Filter from "./Filter";
import Grid from "./Grid";
import appContext from "../../context/context";
import styled from "styled-components";
import media from "styled-media-query";
import Modal from "react-modal";
import Button from "../ui/Button";

const ListingMain = ({ postNodes, adoptable }) => {
  const { store, dispatch } = useContext(appContext);

  const [usableArray, setUsableArray] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
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

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const onClear = () => {
    dispatch({ type: "CLEAR_FILTERS" });
    dispatch({ type: "SAVE_FILTERS" });
  };

  return (
    <Container>
      {size < 768 ? (
        <div>
          <Button onClick={openModal}>Filters</Button>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={openModal}
            onRequestClose={closeModal}
            // style={customStyles}
            contentLabel="Filter Modal"
            ariaHideApp={false}
          >
            <Filter nodes={usableArray} />
          </Modal>
          {store.filterExist && <Button onClick={onClear}>Clear Filters</Button>}
        </div>
      ) : (
        <Filter nodes={usableArray} />
      )}
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

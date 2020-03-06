import React, { useContext, useState, useEffect, useLayoutEffect } from "react";
import Filter from "./Filter";
import Grid from "./Grid";
import appContext from "../../context/context";
import styled from "styled-components";
import media from "styled-media-query";
import Modal from "react-modal";
import Button from "../ui/Button";

const ListingMain2 = ({ postNodes, adoptable }) => {
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

  const filteredArray = adoptable
    ? postNodes.filter(item => !item.adopted)
    : postNodes.filter(item => item.adopted);

  useEffect(() => {
    setUsableArray(filteredArray);
  }, []);

  useEffect(() => {
    if (
      store.filters.breed.length > 0 ||
      store.filters.size.length > 0 ||
      store.filters.ages.length > 0 ||
      store.filters.coatLength.length > 0 ||
      store.filters.goodWiths.length > 0 ||
      store.filters.gender.length > 0
    ) {
      dispatch({ type: "UPDATE_FILTER_EXIST", payload: true });
    } else {
      dispatch({ type: "UPDATE_FILTER_EXIST", payload: false });
    }
  }, [store.filters]);

  useEffect(() => {
    const filterKeys = Object.keys(store.filters);

    const filterIt = () => {
      if (
        filterKeys.some(
          k => Array.isArray(store.filters[k]) && store.filters[k].length !== 0 && true
        )
      ) {
        let initialArray = [];
        filterKeys.map(key => {
          if (Array.isArray(store.filters[key]) && store.filters[key].length !== 0) {
            store.filters[key].map(filter => {
              filteredArray.map(dog => {
                if (key === "breed" && dog[key].toLowerCase() == filter.value) {
                  initialArray = [...initialArray, dog];
                  setUsableArray([...initialArray]);
                } else if (dog[key] == filter.value) {
                  initialArray = [...initialArray, dog];
                  setUsableArray([...initialArray]);
                }
              });
            });
          } else {
            return false;
          }
        });
      } else {
        setUsableArray([...filteredArray]);
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
        <Filter nodes={filteredArray} />
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
export default ListingMain2;

import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import Select from "react-select";

import appContext from "../../context/context";
import Button from "../ui/Button";

const Filter = props => {
  const { store, dispatch } = useContext(appContext);
  const [filters, setFilters] = useState(false);

  useEffect(() => {
    if (
      store.filters.breed.length > 0 ||
      store.filters.size.length > 0 ||
      store.filters.ages.length > 0 ||
      store.filters.coatLength.length > 0 ||
      store.filters.goodWiths.length > 0 ||
      store.filters.gender.length > 0
    ) {
      setFilters(true);
    } else {
      setFilters(false);
    }
  }, [store.filters]);

  useEffect(() => {
    if (localStorage.getItem("myValueInLocalStorage")) {
      dispatch({ type: "GET_FILTERS" });
    }
  }, []);

  const newRes = arr => {
    if (arr !== undefined) {
      const newArr = arr.filter((elem, pos, arr) => {
        if (elem !== null && elem !== undefined) {
          return arr.indexOf(elem) == pos;
        }
      });
      return newArr.map(item => {
        if (item !== null && item !== undefined) {
          return { value: item.toLowerCase(), label: item.charAt(0).toUpperCase() + item.slice(1) };
        }
      });
    }
  };

  const breedOptions = newRes(props.nodes.map(item => item.breed));
  const sizeOptions = newRes(props.nodes.map(item => item.size));
  const ageOptions = newRes(props.nodes.map(item => item.ages));
  const coatLengthOptions = newRes(props.nodes.map(item => item.coatLength));
  const goodWith = props.nodes.map(item => item.goodWiths.map(good => good.goodWith.title));
  const goodWithOptions = newRes([].concat.apply([], goodWith));
  const genderOptions = newRes(props.nodes.map(item => item.gender));

  const onChange = async (item, e) => {
    await dispatch({ type: "UPDATE_FILTER", filter: e.name, payload: item == null ? [] : item });
    await dispatch({ type: "SAVE_FILTERS" });
  };

  const onClear = () => {
    dispatch({ type: "CLEAR_FILTERS" });
    dispatch({ type: "SAVE_FILTERS" });
  };
  return (
    <Container>
      <H3>Filters</H3>
      {filters && <Button onClick={onClear}>Clear Filters</Button>}
      <List>
        <Group>
          <label>Breed</label>
          <Select
            styles={customStyles}
            options={breedOptions}
            autoFocus
            onChange={onChange}
            isMulti
            value={store.filters.breed.map(it => it)}
            name="breed"
            placeholder={"Any"}
          />
        </Group>
        <Group>
          <label>Age</label>
          <Select
            styles={customStyles}
            options={ageOptions}
            placeholder={"Any"}
            onChange={onChange}
            value={store.filters.ages.map(it => it)}
            isMulti
            name="ages"
          />
        </Group>
        <Group>
          <label>Size</label>
          <Select
            styles={customStyles}
            options={sizeOptions}
            placeholder={"Any"}
            onChange={onChange}
            value={store.filters.size.map(it => it)}
            isMulti
            name="size"
          />
        </Group>
        <Group>
          <label>Gender</label>
          <Select
            styles={customStyles}
            options={genderOptions}
            placeholder={"Any"}
            onChange={onChange}
            value={store.filters.gender.map(it => it)}
            isMulti
            name="gender"
          />
        </Group>
        <Group>
          <label>Good With</label>
          <Select
            styles={customStyles}
            options={goodWithOptions}
            placeholder={"Any"}
            onChange={onChange}
            value={store.filters.goodWiths.map(it => it)}
            isMulti
            name="goodWiths"
          />
        </Group>
        <Group>
          <label>Coat Length</label>
          <Select
            styles={customStyles}
            options={coatLengthOptions}
            placeholder={"Any"}
            onChange={onChange}
            value={store.filters.coatLength.map(it => it)}
            isMulti
            name="coatLength"
          />
        </Group>
      </List>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-auto-flow: row;
  align-content: start;
  margin-bottom: 24px;
`;

const H3 = styled.h3`
  margin-bottom: 24px;
`;

const List = styled.div`
  display: grid;
  grid-gap: 24px;
`;

const Group = styled.div`
  display: grid;
  grid-gap: 8px;
`;

const customStyles = {
  control: styles => ({
    ...styles,
    backgroundColor: "white",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.07), 2px 2px 5px rgba(0, 0, 0, 0.05)",
    borderColor: `hsla(0,0%,100%,0)`,
    borderWidth: 0,
    color: `hsla(205,100%,17%,1)`,
    padding: "4px 12px",
    borderRadius: "10px"
  }),
  dropdownIndicator: styles => ({
    ...styles,
    color: "hsla(195,100%,6%,1)"
  })
};

export default Filter;

/* Listing Page */

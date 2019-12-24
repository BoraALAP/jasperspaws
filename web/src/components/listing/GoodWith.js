import React, { useState } from "react";
import styled from "styled-components";

import Tooltip from "@material-ui/core/Tooltip";

import baby from "../../assets/icon/baby-solid.svg";
import Cats from "../../assets/icon/cat-solid.svg";
import Kids from "../../assets/icon/child-solid.svg";
import Dogs from "../../assets/icon/dog-solid.svg";

const GoodWith = props => {
  const [openCat, setOpenCat] = React.useState(false);
  const [openDog, setOpenDog] = React.useState(false);
  const [openKid, setOpenKid] = React.useState(false);
  const info = [
    {
      title: "Cats",
      text: "Good with Cats",
      object: Cats
    },
    {
      title: "Dogs",
      text: "Good with Other Dogs",
      object: Dogs
    },
    {
      title: "Kids",
      text: "Good with Kids",
      object: Kids
    }
  ];
  return (
    <Container>
      {props.goodWiths.map(({ goodWith }) => {
        if (goodWith.title === "Kids") {
          return (
            <Tooltip
              open={openKid}
              onClose={() => setOpenKid(false)}
              onOpen={() => setOpenKid(true)}
              title="Good with Kids"
              key={goodWith._id}
            >
              <img src={Kids} alt="Good with Kids" />
            </Tooltip>
          );
        } else if (goodWith.title === "Dogs") {
          return (
            <Tooltip
              open={openDog}
              onClose={() => setOpenDog(false)}
              onOpen={() => setOpenDog(true)}
              title="Good with Other Dogs"
              key={goodWith._id}
            >
              <img src={Dogs} alt="Good with Other Dogs" />
            </Tooltip>
          );
        } else if (goodWith.title === "Cats") {
          return (
            <Tooltip
              open={openCat}
              onClose={() => setOpenCat(false)}
              onOpen={() => setOpenCat(true)}
              title="Good with Cats"
              key={goodWith._id}
            >
              <img src={Cats} alt="Good with Cats" />
            </Tooltip>
          );
        }
      })}
    </Container>
  );
};

const Container = styled.div``;

export default GoodWith;

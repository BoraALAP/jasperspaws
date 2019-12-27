import React from "react";
import HamburgerIcon from "./hamburger";
import CrossIcon from "./cross";

function Icon(props) {
  switch (props.symbol) {
    case "hamburger":
      return <HamburgerIcon />;
    case "cross":
      return <CrossIcon />;
    default:
      return <span>Unknown icon: {props.symbol}</span>;
  }
}

export default Icon;

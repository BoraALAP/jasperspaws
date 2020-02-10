import React from "react";
import HamburgerIcon from "./hamburger";
import CrossIcon from "./cross";
import DownArrow from "./downArrow";
import { Paw } from "./paw";

function Icon(props) {
  switch (props.symbol) {
    case "hamburger":
      return <HamburgerIcon props={props} />;
    case "cross":
      return <CrossIcon props={props} />;
    case "paw":
      return <Paw props={props} />;
    case "down":
      return <DownArrow props={props} />;
    default:
      return <span>Unknown icon: {props.symbol}</span>;
  }
}

export default Icon;

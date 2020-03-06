import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { LightTheme } from "../../styles/theme";

const PageTransition = ({ children, direction = "left", to, rest, activeClass = "" }) => {
  return (
    <AniLink
      cover
      direction={direction}
      to={to}
      bg={LightTheme.color.one}
      {...rest}
      activeClassName={activeClass}
    >
      {children}
    </AniLink>
  );
};

export default PageTransition;

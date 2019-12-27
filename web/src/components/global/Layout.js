import React, { useReducer, useLayoutEffect } from "react";
import Header from "./Header";

import appContext from "../../context/context";
import appReducer, { initialState } from "../../context/reducer";

import { ThemeProvider } from "styled-components";
import { LightTheme, DarkTheme } from "../../styles/theme";
import GlobalStyle from "../../styles/global";

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => {
  const [store, dispatch] = useReducer(appReducer, initialState);

  return (
    <>
      <appContext.Provider value={{ store, dispatch }}>
        <ThemeProvider theme={store.theme ? DarkTheme : LightTheme}>
          <GlobalStyle />
          <Header
            siteTitle={siteTitle}
            onHideNav={onHideNav}
            onShowNav={onShowNav}
            showNav={showNav}
          />
          <div>{children}</div>
          <footer>
            <div>
              <div>
                &copy; {new Date().getFullYear()}, Built with{" "}
                <a href="https://www.sanity.io">Sanity</a> &amp;
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </appContext.Provider>
    </>
  );
};

export default Layout;

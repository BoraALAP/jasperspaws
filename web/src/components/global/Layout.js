import React, { useReducer } from "react";
import { graphql, StaticQuery } from "gatsby";

import appContext from "../../context/context";
import appReducer, { initialState } from "../../context/reducer";

import { ThemeProvider } from "styled-components";
import { LightTheme, DarkTheme } from "../../styles/theme";
import GlobalStyle from "../../styles/global";
import Header from "./Header";
import Footer from "./Footer";

const query = graphql`
  query SiteTitleQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
    }
  }
`;

const Layout = ({ children }) => {
  const [store, dispatch] = useReducer(appReducer, initialState);

  return (
    <StaticQuery
      query={query}
      render={data => {
        if (!data.site) {
          throw new Error(
            'Missing "Site settings". Open the Studio at http://localhost:3333 and some content in "Site settings"'
          );
        }
        return (
          <>
            <appContext.Provider value={{ store, dispatch }}>
              <ThemeProvider theme={store.theme ? DarkTheme : LightTheme}>
                <GlobalStyle />
                <Header siteTitle={data.site.title} />
                <div>{children}</div>
                <Footer />
              </ThemeProvider>
            </appContext.Provider>
          </>
        );
      }}
    />
  );
};

export default Layout;

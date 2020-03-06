import React, { useState } from "react";

import Icon from "../../assets/icon";
import styled from "styled-components";
import media from "styled-media-query";
import logo from "../../assets/jaspers_paw_logo.png";
import PageTransition from "../ui/PageTransition";

const Header = ({ siteTitle }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [nav, setNav] = useState([
    {
      name: "Home",
      path: "/"
    },
    {
      name: "Adopt",
      path: "/Adoption"
    },
    {
      name: "Adoptable",
      path: "/Adoptable/"
    },
    {
      name: "Happy Tails",
      path: "/HappyTails/"
    },
    {
      name: "About",
      path: "/About/"
    },
    {
      name: "How You Can Help",
      path: "/HowCanWeHelp/"
    },
    // {
    //   name: "Events",
    //   path: "/Events/"
    // },
    {
      name: "Contact",
      path: "/Contact/"
    },
    {
      name: "Donate",
      path: "/Donate/"
    }
  ]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Container>
      <Logo>
        <PageTransition direction="right" to="/">
          <img src={logo} alt={siteTitle} />
        </PageTransition>
      </Logo>

      <HamMenu onClick={toggleMenu}>
        <Icon symbol="hamburger" />
      </HamMenu>

      <Nav className={menuOpen && "activeMenu"}>
        <CrossMenu onClick={toggleMenu}>
          <Icon symbol="cross" />
        </CrossMenu>
        <Ul>
          {nav.map((navItem, index) => (
            <li key={index}>
              <PageTransition to={navItem.path} activeClass="activeMenuItem">
                {navItem.name}
              </PageTransition>
            </li>
          ))}
        </Ul>
      </Nav>
    </Container>
  );
};

const Container = styled.div`
  padding: 1% ${({ theme }) => theme.pagePadding};
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  z-index: 1000;
`;

const Logo = styled.div`
  height: 100px;
  img {
    height: 100%;
  }
`;

const Nav = styled.div`
  display: grid;
  width: 100%;
  position: absolute;
  box-sizing: border-box;
  padding: ${({ theme }) => theme.pagePadding};
  transform: translateY(-100%);
  transition: all 0.5s ease-in-out;
  background-color: ${({ theme }) => theme.color.five};
  top: 0;
  left: 0;
  z-index: 3000;
  opacity: 0;
  a {
    color: ${({ theme }) => theme.color.white};

    font-size: 0.875em;
  }

  &.activeMenu {
    transform: translateX(0);
    opacity: 1;
  }

  ${media.greaterThan("large")`
  transform: translateX(0);
  opacity: 1;
  position: inherit;
  padding: 0;
  background-color: transparent; 
  a{
    color: initial;
    
  }
  `};
`;

const Ul = styled.ul`
  list-style: none;
  display: grid;
  grid-auto-flow: row;
  grid-gap: 1em;
  justify-content: start;

  ${media.greaterThan("large")`
  justify-content: end;
    grid-auto-flow: column;
  `}
`;

const HamMenu = styled.button`
  display: grid;
  width: 44px;
  height: 44px;
  outline: none;
  border: none;
  padding: 8px;
  background: transparent;
  ${media.greaterThan("large")`
    display:none;
  `}
`;

const CrossMenu = styled.button`
  color: ${({ theme }) => theme.color.white};
  display: grid;
  width: 44px;
  height: 44px;
  padding: 8px;
  outline: none;
  border: none;
  background: transparent;
  justify-self: end;
  ${media.greaterThan("large")`
    display:none;
  `}
`;

export default Header;

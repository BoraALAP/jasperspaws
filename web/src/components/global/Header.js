import { Link } from "gatsby";
import React, { useState, useLayoutEffect } from "react";
import Icon from "../../assets/icon";
import { cn } from "../../lib/helpers";
import styled from "styled-components";
import media from "styled-media-query";

const Header = ({ siteTitle }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <Container>
      <Logo>
        <Link to="/" activeClassName="activeMenuItem">
          {siteTitle}
        </Link>
      </Logo>

      <HamMenu onClick={toggleMenu}>
        <Icon symbol="hamburger" />
      </HamMenu>

      <Nav className={menuOpen && "activeMenu"}>
        <CrossMenu onClick={toggleMenu}>
          <Icon symbol="cross" />
        </CrossMenu>
        <Ul>
          <li>
            <LinkS to="/Adoptable/" activeClassName="activeMenuItem">
              Adoptable
            </LinkS>
          </li>
          <li>
            <LinkS to="/Adoption/" activeClassName="activeMenuItem">
              Adoption
            </LinkS>
          </li>
          <li>
            <LinkS to="/HappyTails/" activeClassName="activeMenuItem">
              Happy Tails
            </LinkS>
          </li>
          <li>
            <LinkS to="/About/" activeClassName="activeMenuItem">
              About
            </LinkS>
          </li>
          <li>
            <LinkS to="/HowCanWeHelp/" activeClassName="activeMenuItem">
              How Can We Help
            </LinkS>
          </li>
          <li>
            <LinkS to="/Events/" activeClassName="activeMenuItem">
              Events
            </LinkS>
          </li>
          <li>
            <LinkS to="/Contact/" activeClassName="activeMenuItem">
              Contact
            </LinkS>
          </li>
        </Ul>
      </Nav>
    </Container>
  );
};

const Container = styled.div`
  padding: ${({ theme }) => theme.pagePadding};
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
`;

const Logo = styled.div``;

const Nav = styled.div`
  display: grid;
  width: 100%;
  position: absolute;
  box-sizing: border-box;
  padding: ${({ theme }) => theme.pagePadding};
  transform: translateX(-100%);
  transition: all 0.5s ease-in-out;
  background-color: ${({ theme }) => theme.color.five};
  top: 0;
  left: 0;

  a {
    color: ${({ theme }) => theme.color.white};
  }

  &.activeMenu {
    transform: translateX(0);
  }

  ${media.greaterThan("medium")`
  transform: translateX(0);
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

  ${media.greaterThan("medium")`
  justify-content: end;
    grid-auto-flow: column;
  `}
`;

const HamMenu = styled.button`
  display: grid;
  ${media.greaterThan("medium")`
    display:none;
  `}
`;

const CrossMenu = styled.button`
  color: ${({ theme }) => theme.color.white};
  display: grid;
  ${media.greaterThan("medium")`
    display:none;
  `}
`;

const LinkS = styled(Link)`
  color: ${({ theme }) => theme.color.five};

  font-size: 0.875em;
`;

export default Header;

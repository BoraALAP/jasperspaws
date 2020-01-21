import { Link } from "gatsby";
import React, { useState } from "react";
import Icon from "../../assets/icon";
import styled from "styled-components";
import media from "styled-media-query";
import logo from "../../assets/jaspers_paw_logo.png";

const Header = ({ siteTitle }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <Container>
      <Logo>
        <Link to="/" activeClassName="activeMenuItem">
          <img src={logo} alt={siteTitle} />
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
          {/* <li>
            <LinkS to="/Adoptable/" activeClassName="activeMenuItem">
              Adoptable
            </LinkS>
          </li> */}
          <li>
            <LinkS to="/Adoption/" activeClassName="activeMenuItem">
              Adopt
            </LinkS>
          </li>
          {/* <li>
            <LinkS to="/HappyTails/" activeClassName="activeMenuItem">
              Happy Tails
            </LinkS>
          </li> */}
          <li>
            <LinkS to="/About/" activeClassName="activeMenuItem">
              About
            </LinkS>
          </li>
          <li>
            <LinkS to="/HowCanWeHelp/" activeClassName="activeMenuItem">
              How You Can Help
            </LinkS>
          </li>
          {/* <li>
            <LinkS to="/Events/" activeClassName="activeMenuItem">
              Events
            </LinkS>
          </li> */}
          <li>
            {/* <LinkS to="/Contact/" activeClassName="activeMenuItem">
              Contact
            </LinkS> */}
            <a href="mailto:jasperspawsrescue@gmail.com" target="_blank">
              Contact
            </a>
          </li>
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
  margin-bottom: ${({ theme }) => theme.pagePadding};
`;

const Logo = styled.div``;

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

  a {
    color: ${({ theme }) => theme.color.white};

    font-size: 0.875em;
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
  width: 44px;
  height: 44px;
  outline: none;
  border: none;
  padding: 8px;
  background: transparent;
  ${media.greaterThan("medium")`
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
  ${media.greaterThan("medium")`
    display:none;
  `}
`;

const LinkS = styled(Link)`
  color: ${({ theme }) => theme.color.five};

  font-size: 0.875em;
`;

export default Header;

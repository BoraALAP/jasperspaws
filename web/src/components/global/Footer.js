import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import media from "styled-media-query";

const Footer = props => {
  return (
    <Container>
      <div>
        <Nav>
          <Ul>
            {/* <li>
            <LinkS to="/Adoptable/" activeClassName="activeMenuItem">
              Adoptable
            </LinkS>
          </li> */}
            <li>
              <LinkS to="/Adoption/" activeClassName="activeMenuItem">
                Adoption
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
      </div>
      <CopyRight>
        Jasper's Paws Dog Rescue &copy; {new Date().getFullYear()}, Built with{" "}
        <a href="https://www.artticfox.com">Arttic Fox</a>
      </CopyRight>
    </Container>
  );
};

const Container = styled.footer`
  padding: 5%;
  background-color: ${({ theme }) => theme.color.four};
  text-align: center;
`;

const Nav = styled.div`
  display: grid;
  width: 100%;
  box-sizing: border-box;
  padding: ${({ theme }) => theme.pagePadding};
  transition: all 0.5s ease-in-out;
  justify-content: center;

  a {
    color: ${({ theme }) => theme.color.white};
  }

  ${media.greaterThan("medium")`
  padding: 0;
  background-color: transparent; 
  `};
`;

const Ul = styled.ul`
  list-style: none;
  display: grid;
  grid-auto-flow: row;
  grid-gap: 1em;
  justify-content: start;
  padding: 0;
  ${media.greaterThan("medium")`
  justify-content: end;
    grid-auto-flow: column;
  `}
`;

const LinkS = styled(Link)`
  color: ${({ theme }) => theme.color.white};

  font-size: 0.875em;
`;

const CopyRight = styled.div`
  font-size: 0.75em;
  font-weight: ${({ theme }) => theme.font.weight.regular};
`;

export default Footer;

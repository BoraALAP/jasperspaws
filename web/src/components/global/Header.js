import { Link } from "gatsby";
import React from "react";
import Icon from "../../assets/icon";
import { cn } from "../../lib/helpers";
import styled from "styled-components";
import media from "styled-media-query";

const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => (
  <div>
    <div>
      <div>
        <Link to="/">{siteTitle}</Link>
      </div>

      <button onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol="hamburger" />
      </button>

      <nav>
        <ul>
          <li>
            <Link to="/Listing/">Adoptable</Link>
          </li>
          <li>
            <Link to="/Adoption/">Adoption</Link>
          </li>
          <li>
            <Link to="/HappyTails/">Happy Tails</Link>
          </li>
          <li>
            <Link to="/About/">About</Link>
          </li>
          <li>
            <Link to="/HowCanWeHelp/">How Can We Help</Link>
          </li>
          <li>
            <Link to="/Events/">Events</Link>
          </li>
          <li>
            <Link to="/Contact/">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default Header;

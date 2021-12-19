// /* eslint-disable react-hooks/rules-of-hooks */

import React, { useState } from 'react'
// import { Link } from 'gatsby'
// import styled from 'styled-components'
import useSiteMetadata from '../hooks/use-site-config'
import { media } from '../tokens'
import useSiteImages from '../hooks/use-site-images'
import DarkToggle from './DarkToggle'
import { Link } from 'gatsby';
import styled from 'styled-components';
import {RiArticleFill} from 'react-icons/ri'
import {FaTags} from 'react-icons/fa'
import LogoChange from './LogoChange'
import '@fontsource/rubik/800.css'



export const Nav = styled.nav`
  background: var(--color-darkerBackground);
  width: 100%;
  height: 82px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  z-index: 100000;
  top: 0;
  left: 0;
  font-size: 26px;
  font-weight: 700;
  position: fixed;
  box-shadow: 0px 15px 10px -15px var(--color-invertedBackground);
  font-family: 'Rubik';
  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
    font-weight: 650;
  }
  /* Third Nav */
  /* justify-content: flex-start; */
`;
const NavLogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0;
  margin-left: 7px;
  
  &:hover {
    cursor: pointer;
  }

`

const NavLogo = styled.img`
  display: flex;
  align-items: bottom;
  text-decoration: none;
  width: 70px;
  height: 70px;
  margin-left: 7px;
  @media screen and (max-width: 768px) {
    width: 40px;
  }
`
const NavLogoTitle = styled.a`
  text-decoration: none;
  color: var(--color-invertedBackground);
  margin-left: 9px;
  font-size: 31px;
  max-width: 100px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
    margin-left: 5px;
  }
`

export const NavItem = styled.div`
  transition: all 0.3s;
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  @media screen and (max-width: 768px) {
    padding: 0 0.6rem;
  }
  
`;

export const NavLink = styled(Link)`
  color: var(--color-invertedBackground);
  transition: 0.25s ease-in;
  &:hover {
    color: var(--color-primaryColor);
  }
`


export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */

`;

export const NavBtns = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */

`;



const TutorialsIcon = styled(RiArticleFill)`
  transform: translateY(2px);
  padding: 0;
`
const TopicsIcon = styled(FaTags)`
  transform: translateY(2px);
  padding: 0;
`


const Header = (props) => {
  const {
     headerLinks,
     siteTitle,
     headerTitle,
     headerLinksIcon,
   } = useSiteMetadata()
   const iconSrc = headerLinksIcon
     ? useSiteImages(headerLinksIcon).fluid.src
     : null
  return (
    <>
      <Nav>
        <NavLogoContainer to="/">
          <LogoChange type='small' to='/' />
          <NavLogoTitle>Code Circuit</NavLogoTitle>
        </NavLogoContainer>
        

        <NavMenu>
          <NavItem>
            <NavLink to="/tutorials"><TutorialsIcon /> Tutorials</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/tags"><TopicsIcon /> Topics</NavLink>
          </NavItem>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtns>
          <DarkToggle />
        </NavBtns>
      </Nav>
    </>
  );
};

export default Header;

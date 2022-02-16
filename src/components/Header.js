// /* eslint-disable react-hooks/rules-of-hooks */
// import { Link } from 'gatsby'
// import styled from 'styled-components'
import React, {useState} from 'react'
import DarkToggle from './DarkToggle'
import { Link } from 'gatsby';
import styled from 'styled-components';
import {RiArticleFill} from 'react-icons/ri'
import {FaTags} from 'react-icons/fa'
import LogoChange from './LogoChange'
import '@fontsource/rubik/800.css'
import HamburgerMenuToggle from './HamburgerToggle'
import HamburgerMenu from './HamburgerMenu';


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
  font-size: 27px;
  font-weight: 700;
  position: fixed;
  box-shadow: 0px 15px 10px -15px var(--color-invertedBackground);
  font-family: 'Rubik';
  overflow: hidden;
`;
const NavLogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0;
  margin-left: 7px;
  overflow: hidden;
  
  &:hover {
    cursor: pointer;
  }

`

const NavLogoTitle = styled.span`
  text-decoration: none;
  background: linear-gradient(120deg, #115dd2 0%, #FA8072 100%);
  -webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
  margin-left: 9px;
  font-size: 29px;
  max-width: 100px;
  @media screen and (max-width: 768px) {
    display: none;
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

  
`;

export const NavLink = styled(Link)`
  color: var(--color-secondaryText);
  transition: 0.25s ease-in;
  &:hover {
    color: var(--color-primaryColor);
    transform: scale(1.04);
  }
`
export const NavLinkText = styled(Link)`
  text-decoration: none;
  
`


export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;
  overflow: hidden;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
    
  }

`;

export const NavBtns = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 15px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  overflow: hidden;

`;



const TutorialsIcon = styled(RiArticleFill)`
  transform: translateY(3.5px);
  padding: 0;
`
const TopicsIcon = styled(FaTags)`
  transform: translateY(3.5px);
  padding: 0;
`


const Header = (props) => {
   
    const [navToggled, setNavToggled] = useState(false);

    const handleNavToggle = () => {
       setNavToggled(!navToggled);
    }
  return (
    <>
      <Nav>
        { navToggled ? <HamburgerMenu handleNavToggle={handleNavToggle} /> : null }
        <NavLogoContainer to="/">
          <LogoChange setWidth={'70px'} setHeight={'70px'} to='/' />
          <NavLogoTitle>Code Circuit</NavLogoTitle>
        </NavLogoContainer>
        

        <NavMenu>
          <NavItem>
            <NavLink to="/tutorials"><TutorialsIcon /> Tutorials</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/topics"><TopicsIcon /> Topics</NavLink>
          </NavItem>
        </NavMenu>
        <NavBtns>
          <DarkToggle />
          <HamburgerMenuToggle handleNavToggle={handleNavToggle} />
        </NavBtns>
      </Nav>
    </>
  );
};

export default Header;

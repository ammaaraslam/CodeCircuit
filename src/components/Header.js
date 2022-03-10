// /* eslint-disable react-hooks/rules-of-hooks */
// import { Link } from 'gatsby'
// import styled from 'styled-components'
import React, {useState} from 'react'
import DarkToggle from './DarkToggle'
import { Link } from 'gatsby';
import styled from 'styled-components';
import {RiArticleFill} from 'react-icons/ri'
import {FaTags} from 'react-icons/fa'
import {SiBookstack} from 'react-icons/si'
import {HiChip} from 'react-icons/hi'
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
  top: auto;
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
  background: linear-gradient(120deg, #004a8f 0%, #28d79a 100%);
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
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1.1rem;
  height: 100%;
  transition: all 0.25s ease-in-out;
  
`;

export const NavLink = styled(Link)`
  transition: all 0.25s ease-in-out;
  color: var(--color-secondaryText);
  &:hover {
    color: var(--color-primaryColor);
    transform: scale(1.04);
    cursor: pointer;
  }
  
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
  color: var(--color-seconaryText);
  transform: translateY(3.5px);
  padding: 0;
`
const TopicsIcon = styled(FaTags)`
  transform: translateY(3.5px);
  padding: 0;
`
const SeriesIcon = styled(SiBookstack)`
  transform: translateY(3.5px);
  padding: 0;
`
const CodeChipsIcon = styled(HiChip)`
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
            <NavLink to="/articles"><TutorialsIcon /> Articles</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/series"><SeriesIcon /> Series</NavLink>
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

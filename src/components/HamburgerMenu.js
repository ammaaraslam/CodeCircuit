// import { Link } from 'gatsby'
// import styled from 'styled-components'
import React from 'react'
import { Link } from 'gatsby'
import {AiFillCloseCircle} from 'react-icons/ai'
import { FaTimes } from 'react-icons/fa';
import styled from 'styled-components';
import {RiArticleFill} from 'react-icons/ri'
import {FaTags} from 'react-icons/fa'
import '@fontsource/rubik/800.css'




const HamburgerMenu = ({handleNavToggle}) => {
    return (
        <StyledMenu>
            <StyledLink onClick={handleNavToggle} to="/tutorials"><TutorialsIcon />  Tutorials</StyledLink>
            <StyledLink onClick={handleNavToggle} to="/topics"><TopicsIcon />  Topics</StyledLink>
            <CloseToggle onClick={handleNavToggle}><FaTimes/></CloseToggle>
        </StyledMenu>
    )
}
const TutorialsIcon = styled(RiArticleFill)`
  padding: 0;
`
const TopicsIcon = styled(FaTags)`
  padding: 0;
`
const StyledMenu = styled.div`
    
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    @media screen and (min-width: 790px) {
        width: 60%;
    }
    background-color: var(--color-lighterBackground);
    z-index: 99;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Rubik';
`;


const StyledLink = styled(Link)`
    transition: all 0.3s;
    color: #fff;
    height: 10%;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 40px;
    padding: 0 1rem;
    color: var(--color-invertedBackground);
    transition: 0.25s ease-in;
    &:hover {
        color: var(--color-primaryColor);
        transform: scale(1.04);
    }
`;


// const CloseToggle = styled(FaWindowClose)`
//     position: fixed;
//     top: 5%;
//     right: 4%;
//     background: transparent;
//     color: var(--color-darkerBackground);
//     padding: .75rem;
//     display: flex;
//     place-items: center;
//     font-size: 27px;
//     cursor: pointer;
// `;
const CloseToggle = styled(AiFillCloseCircle)`
    position: fixed;
    top: 4%;
    right: 4%;
    display: flex;
    place-items: center;
    font-size: 27px;
    transition: all 0.2s;
    color: var(--color-invertedBackground);
    transition: 0.25s ease-in;
    &:hover{
        color: var(--color-primaryColor);
        transform: scale(1.04);
        cursor: pointer;
    }
    
`

export default HamburgerMenu
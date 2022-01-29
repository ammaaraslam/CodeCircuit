import React from 'react'
import useSiteMetadata from '../hooks/use-site-config'
import useSiteImages from '../hooks/use-site-images'
import DarkToggle from './DarkToggle'
import { Link } from 'gatsby';
import styled from 'styled-components';
import {RiArticleFill} from 'react-icons/ri'
import {FaBars} from 'react-icons/fa'
import LogoChange from './LogoChange'

const HamburgerToggle = ({handleNavToggle}) => {
    return (
        <StyledHamburgerToggle onClick={handleNavToggle} />
    )
}


const StyledHamburgerToggle = styled(FaBars)`
    display: none;
    @media screen and (max-width: 768px) {
        display:flex;
        font-size: 27px;
        transition: all 0.2s;
        color: var(--color-invertedBackground);
        transition: 0.25s ease-in;
        &:hover{
            color: var(--color-primaryColor);
            transform: translateY(-3px);
            cursor: pointer;
        }
    }
`
export default HamburgerToggle
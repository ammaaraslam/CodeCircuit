import React from 'react'
import styled from 'styled-components';
import {FaBars} from 'react-icons/fa'

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
            transform: scale(1.04);
            cursor: pointer;
        }
    }
`
export default HamburgerToggle
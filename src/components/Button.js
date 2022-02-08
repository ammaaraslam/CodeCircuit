//Button.js

import React, { useState } from 'react';
import styled from 'styled-components'
import {Link} from 'gatsby'
import '@fontsource/roboto/500.css'

const ButtonComponent = styled(Link)`
    font-family: 'Roboto';
    position: relative;
    font-weight: 540;
    line-height: 2;
    transition: all 0.2s ease-in-out;
    border-radius: 8px;
    letter-spacing: 1px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    align-self: center;
    border: none;
    cursor: pointer;
    outline: 0;
`



const Button = ({ children, onClick, to, textColor, disabled, type, style, ...props }) => {
    const [
        hover,
        setHover
    ] = useState(false);
    const toggleHover = () => {
        setHover(!hover);
    };
    const miniPrimary = {
        letterSpacing: '0.5px',
        backgroundColor : 'transparent',
        color           : 'var(--color-secondaryText)',
        border          : `2px solid var(--color-secondaryText)`,
        maxWidth           : '100px',
        height          : '22px',
        fontSize        : '0.9rem',
        padding         : '5px',
    }
    const miniPrimaryHover = {
        backgroundColor : 'var(--color-secondaryText)',
        letterSpacing: '0.5px',
        border          : `2px solid var(--color-secondaryText)`,
        color           : 'var(--color-secondaryColor)',
        maxWidth           : '100px',
        height          : '22px',
        fontSize        : '0.9rem',
        transform       : 'scale(1.04)',
        padding         : '3px',
    }
    const miniSecondary = {
        backgroundColor : 'transparent',
        color           : 'var(--color-secondaryText)',
        letterSpacing: '0.5px',
        border          : `2px solid var(--color-secondaryText)`,
        maxWidth           : '150px',
        height          : '22px',
        padding         : '5px',
        fontSize        : '0.9rem',
    }
    const miniSecondaryHover = {
        backgroundColor : 'var(--color-secondaryText)',
        padding         : '5px',
        border          : `2px solid var(--color-secondaryText)`,
        letterSpacing: '0.5px',
        color           : 'var(--color-darkerBackground)',
        maxWidth           : '150px',
        height          : '22px',
        fontSize        : '0.9rem',
        transform       : 'scale(1.04)'
    }
    const smallPrimary = {
        backgroundColor : 'transparent',
        color           : 'var(--color-primaryColor)',
        border          : `2px solid var(--color-primaryColor)`,
        width           : '100px',
        height          : '45px',
        fontSize        : '1.35rem',
    }
    const smallPrimaryHover = {
        backgroundColor : 'var(--color-primaryColor)',
        border          : `2px solid var(--color-primaryColor)`,
        color           : textColor,
        width           : '100px',
        height          : '45px',
        fontSize        : '1.35rem',
        transform       : 'scale(1.04)'
    }
    const bigPrimary = {
        backgroundColor : 'transparent',
        color           : 'var(--color-primaryColor)',
        border          : `2px solid var(--color-primaryColor)`,
        width           : '150px',
        height          : '50px',
        fontSize        : '1.5rem',
    }
    const bigPrimaryHover = {
        backgroundColor : 'var(--color-primaryColor)',
        border          : `2px solid var(--color-primaryColor)`,
        color           : textColor,
        width           : '150px',
        height          : '50px',
        fontSize        : '1.5rem',
        transform       : 'scale(1.04)'
    }
    const bigSecondary = {
        backgroundColor : 'transparent',
        color           : 'var(--color-secondaryColor)',
        border          : `2px solid var(--color-secondaryColor)`,
        width           : '150px',
        height          : '50px',
        fontSize        : '1.5rem',
    }
    const bigSecondaryHover = {
        backgroundColor : 'var(--color-secondaryColor)',
        border          : `2px solid var(--color-secondaryColor)`,
        color           : textColor,
        width           : '150px',
        height          : '50px',
        fontSize        : '1.5rem',
        transform       : 'scale(1.04)'
    }
    const smallSecondary = {
        backgroundColor : 'transparent',
        color           : 'var(--color-secondaryColor)',
        border          : `2px solid var(--color-secondaryColor)`,
        width           : '100px',
        height          : '45px',
        fontSize        : '1.35rem',
    }
    const smallSecondaryHover = {
        backgroundColor : 'var(--color-secondaryColor)',
        border          : `2px solid var(--color-secondaryColor)`,
        color           : textColor,
        width           : '100px',
        height          : '45px',
        fontSize        : '1.35rem',
        transform       : 'scale(1.04)'
    }
    const commonStyles = {
        backgroundColor : 'var(--color-secondaryColor)',
        color           : 'white'
    };

    let btnStyle;
    switch (type) {
        case 'mini-primary':
            if (hover) {
                btnStyle = miniPrimaryHover;
            }
            else {
                btnStyle = miniPrimary;
            }
            break;
        case 'mini-secondary':
            if (hover) {
                btnStyle = miniSecondaryHover;
            }
            else {
                btnStyle = miniSecondary;
            }
            break;
        case 'small-primary':
            if (hover) {
                btnStyle = smallPrimaryHover;
            }
            else {
                btnStyle = smallPrimary;
            }
            break;
        case 'big-primary':
            if (hover) {
                btnStyle = bigPrimaryHover;
            }
            else {
                btnStyle = bigPrimary;
            }
            break;
        case 'small-secondary':
            if (hover) {
                btnStyle = smallSecondaryHover;
            }
            else {
                btnStyle = smallSecondary;
            }
            break;
        case 'big-secondary':
            if (hover) {
                btnStyle = bigSecondaryHover;
            }
            else {
                btnStyle = bigSecondary;
            }
            break;
        default:
            btnStyle = smallPrimary;
            break;
    }
    return (
        <ButtonComponent
             style={

                     disabled ? { ...commonStyles, ...btnStyle, ...style } :
                     { ...commonStyles, ...btnStyle, ...style }
             }
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            {...props}
            type="button"
            to={to}
            onClick={

                    !disabled ? onClick :
                    () => {}
            }
        >
            {children || 'button'}
        </ButtonComponent>
    );
};

export default Button;

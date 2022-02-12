import React, { useState } from 'react';
import { ThemeContext } from '../ThemeContext'
import styled from 'styled-components'
import CodeCircuitLogoLight from '../images/CodeCircuitLogoLight.png'
import CodeCircuitLogoDark from '../images/CodeCircuitLogoDark.png'

export const Logo = styled.div`
  align-items: center;

`

const LogoChange = ({ isExpanded = false , type, to, children, setWidth, setHeight, onClick, disabled, size,  style,  ...props}) => {
    const [
        hover,
        setHover
    ] = useState(false);
    const toggleHover = () => {
        setHover(!hover);
    };
    // const smallLogo = {
    //     width: setWidth,
    //     height: '70px',
    // }
    // const xsmallLogo = {
    //     width: '70px',
    //     height: '70px',
    // }

    // const bigLogo = {
    //     width: '190px',
    //     height: '190px',
    //     display: 'block',
    //     marginLeft: 'auto',
    //     marginRight: 'auto',
    // }
    const smallLogo = {
        width: setWidth,
        height: setHeight,
    }
    const xsmallLogo = {
        width: setWidth,
        height: setHeight,
    }

    const bigLogo = {
        width: setWidth,
        height: setHeight,
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
    }
    const commonStyles = {
        backgroundColor : 'transparent',
        borderRadius : '2px',
        padding : size,
        color           : 'white'
      };
    
    let logoSize;
    switch (type) {
        case 'small':
            if (hover) {
                logoSize = smallLogo;
            }
            else {
                logoSize = smallLogo;
            }
            break;
        case 'xsmall':
            if (hover) {
                logoSize = xsmallLogo;
            }
            else {
                logoSize = xsmallLogo;
            }
            break;
        case 'big':
            if (hover) {
                logoSize = bigLogo;
            }
            else {
                logoSize = bigLogo;
            }
            break;
        default:
            logoSize = smallLogo;
            break;
    }
    const { colorMode } = React.useContext(ThemeContext)
  
    if (!colorMode) {
      return null
    }
  
    
    const oppositeColor = colorMode === 'light' ? 'dark' : 'light'
    return (
        <Logo
        style={

                disabled ? { ...commonStyles, ...logoSize, ...style } :
                { ...commonStyles, ...logoSize, ...style }
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
        {colorMode === 'dark' ? (
          <img src={CodeCircuitLogoDark} alt="light logo" />
  
        ) : (
          <img src={CodeCircuitLogoLight} alt="dark Logo" />
        )}
        {isExpanded && `Toggle ${oppositeColor} mode`}
      </Logo>
    )
  }
  
  export default LogoChange
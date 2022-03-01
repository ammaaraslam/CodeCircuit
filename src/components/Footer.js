import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { GrGatsbyjs } from 'react-icons/gr';
import { SiNetlify } from 'react-icons/si';
import '@fontsource/rubik/700.css'
import '@fontsource/roboto/400.css'

import {FaReact} from 'react-icons/fa';

const FooterContainer = styled.footer`
  align-items: center;
  display: block;
  height: auto;
  text-align: center;  
  background-color: var(--color-primaryBackground);
  
  @media screen and (max-width: 768px) {
    & {
      height: auto;
  }
    
`

const FooterLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: left;
  padding-top: 90px;
  padding-bottom: 31px;
  @media screen and (max-width: 768px) {
    & {
      flex-direction: column;
      padding-top: 70px;
    }
  }
`

const FooterLinkItem = styled(Link)`
  font-size: 1.75rem;
  font-weight: 550;
  padding-top: 7px;
  padding-bottom: 7px;
  padding-left: 10px;
  padding-right: 10px;
  font-family: 'Rubik';
  color: var(--color-invertedBackground);
  transition: all 0.25s ease-in-out;
  &:hover {
    background: linear-gradient(120deg, #004a8f 0%, #28d79a 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'Rubik';
    transform: scale(1.04);
  }

`
const FooterText = styled.p`
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--color-primaryText);
  text-align: center;
  align-items: center;
  font-family: 'Rubik';
  padding-top: 8.5px;
  padding-bottom: 20px;
`
const FooterSpanText = styled(Link)`
  text-decoration: none;
  padding-left: 2px;
  padding-right: 2px;
  color: var(--color-linkColorChange);
  text-decoration: underline;
  text-decoration-color: var(--color-linkColorChangeInverted);
  text-decoration-thickness: 2px;
  &:hover {
    color: var(--color-linkColorChangeInverted);
    text-decoration: underline;
    text-decoration-color: var(--color-linkColorChangeInverted);
    text-decoration-thickness: 3px;
    cursor: pointer;
  }

`
const AuthorName = styled(Link)`
  font-family: 'Rubik';
  text-decoration: none;
  padding-left: 2px;
  padding-right: 2px;
  color: var(--color-linkColorChange);
  text-decoration: underline;
  text-decoration-color: var(--color-linkColorChangeInverted);
  text-decoration-thickness: 2px;
  &:hover {
    color: var(--color-linkColorChangeInverted);
    text-decoration: underline;
    text-decoration-color: var(--color-linkColorChangeInverted);
    text-decoration-thickness: 3px;
    cursor: pointer;
  }`
const GatsbyIcon = styled(GrGatsbyjs)`
  color: var(--color-secondaryText);
  padding-left: 2.5px;
  padding-right: 2.5px;
  font-size: 1.5rem;
  transform: translateY(5px);
  transition: all 0.2s ease-in-out;
  
  &:hover {
    color: var(--color-gatsbyColor);
    transform: scale(1.04);
    cursor: pointer;
  }
`
const ReactIcon = styled(FaReact)`
  color: var(--color-secondaryText);
  padding-left: 2.5px;
  padding-right: 2.5px;
  font-size: 1.5rem;
  transform: translateY(5px);
  transition: all 0.2s ease-in-out;
  &:hover {
    color: var(--color-reactColor);
    transform: scale(1.04);
    cursor: pointer;
  }
`

const NetlifyIcon = styled(SiNetlify)`
  color: var(--color-secondaryText);
  padding-left: 2.5px;
  padding-right: 2.5px;
  font-size: 1.5rem;
  transform: translateY(5px);
  transition: all 0.2s ease-in-out;
  &:hover {
    color: var(--color-netlifyColor);
    transform: scale(1.04);
    cursor: pointer;
  }
`


const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <FooterLinkItem to='/about'>About</FooterLinkItem>
        <FooterLinkItem to='/terms'>Terms</FooterLinkItem>
        <FooterLinkItem to='/privacy'>Privacy</FooterLinkItem>
      </FooterLinks>
      <FooterText><FooterSpanText to='/'>Code Circuit</FooterSpanText> © 2021</FooterText>
      <FooterText>
        Built with <a href='https://www.gatsbyjs.com' rel='noreferrer' target='_blank'><GatsbyIcon /></a> <a href='https://www.reactjs.com' rel='noreferrer' target='_blank'><ReactIcon /></a> by <AuthorName to='/ammaar-aslam'>Ammaar Aslam</AuthorName> and hosted on <a href='https://www.netlify.com' rel='noreferrer' target='_blank'><NetlifyIcon /></a>
      </FooterText>
    </FooterContainer>
  )
}

export default Footer

import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import useSiteMetadata from '../hooks/use-site-config'
import { GrGatsbyjs } from 'react-icons/gr';
import { SiNetlify } from 'react-icons/si';
import '@fontsource/rubik/700.css'
import '@fontsource/roboto/400.css'

import {
  FaReact,
  FaHeart,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import Button from './Button'
import CodeCircuitLogoLight from '../images/CodeCircuitLogoLight.png'
import LogoChange from '../components/LogoChange'

const FooterContainer = styled.footer`
  align-items: center;
  display: block;
  height: 40vh;
  text-align: center;  
  background-color: var(--color-primaryBackground);
    
`

const FooterLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: left;
  padding-top: 100px;
  padding-bottom: 31px;
`

const FooterLinkItem = styled(Link)`
  font-size: 1.75rem;
  font-weight: 550;
  padding-top: 7px;
  padding-bottom: 7px;
  padding-left: 10px;
  padding-right: 10px;
  transition: all 0.2s ease-in-out;
  font-family: 'Rubik';
  color: var(--color-invertedBackground);
  transition: 0.25s ease-in;
  &:hover {
    color: var(--color-primaryColor);
  }

`
const FooterText = styled.p`
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--color-primaryText);
  text-align: center;
  align-items: center;
  font-family: 'Roboto';
  padding-top: 8.5px;
`
const FooterSpanText = styled(Link)`
  text-decoration: none;
  padding-left: 2px;
  padding-right: 2px;
  color: var(--color-secondaryColor);
  background-image: linear-gradient(120deg, #115dd2 0%, #115dd2 100%);
  background-repeat: no-repeat;
  background-size: 100% 0.2em;
  background-position: 0 88%;
  font-family: 'Rubik';
  transition: background-size 0.25s ease-in;
  &:hover {
    background-size: 100% 88%;
    cursor: pointer;
  }

`
const AuthorName = styled(Link)`
  font-family: 'Rubik';
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  color: var(--color-primaryColor);
  padding-left: 2px;
  padding-right: 2px;
  background-image: linear-gradient(120deg, #FA8072 0%, #FA8072 100%);
  background-repeat: no-repeat;
  background-size: 100% 0.2em;
  background-position: 0 88%;
  transition: background-size 0.25s ease-in;
  &:hover {
    background-size: 100% 88%;
    cursor: pointer;
  }
`
const GatsbyIcon = styled(GrGatsbyjs)`
  color: var(--color-secondaryText);
  padding-left: 2.5px;
  padding-right: 2.5px;
  font-size: 1.5rem;
  transform: translateY(5px);
  transition: all 0.2s ease-in-out;
  &:hover {
    color: var(--color-gatsbyColor);
    transform: translateY(-1px);
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
    transform: translateY(-1px);
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
    transform: translateY(-1px);
    cursor: pointer;
  }
`


const Footer = () => {
  const { authorName, websiteHost, footerLinks } = useSiteMetadata()

  return (
    <FooterContainer>
      <FooterLinks>
        <FooterLinkItem to='/about'>About</FooterLinkItem>
        <FooterLinkItem to='/terms'>Terms</FooterLinkItem>
        <FooterLinkItem to='/impressum'>Impressum</FooterLinkItem>
        <FooterLinkItem to='/advertise'>Advertise</FooterLinkItem>
      </FooterLinks>
      <FooterText><FooterSpanText to='/'>Code Circuit</FooterSpanText> © 2021</FooterText>
      <FooterText>
        Built with <a href='https://www.gatsbyjs.com' target='_blank'><GatsbyIcon /></a> <a href='https://www.reactjs.com' target='_blank'><ReactIcon /></a> by <AuthorName>Ammaar Aslam</AuthorName> and hosted on <a href='https://www.netlify.com' target='_blank'><NetlifyIcon /></a>
        </FooterText>
    </FooterContainer>
  )
}

export default Footer

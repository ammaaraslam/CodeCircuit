import React from 'react'
import styled from 'styled-components'
import useSiteMetadata from '../hooks/use-site-config'
import useSiteImages from '../hooks/use-site-images'
import '@fontsource/rubik/800.css'

const HeroContainer = styled.div`
  position: relative;
  display: table;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  top: 0;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: var(--color-primaryBackground);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`

const TitleContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  width: 100%;
`


const HeroTitle = styled.h1`
  font-weight: 700;
  font-size: 4.1rem;
  margin: 10px 50px;
  font-family: 'Rubik';
  color: var(--color-secondaryColor);
  text-transform: capitalize;
  
`

const HeroSubTitle = styled.h2`
  margin: 10px 50px;
  color: var(--color-white);
  text-shadow: 1px 1px 4px rgba(34, 34, 34, 0.85);
  text-transform: capitalize;
`

const Hero = props => {

  return (
    <HeroContainer>
      <TitleContainer>
        <HeroTitle>{props.title}</HeroTitle>
        {props.subTitle && <HeroSubTitle>{props.subTitle}</HeroSubTitle>}
      </TitleContainer>
    </HeroContainer>
  )
}

export default Hero

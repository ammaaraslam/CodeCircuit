import React from 'react'
import styled from 'styled-components'
import useSiteMetadata from '../hooks/use-site-config'
import useSiteImages from '../hooks/use-site-images'
import ContentHeader from './ContentHeader'
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
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  font-family: 'Rubik';
  align-items: center;
  
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
  -webkit-text-stroke: 2px var(--color-primaryBackground); /* width and color */
  margin: 10px 50px;
  color: var(--color-primaryText);
  text-transform: capitalize;
  @media screen and (max-width: 768px) {
    & {
      margin: 0;
      font-size: 3.4rem;
    }
  }
  
  
`


const Hero = props => {
  const { siteCover } = useSiteMetadata()
  const { fluid } = useSiteImages(siteCover)
  const heroImg = props.heroImg || fluid.src
  const { date, topics } = props
  

  return (
    <HeroContainer style={{ backgroundImage: `url("${heroImg}")` }}>
      <TitleContainer>
        <HeroTitle>{props.title}</HeroTitle>
        <ContentHeader date={date} topics={topics} />
      </TitleContainer>
    </HeroContainer>
  )
}

export default Hero

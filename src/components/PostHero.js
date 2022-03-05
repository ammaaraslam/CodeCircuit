import React from 'react'
import styled from 'styled-components'
import useSiteMetadata from '../hooks/use-site-config'
import useSiteImages from '../hooks/use-site-images'
import ContentHeader from './ContentHeader'
import '@fontsource/rubik/800.css'
import '@fontsource/roboto/400.css'
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
  background: linear-gradient(120deg, #004a8f 0%, #28d79a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 2px var(--color-primaryBackground); /* width and color */
  margin: 10px 50px;
  text-transform: capitalize;
  @media screen and (max-width: 768px) {
    & {
      margin: 0;
      font-size: 3.4rem;
    }
  }
  
  
`
const BackgroundAccredit = styled.span`
  padding: 8px;
  background-color: var(--color-primaryBackground);
  border-radius: 8px;
  font-family: 'Roboto';
  color: var(--color-primaryText);
  a {
    color: var(--color-linkColorChange);
    text-decoration: underline;
    text-decoration-color: var(--color-linkColorChangeInverted);
    text-decoration-thickness: 2px;
    &:hover {
      color: var(--color-linkColorChangeInverted);
      text-decoration: underline;
      text-decoration-color: var(--color-linkColorChangeInverted);
      text-decoration-thickness: 3px;
    
    }
  }
`


const Hero = props => {
  const { siteCover } = useSiteMetadata()
  const { fluid } = useSiteImages(siteCover)
  const heroImg = props.heroImg || fluid.src
  const { date, topics, timeToRead } = props
  const ownCover = props.ownCover

  if (ownCover) {
    return (
      <HeroContainer style={{ backgroundImage: `url("${heroImg}")` }}>
        <TitleContainer>
          <HeroTitle>{props.title}</HeroTitle>
          <ContentHeader date={date} topics={topics} timeToRead={timeToRead} />
          <BackgroundAccredit>
            Background Image by <a href={props.urlToAuthor} target="_blank" rel="noreferrer" >{props.nameOfAuthor}</a> on <a href={props.urlToProvider} target="_blank" rel="noreferrer" >{props.nameOfProvider}</a>
          </BackgroundAccredit>
        </TitleContainer>
      </HeroContainer>
    )
  }

  return (
    <HeroContainer style={{ backgroundImage: `url("${heroImg}")` }}>
      <TitleContainer>
        <HeroTitle>{props.title}</HeroTitle>
        <ContentHeader date={date} topics={topics} timeToRead={timeToRead} />
      </TitleContainer>
    </HeroContainer>
  )
}

export default Hero

import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import useSiteMetadata from '../hooks/use-site-config'
import useSiteImages from '../hooks/use-site-images'
import TagList from './TagList'
import Flag from './Flag'
import { ReadingTime, Bull } from './Commons'
import {AiOutlineClockCircle} from 'react-icons/ai'
import {FaRegCalendarAlt} from 'react-icons/fa'
import {HiArrowRight} from 'react-icons/hi'



const PreviewContainer = styled.aside`
  display: grid;
  justify-items: center;
  grid-gap: 50px;
  grid-template-columns: repeat(2, 1fr);
  width: 75%;
  background-color: var(--color-darkerBackground);
  border-radius: 45px;
  padding-top: 90px;
  padding-bottom: 50px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: 15px;
  margin-right: auto;
`
const SectionTitle = styled.h1`
    margin-left: 3%;
    text-decoration: none;
    font-size: 3.3rem;
    padding-top: 20px;
    padding-bottom: 10px;
    font-weight: 1500;
    line-height: 1.3cm;
    color: var(--color-secondaryText);
    border-bottom: 2px solid var(--color-secondaryText);
    font-family: 'Rubik';
`

const Preview = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0.3rem;
  background-color: var(--color-primaryBackground);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  width: 350px;
  height: 490px;
  transition: all 0.3s;
  

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 0 0, 0 6px 12px var(--color-invertedBackground);
  }

  @media (min-width: 780px) {
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }
`

const ReadPost = styled.div`
  font-size: 15px;
  text-decoration: none;
  letter-spacing: 0.05em;
  line-height: 2;
  color: var(--color-primaryText);
  position: absolute;
  bottom: 7px;
  right: 5px;
  padding: 10px;
  z-index: 1;
  transition: all 0.3s;
  font-family: 'Roboto';
`
const RightArrowIcon = styled(HiArrowRight)`
  color: var(--color-primaryText);
  transform: translateY(3px);
  transition: all 0.3s;
`


const ReadPostText = styled(Link)`
  text-align: right;
  align-items: right;
  font-family: 'Roboto';
  padding-top: 7px;
  padding-bottom: 7px;
  padding-left: 12px;
  padding-right: 12px;
  font-size: 0.9rem;
  background-color: transparent;
  border: 2px solid var(--color-primaryColor);
  border-radius: 50px;
  transition: all 0.3s;

  &:hover {
    background-color: var(--color-primaryColor);
    color: var(--color-primaryText);
    ${RightArrowIcon} {
      color: var(--color-primaryText);
      transform: translateY(3px) translateX(5px);
    }
  }
`

const PostImage = styled(Link)`
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  height: 190px;
  &:hover {
      cursor: pointer;
    }

`

const PostHeader = styled.header`
  padding: 0.5rem;
  z-index: 1;
`

const Excerpt = styled.p`
  margin-top: auto;
  color: var(--color-primaryText);
  padding: 0.5rem;
  font-family: 'Roboto';

  z-index: 1;
  
`

const PostTitleLink = styled(Link)`
  font-family: 'Rubik';
  font-size: 1.6rem;
  font-weight: 1000;
  color: var(--color-secondaryColor);
  padding-left: 2px;
  padding-right: 2px;
  background-image: linear-gradient(120deg, #115dd2 0%, #115dd2 100%);
  background-repeat: no-repeat;
  background-size: 100% 0.2em;
  background-position: 0 88%;
  transition: background-size 0.25s ease-in;
  &:hover {
    background-size: 100% 88%;
  }
`
const PostTags = styled.div`
  transform: translateY(-20px) translateX(8px);
  align-items: right;
  text-align: right;

`
const FooterLine = styled.div`
  font-size: 13px;
  z-index: 1;
  padding: 0.5rem;
  position: absolute;
  font-family: 'Roboto';

  bottom: 60px;
  color: var(--color-primaryText);
`

const Date = styled.span`
  color: var(--color-primaryText);
  margin-left: 6px;
`


const ClockIcon = styled(AiOutlineClockCircle)`
  color: var(--color-primaryText);
  transform: translateY(1px) translateX(-2.3px);
  
`
const CalendarIcon = styled(FaRegCalendarAlt)`
  color: var(--color-primaryText);
  transform: translateY(1px) translateX(1.5px);
`


const PreviewCover = styled.div`
  width: auto;
  height: 200px;
  background: #c5d2d9 no-repeat 50%;
  background-size: cover;
  border-radius: 5px 5px 0 0;
`

const PreviewContent = styled.div`
  padding: 20px;

  header {
    padding: 0 0 10px 0;
  }
  section {
    padding-bottom: 10px;
  }
  footer {
    font-size: 0.8em;
  }
`

const PrevNextPost = props => {
  const { previous, next } = props
  const tutorials = [previous, next].filter(i => i).map(item => ({ node: item }))
  const { siteCover, defaultLang } = useSiteMetadata()
  const { fluid } = useSiteImages(siteCover)

  return (
    <div>
      <Fragment>
        
        <PreviewContainer>
          {tutorials.map((tutorial, i) => {
            const { excerpt, timeToRead } = tutorial.node
            const {
              tags,
              cover,
              title,
              slug,
              language,
            } = tutorial.node.frontmatter
            const heroImg = (cover && cover.publicURL) || fluid.src
            
            return (
                <Preview key={`prev-next-${i}`}>
                    <PostImage
                      style={{ backgroundImage: `url("${heroImg}")` }} to={`/tutorial/${slug}`} 
                    />
                    <PostHeader>
                    <PostTags>
                      <TagList tags={tags} />
                    </PostTags>
                    <h2>
                      <PostTitleLink to={`/tutorial/${slug}`}>
                        {defaultLang !== language && <Flag language={language} />}
                        {title}
                      </PostTitleLink>
                    </h2>
                  </PostHeader>
                  <section>
                    <Excerpt dangerouslySetInnerHTML={{ __html: excerpt }} />
                  </section>
                  <footer>
                    <FooterLine>
                      <ClockIcon />
                      <ReadingTime min={timeToRead} />
                    </FooterLine>
                    <ReadPost>
                      <ReadPostText to={`/tutorial/${slug}`} aria-label={`View ${title} tutorial`}>Read More <RightArrowIcon /></ReadPostText>
                    </ReadPost>
                  </footer>
                </Preview>
              
            )
          })}
        </PreviewContainer>
      </Fragment>
    </div>
    
  )
}

export default PrevNextPost

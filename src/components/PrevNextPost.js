import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import useSiteMetadata from '../hooks/use-site-config'
import useSiteImages from '../hooks/use-site-images'
import TagList from './TagList'
import Flag from './Flag'
import { ReadingTime } from './Commons'
import {AiOutlineClockCircle} from 'react-icons/ai'
import {HiArrowRight} from 'react-icons/hi'



const PreviewContainer = styled.aside`
  display: grid;
  justify-items: center;
  grid-gap: 50px;
  grid-template-columns: repeat(2, 1fr);
  width: 75%;
  background-color: var(--color-darkerBackground);
  border: 10px solid var(--color-primaryBackground);
  border-radius: 40px;
  padding-top: 90px;
  padding-bottom: 50px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: 15px;
  margin-right: auto;
  @media screen and (max-width: 768px) {
    & {
      width: 94%;
      grid-template-columns: repeat(1, 1fr);
    }
  }
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
  height: 510px;
  transition: all 0.3s;
  

  &:hover {
    box-shadow: 0px -10px 15px -6px  #004a8f, /* top - THE RED SHADOW */
                0px  5px  15px  0px  #004a8f, /* bottom */
                5px  0px  15px  0px  #28d79a, /* right */
                -5px  0px  15px  0px  #28d79a; /* left */
  }

  @media (min-width: 780px) {
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }
  @media screen and (max-width: 768px) {
    & {
      grid-template-columns: repeat(1, 1fr);
      width: 340px;
      height: 480px;
    }
  }
  @media screen and (max-width: 400px) {
    & {
      grid-template-columns: repeat(1, 1fr);
      width: 320px;
      height: 460px;
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
  color: var(--color-primaryBackground);
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
  color: var(--color-primaryBackground);
  background-image: linear-gradient(120deg, #004a8f 0%, #28d79a 100%);
  border-radius: 50px;
  transition: all 0.3s;

  &:hover {
    color: var(--color-primaryBackground);
    background-image: linear-gradient(120deg, #004a8f 0%, #28d79a 100%);
    transform: scale(1.04);
    ${RightArrowIcon} {
      color: var(--color-primaryBackground);
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
  color: var(--color-primaryText);
  padding-left: 2px;
  padding-right: 2px;
  background-image: linear-gradient(120deg, #004a8f 0%, #28d79a 100%);
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



const ClockIcon = styled(AiOutlineClockCircle)`
  color: var(--color-primaryText);
  transform: translateY(1px) translateX(-2.3px);
  
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
              topics,
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
                      <TagList topics={topics} />
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

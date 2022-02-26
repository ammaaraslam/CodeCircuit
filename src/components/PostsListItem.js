import React from 'react'
import { Link } from 'gatsby'
import Flag from './Flag'
import TagList from './TagList'
import useSiteMetadata from '../hooks/use-site-config'
import styled from 'styled-components'
import { Bull, ReadingTime } from './Commons'
import {AiOutlineClockCircle} from 'react-icons/ai'
import {HiArrowRight} from 'react-icons/hi'
import useSiteImages from '../hooks/use-site-images'
import '@fontsource/rubik/700.css'
import '@fontsource/roboto/400.css'
import Time from './Time'

const Post = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0.3rem;
  background-color: var(--color-primaryBackground);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  width: 350px;
  height: 510px;
  
  &:hover {
    box-shadow: 0px -10px 15px -6px  #004a8f, /* top - THE RED SHADOW */
                0px  5px  15px  0px  #004a8f, /* bottom */
                5px  0px  15px  0px  #28d79a, /* right */
                -5px  0px  15px  0px  #28d79a; /* left */
  }

  @media screen and (max-width: 768px) {
    & {
      margin-top: var(--size-600);
      width: 340px;
      height: 480px;
    }
  }
  @media screen and (max-width: 400px) {
    & {
      margin-top: var(--size-600);
      width: 310px;
      height: 450px;
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
  
  font-family: 'Roboto';
`
const RightArrowIcon = styled(HiArrowRight)`
  color: var(--color-primaryBackground);
  transform: translateY(3px);
  
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
  
  }
`
const PostTags = styled.div`
  transform: translateY(-20px) translateX(8px);
  align-items: right;
  text-align: right;

`
const FooterLine = styled.div`
  font-size: 0.87rem;
  z-index: 1;
  padding: 0.5rem;
  position: absolute;
  font-family: 'Roboto';
  bottom: 60px;
  color: var(--color-linkColorChangeInverted);
`


const ClockIcon = styled(AiOutlineClockCircle)`
  color: var(--color-linkColorChange);
  transform: translateY(1px);
`



const PostsListItem = props => {
  const { title, excerpt, slug, language, cover, topics, timeToRead, date } = props
  const { defaultLang } = useSiteMetadata()
  const { siteCover } = useSiteMetadata()
  const { fluid } = useSiteImages(siteCover)
  const heroImg = (cover && cover.publicURL) || fluid.src
 
  return (
    <Post>
      <PostImage style={{ backgroundImage: `url("${heroImg}")` }} to={`/tutorial/${slug}`} />
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
          {date && <Time date={date} />}
          <Bull />
          <ReadingTime min={timeToRead} />
        </FooterLine>
        <ReadPost>
          <ReadPostText to={`/tutorial/${slug}`} aria-label={`View ${title} tutorial`}>Read More <RightArrowIcon /></ReadPostText>
        </ReadPost>
      </footer>
    </Post>
  )
}
export default PostsListItem
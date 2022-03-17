import React from 'react'
import { Link } from 'gatsby'
import Flag from './Flag'
import TagList from './TagList'
import useSiteMetadata from '../hooks/use-site-config'
import styled from 'styled-components'
import { Bull, ReadingTime } from './Commons'
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
  transition: all 0.1s ease-in-out;
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
      height: 490px;
    }
  }
  @media screen and (max-width: 420px) {
    & {
      margin-top: var(--size-600);
      width: 300px;
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
  transition: all 0.15s ease-in-out;
  font-family: 'Roboto';
`
const RightArrowIcon = styled(HiArrowRight)`
  transition: all 0.15s ease-in-out;
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
  transition: all 0.15s ease-in-out;

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
  @media screen (max-width: 420px) {
    & {
      padding: 0.4rem;
    }
  }

`

const Excerpt = styled.p`
  margin-top: auto;
  color: var(--color-primaryText);
  padding: 0.5rem;
  font-family: 'Roboto';

  z-index: 1;
  @media screen (max-width: 420px) {
    & {
      max-width: 2ch;
    }
  }
  
`

const PostTitleLink = styled(Link)`
  max-width: 400px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  font-family: 'Rubik';
  font-size: 1.6rem;
  font-weight: 1000;
  padding-left: 2px;
  padding-right: 2px;
  color: var(--color-linkColorChange);
  text-decoration: underline;
  text-decoration-color: var(--color-linkColorChangeInverted);
  text-decoration-thickness: 2px;
  transition: all 0.1s;

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
  color: var(--color-linkColorChange);
`



const PostsListItem = props => {
  const { title, excerpt, slug, language, cover, topics, timeToRead, date } = props
  const { defaultLang } = useSiteMetadata()
  const { siteCover } = useSiteMetadata()
  const { fluid } = useSiteImages(siteCover)
  const heroImg = (cover && cover.publicURL) || fluid.src
  const TruncExcerpt = require('trunc-html')
  let excerptHtml = excerpt
  excerptHtml = TruncExcerpt(excerptHtml, 110).html
 
  return (
    <Post>
      <PostImage style={{ backgroundImage: `url("${heroImg}")` }} to={`/article/${slug}`} />
      <PostHeader>
        <PostTags>
          <TagList topics={topics} />
        </PostTags>
      </PostHeader>
      <PostTitleLink to={`/article/${slug}`}>
            {defaultLang !== language && <Flag language={language} />}
            {title}
      </PostTitleLink>


      <section>
        <Excerpt dangerouslySetInnerHTML={{ __html: excerptHtml}} />
      </section>

      <footer>
        <FooterLine>
          {date && <Time date={date} />}
          <Bull />
          <ReadingTime min={timeToRead} />
        </FooterLine>
        <ReadPost>
          <ReadPostText to={`/article/${slug}`} aria-label={`View ${title} article`}>Read More <RightArrowIcon /></ReadPostText>
        </ReadPost>
      </footer>
    </Post>
  )
}
export default PostsListItem
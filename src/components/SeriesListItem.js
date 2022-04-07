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

const SeriesItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0.2rem;
  background-color: var(--color-primaryBackground);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  width: 350px;
  height: 250px;
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
      height: 210px;
    }
  }
  @media screen and (max-width: 420px) {
    & {
      margin-top: var(--size-600);
      width: 300px;
      height: 170px;
    }
  }



`

const SeriesImageCover = styled(Link)`
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  height: 100%;
  opacity: 0.7;
  &:hover {
      cursor: pointer;
    }

`


const SeriesExcerpt = styled.p`
  margin-top: auto;
  color: var(--color-primaryText);
  padding: 0.5rem;
  font-family: 'Roboto';
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  z-index: 1;
  @media screen (max-width: 420px) {
    & {
      max-width: 2ch;
    }
  }
  
`

const SeriesTitle = styled(Link)`
  max-width: 400px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Rubik';
  font-size: 1.8rem;
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



const SeriesListItem = props => {
  const { title, excerpt, slug, cover} = props
  const { siteCover } = useSiteMetadata()
  const { fluid } = useSiteImages(siteCover)
  const heroImg = (cover && cover.publicURL) || fluid.src
  const TruncExcerpt = require('trunc-html')
  let excerptHtml = excerpt
  excerptHtml = TruncExcerpt(excerptHtml, 110).html
 
  return (
    // <Post>
    //   <PostImage style={{ backgroundImage: `url("${heroImg}")` }} to={`/article/${slug}`} />
    //   <PostHeader>
    //     <PostTags>
    //       <TagList topics={topics} />
    //     </PostTags>
    //   </PostHeader>
    //   <PostTitleLink to={`/article/${slug}`}>
    //         {defaultLang !== language && <Flag language={language} />}
    //         {title}
    //   </PostTitleLink>


    //   <section>
    //     <Excerpt dangerouslySetInnerHTML={{ __html: excerptHtml}} />
    //   </section>

    //   <footer>
    //     <FooterLine>
    //       {date && <Time date={date} />}
    //       <Bull />
    //       <ReadingTime min={timeToRead} />
    //     </FooterLine>
    //     <ReadPost>
    //       <ReadPostText to={`/article/${slug}`} aria-label={`View ${title} article`}>Read More <RightArrowIcon /></ReadPostText>
    //     </ReadPost>
    //   </footer>
    // </Post>
    <SeriesItem>
        <SeriesImageCover style={{ backgroundImage: `url("${heroImg}")` }} to={`/series/${slug}`} />
        <SeriesTitle>{title}</SeriesTitle>
    </SeriesItem>
  )
}
export default SeriesListItem
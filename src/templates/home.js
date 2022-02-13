import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import PostsList from '../components/PostsList'
import SEO from '../components/SEO'
import styled from 'styled-components'
import TopicItem from '../components/TopicItem'
import '@fontsource/rubik/800.css'
import '@fontsource/roboto/400.css'
import Button from '../components/Button'
import Avatar from '../images/avatar.jpg'


const HomeHero = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-color: var(--color-primaryBackground);
    top: 0;
    display: flex;
    align-items: center;
    text-align: center;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    
    
`

const HomeHeroInfo = styled.div`
    display: block;
    margin-left: 8%;
    width: 70%;
    color: var(--color-secondaryText);
    align-items: left;
    text-align: left;
    

`
const HomeHeroInfoHeading = styled.h1`
    text-decoration: none;
    font-family: 'Rubik';
    padding-bottom: 20px;
    align-items: center;
    font-size: 4.3rem;
    text-transform: uppercase;
    font-weight: 1700;
    line-height: 2cm;
    @media screen and (max-width: 768px) {
      line-height: 1.4cm;
      font-size: 3.5rem;
    }
    
`
const HomeHeroInfoHeadingSpan = styled.span`
  padding: 10px;
  font-style: italic;
  background: linear-gradient(120deg, #115dd2 0%, #FA8072 100%);
  -webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`
const HomeBodyWrapper = styled.div`
  background-color: var(--color-darkerBackground);
  width: 96%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 20px;
  transform: translateY(-55px);
  padding: 10px;
  z-index: 10;

`

const RecentPostsSection = styled.div`
    position: relative;
    display: table;
    width: 100%;
    border-radius: 45px;
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding-top: 25px;
    padding-bottom: 25px;

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
    border-bottom: 2px solid;
    border-image: linear-gradient(120deg, #115dd2 0%, #FA8072 100%);
    border-image-slice: 1;
    font-family: 'Rubik';
    @media screen and (max-width: 768px) {
      & {
        font-size: 3rem;
      }
    }
`

const AllBtn = styled.div`
    position: absolute;
    right: 15px;
    transform: translateY(-55px);
    font-family: 'Roboto';
`
const RecentPosts = styled.div`
  padding-top: 40px;
  padding-left: 25px;
  padding-right: 25px;
  padding-bottom: 20px;
  @media screen and (max-width: 768px) {
    & {
      padding-left: 15px;
      padding-right: 15px;
    }
  }
  @media screen and (max-width: 400px) {
    & {
      padding-left: 5px;
      padding-right: 5px;
    }
  }
`
const TopicsSection = styled.div`
  position: relative;
  display: table;
  width: 100%;
  border-radius: 45px;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding-top: 25px;
  padding-bottom: 25px;
  z-index: 5;
`

const Topics = styled.div`
  padding-top: 40px;
  padding-left: 45px;
  padding-right: 45px;
  list-style: none;
  display: grid;
  justify-items: center;
  grid-gap: 50px;
  grid-template-columns: repeat(3, 1fr);
  font-family: 'Rubik';

  @media screen and (max-width: 768px) {
    & {
      grid-template-columns: repeat(1, 1fr);
      padding-left: 40px;
      padding-right: 40px;
    }
  }
`

const AuthorSection = styled.div`
  position: relative;
  display: table;
  width: 100%;
  border-radius: 45px;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding-top: 25px;
  padding-bottom: 25px;
  z-index: 5;
`

const AuthorInfo = styled.div`
  text-decoration: none;
  padding: 10px;
  margin-left: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: left;
  width: 80%;
  margin-top: 10px;
  @media screen and (max-width: 768px) {
    & {
      padding: 6px;
      width: 90%;
      margin-left: 0;
      felx-direction: column;
    }
  }
`

const AboutAuthor = styled.p`
    text-decoration: none;
    font-family: 'Roboto';
    font-size: 1.5rem;
    line-height: 0.85cm;
    margin-top: -80px;
    width: 80%;
    color: var(--color-primaryText);
    text-align: left;
    @media screen and (max-width: 768px) {
      & {
        font-size: 1.3rem;
        align-items: bottom;
      }
    }
    

`
const AuthorImage = styled.img`
    width: 320px;
    height: 210px;
    border-radius: 20px;
    align-items: right;
    transform: translateX(100px);
    @media screen and (max-width: 768px) {
      & {
        display: none;
      }
    }

`

class BlogList extends React.Component {

  render() {
    const posts = this.props.data.posts.edges

    return (
      <Layout>
        <SEO />
        <HomeHero>
          <HomeHeroInfo>
            <HomeHeroInfoHeading>
              Ready to<HomeHeroInfoHeadingSpan>electrify </HomeHeroInfoHeadingSpan> your programming or web development journey?
            </HomeHeroInfoHeading>
            {/* <HomeHeroInfoPara>
              Programming and Web Development tutorials.
            </HomeHeroInfoPara> */}
              <Button type={'big-primary'} to='/tutorials'>Get Started</Button>
          </HomeHeroInfo>
        </HomeHero>
        <HomeBodyWrapper>
          <RecentPostsSection>
            <SectionTitle>
              Recent Articles
              <AllBtn><Button type="mini-primary" textColor='var(--color-secondaryText)' to="/tutorials">All Posts ➡ </Button></AllBtn>
            </SectionTitle>
            <RecentPosts>
              <PostsList posts={posts} />
            </RecentPosts>
          </RecentPostsSection>
          <TopicsSection>
            <SectionTitle>
              Popular Topics
              <AllBtn><Button type="mini-primary" textColor='var(--color-secondaryText)' to="/topics">All Topics ➡ </Button></AllBtn>
            </SectionTitle>
            <Topics>
              <TopicItem type="gatsby" to='/tags/gatsby' fontSize='28px'>Gatsby</TopicItem>
              <TopicItem type="react" to='/tags/react' fontSize='28px'>React</TopicItem>
              <TopicItem type="python" to='/tags/python' fontSize='28px'>Python</TopicItem>
              <TopicItem type="django" to='/tags/django' fontSize='28px'>Django</TopicItem>
              <TopicItem type="css" to='/tags/css' fontSize='28px'>CSS</TopicItem>
              <TopicItem type="git" to='/tags/git' fontSize='28px'>Git</TopicItem>
            </Topics>
          </TopicsSection>
          <AuthorSection>
            <SectionTitle>About The Author</SectionTitle>
            <AuthorInfo>
              <AboutAuthor>
              Hi👋 I’m Ammaar Aslam. I’m a 16 year-old self taught programmer/web developer from Sri Lanka. 
              Code Circuit is the place where I share my programming journey and help others to code as I learn.
              </AboutAuthor>
              <AuthorImage src={Avatar} alt='Author Image' />
            </AuthorInfo>
          </AuthorSection>
        </HomeBodyWrapper>
      </Layout>
    )
  }
}

export default BlogList

export const pageQuery = graphql`
  query blogListQuery($skip: Int!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    posts: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fileAbsolutePath: { regex: "//content/posts//" }
        frontmatter: { published: { ne: false }, unlisted: { ne: true } }
      }
      limit: 4
      skip: $skip
    ) {
      edges {
        node {
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            language
            date
            slug
            cover {
            publicURL
          }
          }
        }
      }
    }
  }
`

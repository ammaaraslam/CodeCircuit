import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import PostsList from '../components/PostsList'
import SEO from '../components/SEO'
import styled from 'styled-components'
import TopicItem from '../components/TopicItem'
import LogoChange from '../components/LogoChange'
import '@fontsource/rubik/800.css'
import '@fontsource/roboto/400.css'
import Button from '../components/Button'
import Bio from '../components/Bio'
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
const HomeHeroLogoContainer = styled.div`
    display: block;
    margin-left: auto;
    margin-right: auto;
`
const HomeHeroLogo = styled.img`
  align-items: center;
  text-decoration: none;
  width: 180px;
  height: 180px;
`

const HomeHeroInfo = styled.div`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    color: var(--color-secondaryColor)

`
const HomeHeroInfoHeading = styled.h1`
    text-decoration: none;
    font-family: 'Rubik';
    padding-bottom: 20px;
    font-size: 4.2rem;
    font-weight: 1700;
    line-height: 1.3cm;
    
`
const HomeHeroInfoPara = styled.p`
    text-decoration: none;
    padding-bottom: 35px;
    font-family: 'Roboto';
    font-size: 2rem;
    font-weight: 700;
    line-height: 0.85cm;
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
    height: 100vh;
    border-radius: 45px;
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding-top: 20px;
    padding-bottom: 15px;

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
`
const TopicsSection = styled.div`
  position: relative;
  display: table;
  width: 100%;
  height: 85vh;
  border-radius: 45px;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding-top: 30px;
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

  @media screen and (max-width: 500px) {
    & {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`

const AuthorSection = styled.div`
  position: relative;
  display: table;
  width: 100%;
  height: 85vh;
  border-radius: 45px;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding-top: 30px;
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
  margin-top: 30px;
`

const AboutAuthor = styled.p`
    text-decoration: none;
    font-family: 'Roboto';
    font-size: 1.5rem;
    line-height: 0.85cm;
    width: 65%;
    color: var(--color-primaryText);
    

`
const AuthorImage = styled.img`
    width: 320px;
    height: 210px;
    border-radius: 20px;
    align-items: right;
    transform: translateX(100px);

`

class BlogList extends React.Component {

  render() {
    const { title, description } = this.props.data.site.siteMetadata
    const posts = this.props.data.posts.edges
    const { pageContext } = this.props

    return (
      <Layout>
        <SEO />
        <HomeHero>
          <HomeHeroInfo>
            <LogoChange type='big' />
            <HomeHeroInfoHeading>
              Code Circuit
            </HomeHeroInfoHeading>
            <HomeHeroInfoPara>
              Programming and Web Development tutorials.
            </HomeHeroInfoPara>
          </HomeHeroInfo>
        </HomeHero>
        <HomeBodyWrapper>
          <RecentPostsSection>
            <SectionTitle>
              Recent Articles
              <AllBtn><Button type="mini-secondary" textColor='var(--color-secondaryText)' to="/tutorials">All Posts ➡ </Button></AllBtn>
            </SectionTitle>
            <RecentPosts>
              <PostsList posts={posts} />
            </RecentPosts>
          </RecentPostsSection>
          <TopicsSection>
            <SectionTitle>
              Popular Topics
              <AllBtn><Button type="mini-secondary" textColor='var(--color-secondaryText)' to="/tags">All Topics ➡ </Button></AllBtn>
            </SectionTitle>
            <Topics>
              <TopicItem type="gatsby" to='/tags/gatsby' fontSize='23px'>Gatsby</TopicItem>
              <TopicItem type="react" to='/tags/react' fontSize='23px'>React</TopicItem>
              <TopicItem type="python" to='/tags/python' fontSize='23px'>Python</TopicItem>
              <TopicItem type="django" to='/tags/django' fontSize='23px'>Django</TopicItem>
              <TopicItem type="css" to='/tags/css' fontSize='23px'>CSS</TopicItem>
              <TopicItem type="git" to='/tags/git' fontSize='23px'>Git</TopicItem>
            </Topics>
          </TopicsSection>
          <AuthorSection>
            <SectionTitle>About The Author</SectionTitle>
            <AuthorInfo>
              <AboutAuthor>
                Hi! I'm Ammaar Aslam, a self taught programmer/developer. I write tutorials on programming and web development.
                Know more about me 👉 Hi! I'm Ammaar Aslam, a self taught programmer/developer. I write tutorials on programming and web development.
                Know more about me 👉 Hi! I'm Ammaar Aslam, a self taught programmer/developer. I write tutorials on programming and web development.
                Know more about me 👉 
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

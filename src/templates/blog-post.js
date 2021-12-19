import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Wrapper from '../components/Wrapper'
import PostHero from '../components/PostHero'
import Article from '../components/Article'
import PrevNextPost from '../components/PrevNextPost'
import SEO from '../components/SEO'
import Disqus from '../components/Disqus'
import styled from 'styled-components'
import '@fontsource/rubik/800.css'
import '@fontsource/roboto/500.css'
import Bio from '../components/Bio'

const PageBody = styled.div`
    background-color: var(--color-darkerBackground);
    width: 75%;
    display: block;
    float: left;
    margin-left: 15px;
    margin-right: auto;
    border-radius: 20px;
    transform: translateY(-55px);
    padding: 15px;
    z-index: 10;
    scroll-behavior: smooth;
`
const AboutAuthor = styled.div`
  background-color: var(--color-darkerBackground);
  width: 75%;
  float: left;
  transform: translateY(10px);
  margin-left: 15px;
  margin-right: auto;
  border-radius: 20px;
  padding: 20px;
  z-index: 10;
`
const Toc = styled.ul`
  position: sticky;
  transform: translateY(-69px);
  top: 230px;
  left: calc(50% + 380px);
  max-height: 70vh;
  background-color: var(--color-darkerBackground);
  border-radius: 20px;
  width: 280px;
  display: flex;
  padding: 15px;
  list-style-type: none;
  text-align: left;
  z-index: 100;
  
  li {
    margin-top: 5px;
    margin-left: 15px;
    
    a {
      text-decoration: none;
      font-size: 1.2rem;
      color: var(--color-primaryText);
      font-family: 'Roboto';
      &:hover {
        cursor: pointer;
        color: var(--color-secondaryColor);
        text-decoration: underline;
        text-decoration-color: var(--color-primaryColor);
        text-decoration-thickness: 2px;
      }
    }
  }
  

`
const SectionTitle = styled.div`
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
const TitleContainer = styled.div`
  background-color: var(--color-darkerBackground);
  width: 75%;
  float: left;
  transform: translateY(75px);
  margin-left: 15px;
  margin-right: auto;
  border-radius: 20px;
  padding: 20px;
  z-index: 10;
`

const TocTtile = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-secondaryText);
  padding-bottom: 7px;
  text-decoration: underline;
  text-decoration-thickness: 1.5px;
  font-family: 'Rubik';
`
const InnerScroll = styled.div`
  overflow: visible;
`
class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.post
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location}>
        <SEO
          title={post.frontmatter.title}
          description={post.excerpt}
          cover={post.frontmatter.cover && post.frontmatter.cover.publicURL}
          imageShare={
            post.frontmatter.imageShare && post.frontmatter.imageShare.publicURL
          }
          lang={post.frontmatter.language}
          translations={post.frontmatter.translations}
          path={post.frontmatter.slug}
          isBlogPost
        />

        <PostHero
          heroImg={post.frontmatter.cover && post.frontmatter.cover.publicURL}
          title={post.frontmatter.title}
          date={post.frontmatter.date}
          tags={post.frontmatter.tags}
        />

        <PageBody>
          <Article post={post} />
        </PageBody>
        {typeof post.tableOfContents.items === 'undefined' ? null : (
          <Toc>
            <InnerScroll>
              <TocTtile>Table of contents</TocTtile>
              {post.tableOfContents.items.map(i => (
                <li key={i.url}>
                  <a href={i.url} key={i.url}>
                    {i.title} 
                  </a>
                </li>
              ))}
            </InnerScroll>
          </Toc>
        )}
        <AboutAuthor>
          <SectionTitle>About The Author</SectionTitle>
          <Bio />
        </AboutAuthor>
        <TitleContainer>
          <SectionTitle>Related Tutorials</SectionTitle>
        </TitleContainer>
        <PrevNextPost previous={previous} next={next} />
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    post: mdx(frontmatter: { slug: { eq: $slug } }) {
      excerpt
      body
      tableOfContents
      frontmatter {
        title
        date
        slug
        language
        tags
        cover {
          publicURL
        }
        imageShare {
          publicURL
        }
        translations {
          language
          link
          hreflang
        }
      }
    }
  }
`

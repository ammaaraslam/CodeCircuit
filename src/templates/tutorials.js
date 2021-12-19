import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import PostsList from '../components/PostsList'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import LeftPageBody from '../components/LeftPageBody'
import RightSection from '../components/RightSection'

const PageBody = styled.div`
  background-color: var(--color-lighterBackground);
  width: 100%;
  content: "";
  clear: both;
  display: table;
  padding-left: 15px;
  padding-right: 15px;
  transform: translateY(-50px);
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  
`

class AllArticlesPage extends React.Component {
    render() {
        const posts = this.props.data.posts.edges

        return (
            <Layout>
                <SEO title={`All Tutorials`} />
                <Hero title="All Tutorials" />
                <PageBody>
                  <LeftPageBody>
                    <PostsList posts={posts} />
                  </LeftPageBody>
                  <RightSection />
                </PageBody>
            </Layout>
        )
    }
}

export default AllArticlesPage
export const tutorialsQuery = graphql`
  query allArticlesQuery($skip: Int!) {
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
      limit: 50
      skip: $skip
    ) {
      edges {
        node {
          excerpt
          timeToRead
          frontmatter {
            title
            date
            tags
            language
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
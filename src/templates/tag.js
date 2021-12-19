import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import PostsList from '../components/PostsList'
import Wrapper from '../components/Wrapper'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
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
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
`
const PageTitle = styled.h1`
  padding-bottom: 10px;
  text-transform: capitalize;
`

class Tags extends React.Component {
  render() {
    const pageTitle = `${this.props.pageContext.tag}`
    const posts = this.props.data.posts.edges

    return (
      <Layout location={this.props.location}>
        <SEO title={`Tutorials on ${this.props.pageContext.tag}`} />
        <Hero title={`Tutorials on ${pageTitle}`} />

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

export default Tags

export const pageQuery = graphql`
  query PostsByTag($tag: String!) {
    posts: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: {
          tags: { eq: $tag }
          published: { ne: false }
          unlisted: { ne: true }
        }
      }
    ) {
      edges {
        node {
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            language
            slug
          }
        }
      }
    }
  }
`

import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import PostsList from '../components/PostsList'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import LeftPageBody from '../components/LeftPageBody'
import RightSection from '../components/RightSection'
import startCase from 'lodash/startCase'

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
  @media screen and (max-width: 768px) {
    & {
      padding-left: 8px;
      padding-right: 8px;
    }
  }

`

class Topics extends React.Component {
  render() {
    const pageTitle = `${this.props.pageContext.topic}`
    const posts = this.props.data.posts.edges

    return (
      <Layout location={this.props.location}>
        <SEO title={`Articles on ${this.props.pageContext.topic}`} />
        <Hero title={`Articles on ${startCase(pageTitle)}`} />

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

export default Topics

export const pageQuery = graphql`
  query PostsByTag($topic: String!) {
    posts: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: {
          topics: { eq: $topic }
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
            topics
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

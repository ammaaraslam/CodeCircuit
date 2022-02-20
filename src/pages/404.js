/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/SEO'
import RelatedPosts from '../components/RelatedPosts'
import Hero from '../components/Hero'
import '@fontsource/roboto/400.css'
import '@fontsource/rubik/800.css'

const Ghost = styled.span`
  display: block;
  line-height: 1.5;
  text-align: center;
  font-size: 7rem;
`

const SubTitle = styled.h2`
  margin-left: 3%;
  text-decoration: none;
  font-size: 3.3rem;
  padding-top: 20px;
  padding-bottom: 10px;
  font-weight: 1500;
  line-height: 1.3cm;
  color: var(--color-secondaryText);
  border-bottom: 2px solid;
  border-image: linear-gradient(120deg, #004a8f 0%, #28d79a 100%);
  border-image-slice: 1;
  font-family: 'Rubik';
`

const NotFoundPageText = styled.p`
  text-align: left;
  line-height: 0.82cm;
  font-family: 'Roboto';
`

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

const NotFoundPage = props => {
  const data = useStaticQuery(graphql`
    query {
      posts: allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: {
          fileAbsolutePath: { regex: "//content/posts//" }
          frontmatter: { published: { ne: false }, unlisted: { ne: true } }
        }
        limit: 10
      ) {
        edges {
          node {
            excerpt
            frontmatter {
              date(formatString: "DD MMMM, YYYY")
              title
              topics
              language
              slug
            }
          }
        }
      }
    }
  `)

  const posts = data.posts.edges

  return (
    <Layout location={props.location} noCover={true}>
      <SEO title="Page Not Found" />
      <Hero
        title='404 Page Not Found'
      />
      <PageBody>
        <Ghost role="img" aria-label="Ghost">
            👻
        </Ghost>
        <NotFoundPageText>
          Looks like you've followed a broken link or entered a URL that doesn't
          exist on this site.
        </NotFoundPageText>
        <SubTitle>Recent Posts</SubTitle>
        <RelatedPosts posts={posts} />
      </PageBody>
    </Layout>
  )
}

export default NotFoundPage

import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Content from '../components/Content'
import Wrapper from '../components/Wrapper'
import Hero from '../components/Hero'
import SEO from '../components/SEO'
import Disqus from '../components/Disqus'
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
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
`

const Page = props => {
  const page = props.data.page

  return (
    <Layout location={props.location}>
      <SEO
        title={page.frontmatter.title}
        description={page.excerpt}
        path={page.frontmatter.slug}
        cover={page.frontmatter.cover && page.frontmatter.cover.publicURL}
      />

      <Hero
        title={page.frontmatter.title}
      />

      <PageBody>
        <LeftPageBody>
          <article>
            <Content content={page.body} date={page.frontmatter.date} />
          </article>
        </LeftPageBody>
        <RightSection />
      </PageBody>
    </Layout>
  )
}

export default Page

export const pageQuery = graphql`
  query($slug: String!) {
    page: mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      excerpt
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        slug
        disqus
        cover {
          publicURL
        }
      }
    }
  }
`

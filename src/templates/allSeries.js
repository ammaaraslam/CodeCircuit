import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import AllSeriesList from '../components/SeriesList'
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
  @media screen and (max-width: 768px) {
    & {
      padding-left: 8px;
      padding-right: 8px;
    }
  }

  
`

class AllSeriesPage extends React.Component {
    render() {
        const allSeries = this.props.data.allSeries.edges

        return (
            <Layout>
                <SEO title={`All Series`} />
                <Hero title="All Series" />
                <PageBody>
                  <LeftPageBody>
                    <AllSeriesList allSeries={allSeries} />
                  </LeftPageBody>
                  <RightSection />
                </PageBody>
            </Layout>
        )
    }
}

export default AllSeriesPage
export const allSeriesQuery = graphql`
  query allSeriesQuery($skip: Int!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    allSeries: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fileAbsolutePath: { regex: "//content/series//" }
        frontmatter: { published: { ne: false }, unlisted: { ne: true } }
      }
      limit: 50
      skip: $skip
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
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
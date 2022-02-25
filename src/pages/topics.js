import React from "react"
import PropTypes from "prop-types"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { graphql } from "gatsby"
import Layout from '../components/layout'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import styled from 'styled-components'
import TopicItem from '../components/TopicItem'
import LeftPageBody from '../components/LeftPageBody'
import RightSection from '../components/RightSection'
import { PageBody } from "../components/PageBody"

const TagList = styled.div`
  padding-top: 45px;
  padding-bottom: 45px;
  padding-left: 10px;
  padding-right: 10px;
  list-style: none;
  display: grid;
  justify-items: center;
  grid-gap: 0;
  row-gap: 100px;
  horizontal-grid-gap: 10px;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 768px) {
    & {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media screen and (max-width: 400px) {
    & {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`

const TopicsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
    <Layout>
        <SEO title={`All Topics`} />
        <Hero title="All Topics" />
        
        <PageBody>
          <LeftPageBody>
            <TagList>
                  {group.map(topic => (
                  <li key={topic.fieldValue}>
                      <TopicItem type={topic.fieldValue} size='20px' fontSize='26px' to={`/topics/${kebabCase(topic.fieldValue)}/`}>
                      {topic.fieldValue} ({topic.totalCount})
                      </TopicItem>
                      {/* <Link to={`/topics/${kebabCase(topic.fieldValue)}/`}>
                      {topic.fieldValue} ({topic.totalCount})
                      </Link> */}
                  </li>
                  ))}
              </TagList>
          </LeftPageBody>
          <RightSection />
        </PageBody>
    </Layout>
      
)

TopicsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TopicsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___topics) {
        fieldValue
        totalCount
      }
    }
    
  }
`
import React from "react"
import PropTypes from "prop-types"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import Layout from '../components/layout'
import PostsList from '../components/PostsList'
import Wrapper from '../components/Wrapper'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import styled from 'styled-components'
import TopicItem from '../components/TopicItem'
import LeftPageBody from '../components/LeftPageBody'
import RightSection from '../components/RightSection'
import { PageBody } from "../components/PageBody"

const TagList = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
  padding-left: 20px;
  padding-right: 20px;
  list-style: none;
  display: grid;
  justify-items: center;
  grid-gap: 100px;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 500px) {
    & {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`

const TagsPage = ({
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
                  {group.map(tag => (
                  <li key={tag.fieldValue}>
                      <TopicItem type={tag.fieldValue} size='20px' fontSize='26px' to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                      {tag.fieldValue} ({tag.totalCount})
                      </TopicItem>
                      {/* <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                      {tag.fieldValue} ({tag.totalCount})
                      </Link> */}
                  </li>
                  ))}
              </TagList>
          </LeftPageBody>
          <RightSection />
        </PageBody>
    </Layout>
      
)

TagsPage.propTypes = {
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

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
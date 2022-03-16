import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import useSiteMetadata from '../hooks/use-site-config'
import TopicItem from './TopicItem'
import Avatar from '../images/avatar.jpg'
import '@fontsource/rubik/800.css'
import '@fontsource/roboto/400.css'
import { graphql, useStaticQuery } from 'gatsby'
import kebabCase from "lodash/kebabCase"


const RightSectionWrapper = styled.aside`
    align-items: center;
    float: right;
    max-width: 28%;
    transform: translateY(-50px);
    display: grid;
    justify-items: center;
    grid-gap: 0;
    row-gap: 20px;
    horizontal-grid-gap: 100px;
    grid-template-columns: repeat(1, 1fr);

    @media screen and (max-width: 768px) {
        & {
            
            width: 95%;
            float: left;
            margin-top: 20px;
        }
    }
`
const RightSectionItem = styled.aside`
    min-width: 100%;
    background-color: var(--color-darkerBackground);
    border: 10px solid var(--color-primaryBackground);
    border-radius: 40px;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 40px;
    padding-left: 15px;
    padding-right: 15px;
`
const AuthorInfo = styled.div`
    padding: 8px;
`

const RightSectionTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--color-secondaryText);
    padding-bottom: 7px;
    text-decoration: underline;
    text-decoration-thickness: 1.5px;
    font-family: 'Rubik';
`

const AuthorImage = styled.img`
    width: 220px;
    height: 135px;
    display: block;
    margin-top: 8px;
    margin-left: 20px;
    border: double 6px transparent;
    border-radius: 20px;
    background-image: linear-gradient(white, white), 
                      linear-gradient(to right, #28d79a, #004a8f);
    background-origin: border-box;
    background-clip: content-box, border-box;

`

const AboutAuthor = styled.p`
    font-size: 1.1rem;
    font-weight: 500;
    margin-top: 8px;
    color: var(--color-primaryText);
    font-family: 'Roboto';
    a {
        color: var(--color-linkColorChange);
        text-decoration: underline;
        text-decoration-color: var(--color-linkColorChangeInverted);
        text-decoration-thickness: 2px;
        &:hover {
            color: var(--color-linkColorChangeInverted);
            text-decoration: underline;
            text-decoration-color: var(--color-linkColorChangeInverted);
            text-decoration-thickness: 3px;
        
        }
      }
      @media screen and (max-width: 768px) {
        & {
          margin-top: -20px;
          margin-left: 0;
          width: 100%;
        }
      }
    
`
const PopularTagsList = styled.div`
    display: grid;
    justify-items: center;
    padding-top: 10px;
    max-width: 70%;
    grid-gap: 0;
    row-gap: 20px;
    horizontal-grid-gap: 100px;
    column-gap: 5px;
    grid-template-columns: repeat(3, 1fr);
    list-style: none;
`

const RecentArticles = styled.li`
    max-width: 300px;
    padding-top: 2px;
    padding-bottom: 2px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    list-style-type: none;

`
const RecentArticlesLink = styled(Link)`
    font-weight: 500;
    font-size: 1.2rem;
    margin-left: 10px;
    font-family: 'Roboto';
    color: var(--color-linkColorChange);
    text-decoration: underline;
    text-decoration-color: var(--color-linkColorChangeInverted);
    text-decoration-thickness: 2px;
    &:hover {
        color: var(--color-linkColorChangeInverted);
        text-decoration: underline;
        text-decoration-color: var(--color-linkColorChangeInverted);
        text-decoration-thickness: 3px;
    
    }
`


const RightSection = () => {
    const data = useStaticQuery(graphql`
    query {
        topics: allMarkdownRemark(limit: 2000) {
            group(field: frontmatter___topics) {
              fieldValue
              totalCount
            }
          }
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
    const { authorDescription } = useSiteMetadata()
    const group = data.topics.group
    const posts = data.posts.edges
    return (
        <RightSectionWrapper>
            <RightSectionItem>
                <RightSectionTitle>About The Author</RightSectionTitle>
                <AuthorInfo>
                    <AuthorImage src={Avatar} alt='Author Image' />
                    <AboutAuthor dangerouslySetInnerHTML={{ __html: authorDescription }} />
                </AuthorInfo>
                <RightSectionTitle>Recent Articles</RightSectionTitle>
                {posts.map(post => {
                    const title = post.node.frontmatter.title
                    const slug = post.node.frontmatter.slug
                    return (
                    <RecentArticles key={slug}>
                        <RecentArticlesLink to={`/article/${slug}`}>
                            {title}
                        </RecentArticlesLink>
                    </RecentArticles>
                    )
                })}
                <br />
                <RightSectionTitle>Popular Topics</RightSectionTitle>
                <PopularTagsList>
                    {group.map(topic => (
                        <li key={topic.fieldValue}>
                            <TopicItem type={topic.fieldValue} size='5px' border='10px' fontSize='16px' to={`/topics/${kebabCase(topic.fieldValue)}/`}>
                            {topic.fieldValue}
                            </TopicItem>
                        </li>
                        ))} 
                </PopularTagsList>
            </RightSectionItem>
        </RightSectionWrapper>
    )
}

export default RightSection

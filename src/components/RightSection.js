import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import useSiteMetadata from '../hooks/use-site-config'
import TopicItem from './TopicItem'
import Avatar from '../images/avatar.jpg'
import '@fontsource/rubik/800.css'
import '@fontsource/roboto/400.css'

const RightSectionWrapper = styled.aside`
    background-color: var(--color-darkerBackground);
    border-radius: 20px;
    align-items: center;
    float: right;
    width: 26%;
    padding: 15px;
    transform: translateY(-50px);
    /* left: calc(50% + 380px);
    max-height: 100vh;
    top: 230px;
    position: sticky; */
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
    border-radius: 20px;
    margin-left: 40px;

`

const AboutAuthor = styled.p`
    font-size: 1.1rem;
    font-weight: 500;
    margin-top: 8px;
    color: var(--color-primaryText);
    font-family: 'Roboto';
`
const PopularTagsList = styled.div`
    padding: 8px;
    max-width: 200px;

`
const PopularTag = styled.div`
    display: inline;
    margin-right: 4px; 
`

const RecentArticles = styled.div`
    padding: 8px;
    
    
`
const RecentArticlesLink = styled(Link)`
    color: var(--color-primaryText);
    font-weight: 500;
    font-size: 1.2rem;
    margin-left: 10px;
    font-family: 'Roboto';

    &:hover {
        color: var(--color-primaryColor);
        cursor: pointer;
        text-decoration: underline;

    }
`


const RightSection = () => {
    const { authorAvatar, authorName, authorDescription } = useSiteMetadata()
    return (
        <RightSectionWrapper>
            <AuthorInfo>
                <RightSectionTitle>About The Author</RightSectionTitle>
                <AuthorImage src={Avatar} alt='Author Image' />
                <AboutAuthor dangerouslySetInnerHTML={{ __html: authorDescription }} />
            </AuthorInfo>
            <RecentArticles>
                <RightSectionTitle>Recent Tutorials</RightSectionTitle>
                <RecentArticlesLink>Link to the first tutorial</RecentArticlesLink><br></br>
                <RecentArticlesLink>Link Onwrgwrqwrhgw e ew re</RecentArticlesLink><br></br>
                <RecentArticlesLink>Link Oneegqaegqe qefgqeg</RecentArticlesLink><br></br>
            </RecentArticles>
            <PopularTagsList>
                <RightSectionTitle>Popular Topics</RightSectionTitle><br></br>
                <PopularTag>
                    <TopicItem type='gatsby' size='5px' border='10px' fontSize='15px' to={`/tags/gatsby`}>gatsby</TopicItem>
                </PopularTag>
                <PopularTag>
                    <TopicItem type='react' size='5px' border='10px' fontSize='15px' to={`/tags/react`}>react</TopicItem>
                </PopularTag>
                <PopularTag>
                    <TopicItem type='python' size='5px' border='10px' fontSize='15px' to={`/tags/python`}>python</TopicItem>
                </PopularTag>
                <PopularTag>
                    <TopicItem type='git' size='5px' border='10px' fontSize='15px' to={`/tags/git`}>git</TopicItem>
                </PopularTag>
                <PopularTag>
                    <TopicItem type='django' size='5px' border='10px' fontSize='15px' to={`/tags/django`}>django</TopicItem>
                </PopularTag><br></br><br></br>
                <PopularTag>
                    <TopicItem type='css' size='5px' border='10px' fontSize='15px' to={`/tags/css`}>CSS</TopicItem>
                </PopularTag>
                <PopularTag>
                    <TopicItem type='netlify' size='5px' border='10px' fontSize='15px' to={`/tags/netlify`}>Netlify</TopicItem>
                </PopularTag>
            </PopularTagsList>
        </RightSectionWrapper>
    )
}

export default RightSection

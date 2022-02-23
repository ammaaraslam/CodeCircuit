import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import useSiteMetadata from '../hooks/use-site-config'
import TopicItem from './TopicItem'
import Avatar from '../images/avatar.jpg'
import '@fontsource/rubik/800.css'
import '@fontsource/roboto/400.css'

const RightSectionWrapper = styled.aside`
    align-items: center;
    float: right;
    width: 26%;
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
    border-radius: 20px;
    margin-left: 20px;

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
    grid-gap: 0;
    row-gap: 20px;
    horizontal-grid-gap: 100px;
    grid-template-columns: repeat(4, 1fr);

`
const PopularTag = styled.div`
    display: inline;
    margin-right: 3px; 
`

const RecentArticles = styled.div`
    padding: 8px;
    
    
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
    const { authorDescription } = useSiteMetadata()
    return (
        <RightSectionWrapper>
            <RightSectionItem>
                <RightSectionTitle>About The Author</RightSectionTitle>
                <AuthorInfo>
                    <AuthorImage src={Avatar} alt='Author Image' />
                    <AboutAuthor dangerouslySetInnerHTML={{ __html: authorDescription }} />
                </AuthorInfo>
                <RightSectionTitle>Recent Tutorials</RightSectionTitle>
                <RecentArticles>
                    <RecentArticlesLink to='/tutorial'>Link to the first tutorial</RecentArticlesLink><br></br>
                    <RecentArticlesLink to='/tutorial'>Link Onwrgwrqwrhgw e ew re</RecentArticlesLink><br></br>
                    <RecentArticlesLink to='/tutorial'>Link Oneegqaegqe qefgqeg</RecentArticlesLink><br></br>
                </RecentArticles>
                <RightSectionTitle>Popular Topics</RightSectionTitle><br></br>
                <PopularTagsList>
                    <PopularTag>
                        <TopicItem type='gatsby' size='5px' border='10px' fontSize='15px' to={`/topics/gatsby`}>gatsby</TopicItem>
                    </PopularTag>
                    <PopularTag>
                        <TopicItem type='react' size='5px' border='10px' fontSize='15px' to={`/topics/react`}>react</TopicItem>
                    </PopularTag>
                    <PopularTag>
                        <TopicItem type='python' size='5px' border='10px' fontSize='15px' to={`/topics/python`}>python</TopicItem>
                    </PopularTag>
                    <PopularTag>
                        <TopicItem type='git' size='5px' border='10px' fontSize='15px' to={`/topics/git`}>git</TopicItem>
                    </PopularTag>
                    <PopularTag>
                        <TopicItem type='django' size='5px' border='10px' fontSize='15px' to={`/topics/django`}>django</TopicItem>
                    </PopularTag>
                    <PopularTag>
                        <TopicItem type='css' size='5px' border='10px' fontSize='15px' to={`/topics/css`}>CSS</TopicItem>
                    </PopularTag>
                    <PopularTag>
                        <TopicItem type='netlify' size='5px' border='10px' fontSize='15px' to={`/topics/netlify`}>Netlify</TopicItem>
                    </PopularTag>
                </PopularTagsList>
            </RightSectionItem>
        </RightSectionWrapper>
    )
}

export default RightSection

/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/SEO'
import '@fontsource/roboto/400.css'
import '@fontsource/rubik/800.css'
import Button from '../components/Button'

const PageBody = styled.div`
  background-color: var(--color-darkerBackground);
  width: 100%;
  height: 100vh;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  z-index: 10;
  text-align: center;
`
const NotFoundPageInfo = styled.div`
  margin-top: 100px;
  padding: 30px;
`

const LostGif = styled.div`
  display: block;
  text-align: center;
  padding: 10px;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  
  img {
    border: double 6px transparent;
    border-radius: 20px;
    background-image: linear-gradient(white, white), 
                      linear-gradient(to right, #28d79a, #004a8f);
    background-origin: border-box;
    background-clip: content-box, border-box;

  }

`

const ButtonContainer = styled.h2`
  padding-top: 20px;
  padding-bottom: 10px;
  
`

const NotFoundPageText = styled.p`
  color: var(--color-secondaryText);
  text-decoration: none;
  font-family: 'Rubik';
  padding-bottom: 20px;
  align-items: center;
  font-size: 4.3rem;
  text-transform: uppercase;
  font-weight: 1700;
  line-height: 2cm;
  @media screen and (max-width: 768px) {
    line-height: 1.4cm;
    font-size: 2.7rem;
  }
`
const NotFoundPageTextSpan = styled.span`
  padding: 10px;
  text-decoration: none;
  font-family: 'Rubik';
  padding-bottom: 40px;
  align-items: center;
  font-size: 4.3rem;
  text-transform: uppercase;
  font-weight: 1700;
  line-height: 2cm;
  background: linear-gradient(120deg, #004a8f 0%, #28d79a 100%);
  -webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
  @media screen and (max-width: 768px) {
      padding: 5px;
      margin-left: -5px;
      line-height: 1.4cm;
      font-size: 2.7rem;
    }
`



const NotFoundPage = props => {

  return (
    <Layout location={props.location} noCover={true}>
      <SEO title="Page Not Found" />
      <PageBody>
        <NotFoundPageInfo>
          <LostGif>
            <img src='https://media.giphy.com/media/d2jjuAZzDSVLZ5kI/giphy-downsized.gif' width='400px' height='400px' alt='404 lost gif' />
          </LostGif>
          <NotFoundPageTextSpan>Uh Oh!</NotFoundPageTextSpan>
          <NotFoundPageText>
            Looks like you're lost
          </NotFoundPageText>
          <ButtonContainer>
            <Button type='big-primary' to='/'>Go back Home</Button>
          </ButtonContainer>
        </NotFoundPageInfo>
      </PageBody>
    </Layout>
  )
}

export default NotFoundPage

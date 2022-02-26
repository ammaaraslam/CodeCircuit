import React from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { Link } from 'gatsby'
import '@fontsource/rubik/700.css'
import '@fontsource/roboto/400.css'

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
  transition: all 0.2s;
  
}

img {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  border: 0;
}

a {
  text-decoration: none;
  color: var(--color-primaryText);
}

hr {
  border: 0;
  border-top: 1px solid var(--color-primaryBackground);
  margin: 50px 0 5px 0;
}

ul,
ol {
  padding-left: 2em;
  margin: 1em 0 0 0;
}

*::selection {
  background-color: var(--color-highlightColorChange);

}
*::-webkit-scrollbar {
  	width: 12px;
}

*::-webkit-scrollbar-track {
  background-color: var(--color-primaryScrollbar); 
  }
*::-webkit-scrollbar-track:hover {
  background-color: var(--color-secondaryScrollbar); 
  }
 
*::-webkit-scrollbar-thumb {
  background: linear-gradient(120deg, #28d79a 0%, #004a8f 100%); 
  border-radius: 10px;
}

*::-webkit-scrollbar-thumb:hover {
  	background: linear-gradient(120deg, #28d79a 0%, #004a8f 100%); 
}	
`
export const StyledLink = styled(Link)`
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

export const Text = styled.p`
  line-height: 1.6;
  margin: 1em 0 0 0;
`

export const Bull = styled.span`
  display: inline-block;
  color: var(--color-linkColorChange);
  font-family: 'Roboto';
  margin: 0 4px;
  &::before {
    content: '•';
  }
`

const ReadingTimeContainer = styled.span`
  text-transform: capitalize;
  font-family: 'Roboto';
`

export const ReadingTime = props => {
  return <ReadingTimeContainer>{props.min} min read</ReadingTimeContainer>
}

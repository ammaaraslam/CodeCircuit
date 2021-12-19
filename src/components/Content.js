import React from 'react'
import styled from 'styled-components'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'
import '@fontsource/rubik/700.css'
import '@fontsource/roboto/400.css'

const ContentBody = styled.div`
  line-height: 1.6;
  font-family: 'Roboto';

  & > h2 {
    color: var(--color-primaryColor);
    scroll-margin-top: 5rem;
    font-family: 'Rubik';
    font-size: 2.1rem;
    text-decoration: underline;
    text-decoration-color: var(--color-secondaryColor);
  }

  & > h3 {
    padding-top: 3rem;
    color: var(--color-secondaryText);
    font-family: 'Rubik';
    font-size: 1.8rem;
  }

  & > p {
    margin: 1em 0 0 0;
    color: var(--color-primaryText);
    font-family: 'Roboto';
    font-size: 1.2rem;
  }

  & a {
    padding-left: 2px;
    padding-right: 2px;
    background-image: linear-gradient(120deg, #FA8072 0%, #FA8072 100%);
    background-repeat: no-repeat;
    background-size: 100% 0.2em;
    background-position: 0 88%;
    transition: background-size 0.25s ease-in;

    &:hover {
      background-size: 100% 88%;
    }


    &.anchor,
    &.gatsby-resp-image-link {
      box-shadow: none;
      padding-top: 90px;
    }
    &.anchor {
      font-size: 1.1rem;
      color: #FA8072;

    }
  }

  h1 .anchor svg,
  h2 .anchor svg,
  h3 .anchor svg,
  h4 .anchor svg,
  h5 .anchor svg,
  h6 .anchor svg {
    visibility: hidden;
    margin-left: -25px;
    
  }

  h1:hover .anchor svg,
  h2:hover .anchor svg,
  h3:hover .anchor svg,
  h4:hover .anchor svg,
  h5:hover .anchor svg,
  h6:hover .anchor svg,
  h1 .anchor:focus svg,
  h2 .anchor:focus svg,
  h3 .anchor:focus svg,
  h4 .anchor:focus svg,
  h5 .anchor:focus svg,
  h6 .anchor:focus svg {
    visibility: visible;
  }

  & > blockquote {
    box-sizing: border-box;
    background-color: var(--color-lighterBackground);
    border-left: 15px solid var(--color-secondaryColor);
    margin: 30px 0px;
    padding: 5px 20px;
    border-radius: 2px 13px 13px 2px;;
    font-family: 'Rubik';
  }

  & > blockquote p {
    margin: 0.8em 0;
    font-style: italic;
    font-family: 'Roboto';
    color: var(--color-primaryText)
  }

  & .gatsby-highlight {
    border-radius: 5px;
    font-size: 15px;
    line-height: 1.7;
    border-radius: 10px;
    overflow: auto;
    tab-size: 1.5em;
    margin: 1.5em -1.5em;

    @media (max-width: 500px) {
      border-radius: 0;
      margin-left: -25px;
      margin-right: -25px;
    }
  }

  & .gatsby-highlight > pre {
    border: 0;
    margin: 0;
    padding: 1;
  }

  & .gatsby-highlight pre[class*='language-'] {
    float: left;
    min-width: 100%;
  }

  & .gatsby-highlight-code-line {
    background-color: var(--color-darkBlue);
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 0.75em;
    border-left: 0.25em solid var(--color-yellow);
  }

  & h1 > code.language-text,
  & h2 > code.language-text,
  & h3 > code.language-text,
  & h4 > code.language-text,
  & h5 > code.language-text,
  & h6 > code.language-text,
  & a > code.language-text,
  & p > code.language-text,
  & li > code.language-text,
  & em > code.language-text,
  & strong > code.language-text {
    background: var(--color-lighterBackground);
    color: var(--color-primaryText);
    padding: 4px 6px;
    font-size: 0.94em;
    border-radius: 0.3rem;
    word-wrap: break-word;
  }

  & code {
    word-wrap: break-word;
  }

  & table {
    margin-top: 1em;
    margin-bottom: 1em;
    overflow: hidden;
    border-radius: 20px;
    margin-left: 35%;

    & th,
    & td {
      padding: 1rem;
      background-color: var(--color-lighterBackground);
    }
    & th {
      color: var(--color-secondaryColor);
      font-family: 'Rubik';
      font-size: 1.2rem;
    }
    & td {
      color: var(--color-secondaryText);
      font-family: 'Roboto';
      font-size: 1rem;
    }
    & tr {
      border-bottom: 2px solid var(--color-darkerBackground);
    }
    & tbody tr:last-child {
      border-bottom: none;
    }
  }
`

class Content extends React.Component {
  render() {
    const { content, date, tags, translations } = this.props

    return (
      <section>
        <ContentBody>
          <MDXRenderer>{content}</MDXRenderer>
        </ContentBody>
      </section>
    )
  }
}

export default Content

import React, { useState } from 'react';

import styled from 'styled-components'
import {Link} from 'gatsby'
import '@fontsource/rubik/700.css'

const Topic = styled(Link)`
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  text-transform: uppercase;
  color: var(--color-secondaryText);
  font-family: 'Rubik';
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  align-self: center;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  &:hover {
    transform: scale(1.04);
  }


`

const TopicItem = ({children, onClick, fontSize, to, tagName, disabled, size, type,  style, border, ...props}) => {
  const [
    hover,
    setHover
  ] = useState(false);
  const toggleHover = () => {
      setHover(!hover);
  };
  const defaultColor = {
    backgroundColor : 'var(--color-secondaryColor)',
    border : '3px solid var(--color-secondaryColor)',
    borderRadius : border,
    color: 'var(--color-darkerBackground)',
    fontSize : fontSize,
    padding : size,
    
  }
  const gatsby = {
    backgroundColor : 'var(--color-gatsbyColor)',
    border : '3px solid var(--color-gatsbyColor)',
    borderRadius : border,
    color: 'var(--color-darkerBackground)',
    fontSize : fontSize,
    padding : size,
    
  }
  
  const react = {
    backgroundColor : 'var(--color-reactColor)',
    border : '3px solid var(--color-reactColor)',
    borderRadius : border,
    color: 'var(--color-darkerBackground)',
    fontFamily: 'Rubik',
    
    fontSize : fontSize,
    padding : size,
  }
  const python = {
    backgroundColor : 'var(--color-pythonColor)',
    borderRadius : border,
    border : '3px solid var(--color-pythonColor)',
    fontSize : fontSize,
    
    fontFamily: 'Rubik',
    color: 'var(--color-darkerBackground)',
    padding : size,
    
  }
  const js = {
    backgroundColor : 'var(--color-jsColor)',
    borderRadius : border,
    
    fontSize : fontSize,
    fontFamily: 'Rubik',
    border : '3px solid var(--color-jsColor)',
    padding : size,
    color: 'var(--color-darkerBackground)',
  }
  const html = {
    backgroundColor : 'var(--color-htmlColor)',
    borderRadius : border,
    
    border : '3px solid var(--color-htmlColor)',
    fontSize : fontSize,
    color: 'var(--color-darkerBackground)',
    fontFamily: 'Rubik',
    padding : size,
    textTransform : 'uppercase'
  }
  const css= {
    backgroundColor : 'var(--color-cssColor)',
    padding : size,
    
    fontFamily: 'Rubik',
    textTransform : 'uppercase',
    color: 'var(--color-darkerBackground)',
    fontSize : fontSize,
    border : '3px solid var(--color-cssColor)',
    borderRadius : border,
  }
  const django = {
    backgroundColor : 'var(--color-djangoColor)',
    fontSize : fontSize,
    
    color: 'var(--color-darkerBackground)',
    padding : size,
    fontFamily: 'Rubik',
    borderRadius : border,
    border : '3px solid var(--color-djangoColor)',
  }
  const flask = {
    backgroundColor : 'var(--color-flaskColor)',
    fontSize : fontSize,
    
    fontFamily: 'Rubik',
    color: 'var(--color-darkerBackground)',
    padding : size,
    borderRadius : border,
    border : '3px solid var(--color-flaskColor)',
  }
  const nodejs = {
    backgroundColor : 'var(--color-nodejsColor)',
    fontSize : fontSize,
    
    fontFamily: 'Rubik',
    color: 'var(--color-darkerBackground)',
    borderRadius : border,
    border : '3px solid var(--color-nodejsColor)',
    padding : size,
  }
  const flutter = {
    backgroundColor : 'var(--color-flutterColor)',
    fontSize : fontSize,
    
    fontFamily: 'Rubik',
    color: 'var(--color-darkerBackground)',
    borderRadius : border,
    border : '3px solid var(--color-flutterColor)',
    padding : size,
  }
  const graphql = {
    backgroundColor : 'var(--color-graphqlColor)',
    fontSize : fontSize,
    
    fontFamily: 'Rubik',
    color: 'var(--color-darkerBackground)',
    borderRadius : border,
    border : '3px solid var(--color-graphqlColor)',
    padding : size,
  }
  const netlify = {
    backgroundColor : 'var(--color-netlifyColor)',
    borderRadius : border,
    
    fontSize : fontSize,
    fontFamily: 'Rubik',
    color: 'var(--color-darkerBackground)',
    border : '3px solid var(--color-netlifyColor)',
    padding : size,
  }
  const git = {
    backgroundColor : 'var(--color-gitColor)',
    fontSize : fontSize,
    
    fontFamily: 'Rubik',
    borderRadius : border,
    color: 'var(--color-darkerBackground)',
    border : '3px solid var(--color-gitColor)',
    padding : size,
  }
  const sass = {
    backgroundColor : 'var(--color-sassColor)',
    borderRadius : border,
    
    fontSize : fontSize,
    fontFamily: 'Rubik',
    color: 'var(--color-darkerBackground)',
    padding : size,
    border : '3px solid var(--color-sassColor)',
  }
  const github = {
    backgroundColor : 'var(--color-githubColor)',
    fontSize : fontSize,
    
    fontFamily: 'Rubik',
    borderRadius : border,
    color: 'var(--color-darkerBackground)',
    border : '3px solid var(--color-githubColor)',
    padding : size,
  }
  const defaultColorHover = {
    border : '3px solid var(--color-secondaryColor)',
    backgroundColor: 'transparent',
    borderRadius : border,
    
    fontSize : fontSize,
    fontFamily: 'Rubik',
    color: 'var(--color-secondaryColor)',
    padding : size,
    
  }
  const vscode = {
    backgroundColor : 'var(--color-vscodeColor)',
    fontSize : fontSize,
    
    fontFamily: 'Rubik',
    borderRadius : border,
    color: 'var(--color-darkerBackground)',
    border : '3px solid var(--color-vscodeColor)',
    padding : size,
  }
  const vscodeHover = {
    border : '3px solid var(--color-vscodeColor)',
    backgroundColor: 'transparent',
    borderRadius : border,
    
    fontSize : fontSize,
    fontFamily: 'Rubik',
    color: 'var(--color-vscodeColor)',
    padding : size,
    
  }
  const extensions = {
    backgroundColor : 'var(--color-extensionsColor)',
    fontSize : fontSize,
    
    fontFamily: 'Rubik',
    borderRadius : border,
    color: 'var(--color-darkerBackground)',
    border : '3px solid var(--color-extensionsColor)',
    padding : size,
  }
  const extensionsHover = {
    border : '3px solid var(--color-extensionsColor)',
    backgroundColor: 'transparent',
    borderRadius : border,
    
    fontSize : fontSize,
    fontFamily: 'Rubik',
    color: 'var(--color-extensionsColor)',
    padding : size,
    
  }
  const webScraping = {
    backgroundColor : 'var(--color-webScrapingColor)',
    fontSize : fontSize,
    
    fontFamily: 'Rubik',
    borderRadius : border,
    color: 'var(--color-darkerBackground)',
    border : '3px solid var(--color-webScrapingColor)',
    padding : size,

  }
  const miscellaneous = {
    backgroundColor : 'var(--color-miscellaneousColor)',
    fontSize : fontSize,
    
    fontFamily: 'Rubik',
    borderRadius : border,
    color: 'var(--color-darkerBackground)',
    border : '3px solid var(--color-miscellaneousColor)',
    padding : size,

  }
  const webScrapingHover = {
    backgroundColor : 'var(--color-webScrapingColor)',
    fontSize : fontSize,
    
    fontFamily: 'Rubik',
    borderRadius : border,
    color: 'var(--color-darkerBackground)',
    border : '3px solid var(--color-webScrapingColor)',
    padding : size,
  }
  const gatsbyHover = {
    border : '3px solid var(--color-gatsbyColor)',
    backgroundColor: 'transparent',
    borderRadius : border,
    
    fontSize : fontSize,
    fontFamily: 'Rubik',
    color: 'var(--color-gatsbyColor)',
    padding : size,
  }
  const reactHover = {
    border : '3px solid var(--color-reactColor)',
    borderRadius : border,
    fontSize : fontSize,
    fontFamily: 'Rubik',
    color: 'var(--color-reactColor)',
    padding : size,
    backgroundColor: 'transparent',
  }
  const pythonHover = {
    border : '3px solid var(--color-pythonColor)',
    backgroundColor: 'transparent',
    borderRadius : border,
    fontSize : fontSize,
    fontFamily: 'Rubik',
    color: 'var(--color-pythonColor)',
    padding : size,
    
  }
  const jsHover = {
    border : '3px solid var(--color-jsColor)',
    backgroundColor: 'transparent',
    borderRadius : border,
    color: 'var(--color-jsColor)',
    fontSize : fontSize,
    fontFamily: 'Rubik',
    padding : size,
  }
  const htmlHover = {
    border : '3px solid var(--color-htmlColor)',
    borderRadius : border,
    color: 'var(--color-htmlColor)',
    fontSize : fontSize,
    fontFamily: 'Rubik',
    padding : size,
    backgroundColor: 'transparent',
  }
  const cssHover = {
    border : '3px solid var(--color-cssColor)',
    borderRadius : border,
    color: 'var(--color-cssColor)',
    fontSize : fontSize,
    fontFamily: 'Rubik',
    padding : size,
    backgroundColor: 'transparent',
  }
  const djangoHover = {
    border : '3px solid var(--color-djangoColor)',
    borderRadius : border,
    color: 'var(--color-djangoColor)',
    fontSize : fontSize,
    fontFamily: 'Rubik',
    padding : size,
    backgroundColor: 'transparent',
  }
  const flaskHover = {
    border : '3px solid var(--color-flaskColor)',
    borderRadius : border,
    fontSize : fontSize,
    fontFamily: 'Rubik',
    color: 'var(--color-flaskColor)',
    padding : size,
    backgroundColor: 'transparent',
  }
  const nodejsHover = {
    borderRadius : border,
    fontSize : fontSize,
    fontFamily: 'Rubik',
    padding : size,
    border : '3px solid var(--color-nodejsColor)',
    backgroundColor: 'transparent',
    color: 'var(--color-nodejsColor)',
  }
  const flutterHover = {
    border : '3px solid var(--color-flutterColor)',
    borderRadius : border,
    fontSize : fontSize,
    fontFamily: 'Rubik',
    padding : size,
    backgroundColor: 'transparent',
    color: 'var(--color-flutterColor)',
  }
  const graphqlHover = {
    border : '3px solid var(--color-graphqlColor)',
    backgroundColor: 'transparent',
    borderRadius : border,
    fontSize : fontSize,
    fontFamily: 'Rubik',
    padding : size,
    color: 'var(--color-graphqlColor)',
  }
  const netlifyHover = {
    border : '3px solid var(--color-netlifyColor)',
    backgroundColor: 'transparent',
    borderRadius : border,
    fontSize : fontSize,
    fontFamily: 'Rubik',
    padding : size,
    color: 'var(--color-netlifyColor)',
  }
  const gitHover = {
    border : '3px solid var(--color-gitColor)',
    backgroundColor: 'transparent',
    borderRadius : border,
    fontSize : fontSize,
    fontFamily: 'Rubik',
    color: 'var(--color-gitColor)',
    padding : size,
  }
  const sassHover = {
    border : '3px solid var(--color-sassColor)',
    borderRadius : border,
    fontSize : fontSize,
    fontFamily: 'Rubik',
    padding : size,
    backgroundColor: 'transparent',
    color: 'var(--color-sassColor)',
  }
  const githubHover = {
    border : '3px solid var(--color-githubColor)',
    borderRadius : border,
    fontSize : fontSize,
    fontFamily: 'Rubik',
    padding : size,
    backgroundColor: 'transparent',
    color: 'var(--color-githubColor)',
  }

  const commonStyles = {
    backgroundColor : 'var(--color-secondaryColor)',
    borderRadius : border,
    padding : size,
    fontFamily: 'Rubik',
    color           : 'white'
  };
  let tagStyle;
    switch (type) {
      case 'extensions':
          tagStyle = extensions;
        break;
      case 'miscellaneous':
          tagStyle = miscellaneous;
        break;

      case 'web-scraping':
          tagStyle = webScraping;
        break;
      case 'vs-code':
          tagStyle = vscode;
        break;
      case 'gatsby':
          tagStyle = gatsby;
        break;
      case 'react':
          tagStyle = react;
        break;
      case 'python':
          tagStyle = python;
        break;
      case 'js':
          tagStyle = js;
          break;
        case 'html':
            tagStyle = html;
          break;
        case 'css':
            tagStyle = css;
          break;
        case 'django':
            tagStyle = django;
          break;
        case 'flask':
            tagStyle = flask;
          break;
        case 'nodejs':
            tagStyle = nodejs;
          break;
        case 'flutter':
            tagStyle = flutter;
          break;
        case 'graphql':
            tagStyle = graphql;
          break;
        case 'netlify':
            tagStyle = netlify;
          break;
        case 'git':
            tagStyle = git;
          break;
        case 'github':
            tagStyle = github;
          break;
        case 'sass':
            tagStyle = sass;
          break;
        case 'gatsby-inverted':
            tagStyle = gatsbyHover;
          break;
        case 'react-inverted':
            tagStyle = reactHover;
          break;
        case 'python-inverted':
              tagStyle = pythonHover;
            break;
          case 'js-inverted':
              tagStyle = jsHover;
              break;
            case 'html-inverted':
                tagStyle = htmlHover;
              break;
            case 'css-inverted':
                tagStyle = cssHover;
              break;
            case 'django-inverted':
                tagStyle = djangoHover;
              break;
            case 'flask-inverted':
                tagStyle = flaskHover;
              break;
            case 'nodejs-inverted':
                tagStyle = nodejsHover;
              break;
            case 'flutter-inverted':
                tagStyle = flutterHover;
              break;
            case 'graphql-inverted':
                tagStyle = graphqlHover;
              break;
            case 'netlify-inverted':
                tagStyle = netlifyHover;
              break;
            case 'git-inverted':
                tagStyle = gitHover;
              break;
            case 'github-inverted':
                tagStyle = githubHover;
              break;
            case 'sass-inverted':
                tagStyle = sassHover;
              break;
        default:
                tagStyle = defaultColor;
              break;
      }
      return (
        <Topic
             style={

                     disabled ? { ...commonStyles, ...tagStyle, ...style } :
                     { ...commonStyles, ...tagStyle, ...style }
             }
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            {...props}
            type="button"
            to={to}
            onClick={

                    !disabled ? onClick :
                    () => {}
            }
        >
            {children || 'button'}
        </Topic>
    );
}
export default TopicItem;

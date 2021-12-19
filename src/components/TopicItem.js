import React, { useState } from 'react';

import styled from 'styled-components'
import {Link} from 'gatsby'
import '@fontsource/rubik/700.css'

const Topic = styled(Link)`
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  text-transform: capitalize;
  color: var(--color-secondaryText);
  font-family: 'Rubik';

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
    backgroundColor : 'var(--color-primaryColor)',
    padding : size,
    borderRadius : border,
    fontSize : fontSize,
    color: 'var(--color-darkerBackground)',
    fontFamily: 'Rubik',
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
  const outlineStyles = {
      border          : `1px solid var(--color-primaryColor)`,
      color           : 'var(--color-primaryColor)',
      backgroundColor : 'white'
  };
  const outlineHoverStyle = {
      color           : 'white',
      backgroundColor : 'var(--color-primaryColor)'
  };

  const roundedStyle = {
      backgroundColor : 'var(--color-primaryColor)',
      color           : 'white',
      borderRadius    : '25px'
  };
  const disabledStyle = {
      cursor          : 'default',
      backgroundColor : 'var(--color-primaryColor)',
      color           : 'white',
      opacity         : 0.4
  };

  let tagStyle;
    switch (type) {
      case 'gatsby':
        if (hover) {
          tagStyle = gatsby;
        }
        else {
          tagStyle = gatsbyHover;
        }
        break;
      case 'react':
        if (hover) {
          tagStyle = react;
        }
        else {
          tagStyle = reactHover;
        }
        break;
      case 'python':
        if (hover) {
          tagStyle = python;
        }
        else {
          tagStyle = pythonHover;
        }
        break;
      case 'js':
        if (hover) {
          tagStyle = js;
        }
        else {
          tagStyle = jsHover;
          }
          break;
        case 'html':
          if (hover) {
            tagStyle = html;
            }
          else {
            tagStyle = htmlHover;
            }
          break;
        case 'css':
          if (hover) {
            tagStyle = css;
            }
          else {
            tagStyle = cssHover;
            }
          break;
        case 'django':
          if (hover) {
            tagStyle = django;
          }
          else {
            tagStyle = djangoHover;
          }
          break;
        case 'flask':
          if (hover) {
            tagStyle = flask;
          }
          else {
            tagStyle = flaskHover;
          }
          break;
        case 'nodejs':
          if (hover) {
            tagStyle = nodejs;
          }
          else {
            tagStyle = nodejsHover;
            }
          break;
        case 'flutter':
          if (hover) {
            tagStyle = flutter;
          }
          else {
            tagStyle = flutterHover;
          }
          break;
        case 'graphql':
          if (hover) {
            tagStyle = graphql;
          }
          else {
            tagStyle = graphqlHover;
            }
          break;
        case 'netlify':
          if (hover) {
            tagStyle = netlify;
          }
          else {
            tagStyle = netlifyHover;
          }
          break;
        case 'git':
          if (hover) {
            tagStyle = git;
          }
          else {
            tagStyle = gitHover;
          }
          break;
        case 'github':
          if (hover) {
            tagStyle = github;
          }
          else {
            tagStyle = githubHover;
          }
          break;
        case 'sass':
          if (hover) {
            tagStyle = sass;
        }
          else {
            tagStyle = sassHover;
          }
          break;
          case 'gatsby-inverted':
            if (hover) {
              tagStyle = gatsbyHover;
            }
            else {
              tagStyle = gatsby;
            }
            break;
          case 'react-inverted':
            if (hover) {
              tagStyle = reactHover;
            }
            else {
              tagStyle = react;
            }
            break;
          case 'python-inverted':
            if (hover) {
              tagStyle = pythonHover;
            }
            else {
              tagStyle = python;
            }
            break;
          case 'js-inverted':
            if (hover) {
              tagStyle = jsHover;
            }
            else {
              tagStyle = js;
              }
              break;
            case 'html-inverted':
              if (hover) {
                tagStyle = htmlHover;
                }
              else {
                tagStyle = html;
                }
              break;
            case 'css-inverted':
              if (hover) {
                tagStyle = cssHover;
                }
              else {
                tagStyle = css;
                }
              break;
            case 'django-inverted':
              if (hover) {
                tagStyle = djangoHover;
              }
              else {
                tagStyle = django;
              }
              break;
            case 'flask-inverted':
              if (hover) {
                tagStyle = flaskHover;
              }
              else {
                tagStyle = flask;
              }
              break;
            case 'nodejs-inverted':
              if (hover) {
                tagStyle = nodejsHover;
              }
              else {
                tagStyle = nodejs;
                }
              break;
            case 'flutter-inverted':
              if (hover) {
                tagStyle = flutterHover;
              }
              else {
                tagStyle = flutter;
              }
              break;
            case 'graphql-inverted':
              if (hover) {
                tagStyle = graphqlHover;
              }
              else {
                tagStyle = graphql;
                }
              break;
            case 'netlify-inverted':
              if (hover) {
                tagStyle = netlifyHover;
              }
              else {
                tagStyle = netlify;
              }
              break;
            case 'git-inverted':
              if (hover) {
                tagStyle = gitHover;
              }
              else {
                tagStyle = git;
              }
              break;
            case 'github-inverted':
              if (hover) {
                tagStyle = githubHover;
              }
              else {
                tagStyle = github;
              }
              break;
            case 'sass-inverted':
              if (hover) {
                tagStyle = sassHover;
            }
              else {
                tagStyle = sass;
              }
              break;
        default:
            tagStyle = defaultColor;
            break;
      }
      return (
        <Topic
             style={

                     disabled ? { ...commonStyles, ...tagStyle, ...disabledStyle, ...style } :
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

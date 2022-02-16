import React from 'react'
import styled from 'styled-components'
import Content from './Content'

const ArticleWrapper = styled.article`
  padding: 0 30px 30px;

  @media only screen and (max-width: 768px) {
    padding: 0;
  }
`

class Article extends React.Component {
  render() {
    const { post } = this.props

    return (
      <ArticleWrapper>
        <Content
          content={post.body}
          date={post.frontmatter.date}
          topics={post.frontmatter.topics}
          translations={post.frontmatter.translations}
        />
      </ArticleWrapper>
    )
  }
}

export default Article

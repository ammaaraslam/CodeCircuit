import React, { Fragment } from 'react'
import styled from 'styled-components'
import TopicItem from './TopicItem'

const ListContainer = styled.div`
  display: inline;
  color: var(--color-secondaryText);
  font-size: 0.5rem;
  
`

const TagListItem = styled.span`
  margin-right: 5px;
`

class TagList extends React.Component {
  render() {
    const { tags, noLink } = this.props

    return (
      <ListContainer>
        {tags.map((tag, i) => {
          return (
            <Fragment key={`tag-list-${i}`}>
              {!noLink && (
                <TagListItem><TopicItem type={`${tag}-inverted`} size='5px' border='10px' fontSize='15px' to={`/tags/${tag}`}>{tag}</TopicItem></TagListItem>
              )}
              {noLink && <TagListItem><TopicItem type={tag} size='5px' fontSize='15px' border='10px' to={`/tags/${tag}`}>{tag}</TopicItem></TagListItem>}
              {i < tags.length - 1 ? ' ' : ''}
            </Fragment>
          )
        })}
      </ListContainer>
    )
  }
}

export default TagList
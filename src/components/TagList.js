import React, { Fragment } from 'react'
import styled from 'styled-components'
import TopicItem from './TopicItem'

const ListContainer = styled.div`
  display: inline;
  color: var(--color-secondaryText);
  font-size: 0.5rem;
  
`

const TopicListItem = styled.span`
  margin-right: 5px;
`

class TopicList extends React.Component {
  render() {
    const { topics, noLink } = this.props

    return (
      <ListContainer>
        {topics.map((topic, i) => {
          return (
            <Fragment key={`topic-list-${i}`}>
              {!noLink && (
                <TopicListItem><TopicItem type={`${topic}-inverted`} size='5px' border='10px' fontSize='15px' to={`/topic/${topic}`}>{topic}</TopicItem></TopicListItem>
              )}
              {noLink && <TopicListItem><TopicItem type={topic} size='5px' fontSize='15px' border='10px' to={`/topic/${topic}`}>{topic}</TopicItem></TopicListItem>}
              {i < topics.length - 1 ? ' ' : ''}
            </Fragment>
          )
        })}
      </ListContainer>
    )
  }
}

export default TopicList
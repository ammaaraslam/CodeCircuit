import React, { Fragment } from 'react'
import styled from 'styled-components'
import TagList from './TagList'
import Translations from './Translations'
import Time from './Time'
import { Bull, ReadingTime } from './Commons'
import {FaRegCalendarAlt} from 'react-icons/fa'


const Header = styled.header`
  margin-bottom: 2rem;
  color: var(--color-secondaryText);
  font-size: 1.2rem;
  padding: 20px;
  width: fit-content;
  margin-top: 2rem;
  margin-left: 35%;
  background-color: var(--color-darkerBackground);
  border-radius: 10px;
`
const CalendarIcon = styled(FaRegCalendarAlt)`
  color: var(--color-primaryText);
  transform: translateY(1px) translateX(-4px);
`
class ContentIntro extends React.Component {
  render() {
    const { date, tags, translations } = this.props

    return (
      <Header>
        <CalendarIcon />{date && <Time date={date} />}
        {date && Array.isArray(tags) && tags.length > 0 && <Bull />}
        
        {Array.isArray(tags) && tags.length > 0 && (
          <Fragment>
            <TagList tags={tags} />
          </Fragment>
        )}

        {translations && <Translations translations={translations} />}
      </Header>
    )
  }
}

export default ContentIntro

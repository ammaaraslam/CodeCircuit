import React, { Fragment } from 'react'
import styled from 'styled-components'
import TagList from './TagList'
import Translations from './Translations'
import Time from './Time'
import {FaRegCalendarAlt} from 'react-icons/fa'
import { Bull, ReadingTime } from './Commons'
import {AiOutlineClockCircle} from 'react-icons/ai'


const Header = styled.header`
  margin-bottom: 2rem;
  color: var(--color-linkColorChange);
  font-size: 1.2rem;
  padding: 20px;
  width: fit-content;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
  background-color: var(--color-darkerBackground);
  border: 10px solid var(--color-primaryBackground);
  border-radius: 20px;
  @media screen and (max-width: 768px) {
    & {
      font-size: 1rem;
      margin-left: 15%;
    }
  }
`
const CalendarIcon = styled(FaRegCalendarAlt)`
  color: var(--color-linkColorChangeInverted);
  font-size: 1.2rem;
  transform: translateY(2.5px);
  margin-right: 5px;
`
const ClockIcon = styled(AiOutlineClockCircle)`
  color: var(--color-linkColorChangeInverted);
  font-size: 1.2rem;
  transform: translateY(2.5px);
  margin-right: 5px;
`

class ContentIntro extends React.Component {
  render() {
    const { date, topics, timeToRead, translations } = this.props

    return (
      <Header>
        <CalendarIcon />{date && <Time date={date} />}
        <Bull />
        <ClockIcon /><ReadingTime min={timeToRead} />
        {date && Array.isArray(topics) && topics.length > 0}
        <br></br><br></br>
        {Array.isArray(topics) && topics.length > 0 && (
          <Fragment>
            <TagList topics={topics} />
          </Fragment>
        )}

        {translations && <Translations translations={translations} />}
      </Header>
    )
  }
}

export default ContentIntro

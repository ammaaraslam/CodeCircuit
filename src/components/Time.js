import React from 'react'
import styled from 'styled-components'
import '@fontsource/rubik/700.css'
import '@fontsource/roboto/400.css'

const TimeContainer = styled.time`
  color: var(--color-secondaryText);
  font-family: 'Roboto';
`

const Time = props => {
  const { date } = props

  const dateObject = new Date(date)
  const yyyymmdd = dateObject
    .toLocaleDateString('en-GB', {
      year: 'numeric',
      month: '2-digit',
      day: 'numeric',
    })
    .split('/')
    .reverse()
    .join('-')
  const friendlyDate = dateObject.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return <TimeContainer datetime={yyyymmdd}>{friendlyDate}</TimeContainer>
}
export default Time

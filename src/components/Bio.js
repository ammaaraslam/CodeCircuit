import React from 'react'
import styled from 'styled-components'
import { Text } from './Commons'
import useSiteMetadata from '../hooks/use-site-config'
import Avatar from '../images/avatar.jpg'
import '@fontsource/rubik/800.css'
import '@fontsource/roboto/400.css'

const BioWrapper = styled.div`
  content: "";
  padding-left: 10px;
  padding-right: 10px;
  @media screen and (max-width: 768px) {
    & {
      align-items: center;
      text-align: center;

    }
  }
`

const BioInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-family: 'Roboto';
  font-size: 1.5rem;
  line-height: 0.5cm;
  width: 100%;
  color: var(--color-primaryText);
  @media screen and (max-width: 768px) {
    & {
      margin-top: 30px;
      display: grid;
      grid-gap: 50px;
      grid-template-columns: repeat(1, 1fr);
      font-size: 1.3rem;
      align-items: center;
      text-align: center;

    }
  }
`

const BioImage = styled.img`
    width: 280px;
    height: 220px;
    border-radius: 20px;
    box-shadow: 0px -10px 15px -6px  #004a8f, /* top - THE RED SHADOW */
                0px  5px  15px  0px  #004a8f, /* bottom */
                5px  0px  15px  0px  #28d79a, /* right */
                -5px  0px  15px  0px  #28d79a; /* left */
    @media screen and (max-width: 768px) {
      & {
        align-items: center;
        text-align: center;        
      }
    }
`
const BioText = styled(Text)`
  color: var(--color-primaryText);
  text-align: left;
  line-height: 0.82cm;
  font-family: 'Roboto';
  margin-left: 10%;
  width: 95%;
  a {
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
  }
  @media screen and (max-width: 768px) {
    & {
      margin-top: -20px;
      margin-left: 0;
      width: 100%;
    }
  }
`

const Bio = () => {
  const { authorDescription } = useSiteMetadata()

  return (
    <BioWrapper>
      <BioInfo>
        <BioImage src={Avatar} alt='Author Image' />
        <BioText dangerouslySetInnerHTML={{ __html: authorDescription }} />
      </BioInfo>
      
    </BioWrapper>
  )
}

export default Bio

import React from 'react'
import styled from 'styled-components'
import { Text } from './Commons'
import useSiteMetadata from '../hooks/use-site-config'
import useSiteImages from '../hooks/use-site-images'
import Avatar from '../images/avatar.jpg'
import '@fontsource/rubik/800.css'
import '@fontsource/roboto/400.css'

const BioWrapper = styled.div`
  width: 75%;
  content: "";
  justify-items: center;
  grid-gap: 50px;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 768px) {
    & {
      grid-template-columns: repeat(1, 1fr);
      width: 90%;
    }
  }
  padding-left: 15px;
  padding-right: 15px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`

const BioImage = styled.img`
    width: 35%;
    height: 150px;
    border-radius: 20px;
    align-items: right;
    transform: translateX(100px);
    @media screen and (max-width: 768px) {
      & {
        display: none;
        
      }
    }

`
const BioInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: left;
  margin-top: 30px;
  margin-left: 40px;
`

const BioText = styled(Text)`
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--color-primaryText);
  font-family: 'Roboto';
`

const Bio = () => {
  const { authorDescription } = useSiteMetadata()

  return (
    <BioWrapper>
      <BioInfo>
        <BioText dangerouslySetInnerHTML={{ __html: authorDescription }} />
        <BioImage src={Avatar} alt='Author Image' />
      </BioInfo>
      
    </BioWrapper>
  )
}

export default Bio

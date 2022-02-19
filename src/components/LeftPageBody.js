import React from 'react'
import styled from 'styled-components'

const LeftPageBodyContainer = styled.section`
    background-color: var(--color-darkerBackground);
    border: 10px solid var(--color-primaryBackground);
    border-radius: 40px;
    align-items: center;
    float: left;
    width: 72%;
    padding-top: 20px;
    padding-bottom: 40px;
    padding-left: 20px;
    padding-right: 28px;
    transform: translateY(-50px);
    @media screen and (max-width: 768px) {
        & {
          width: 95%;
          display: block;
        }
      }
    
`

const LeftPageBody = ({children}) => {
    return (
        <LeftPageBodyContainer>
            {children}
        </LeftPageBodyContainer>
    )
}

export default LeftPageBody

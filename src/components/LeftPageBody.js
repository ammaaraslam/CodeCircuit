import React from 'react'
import styled from 'styled-components'

const LeftPageBodyContainer = styled.section`
    background-color: var(--color-darkerBackground);
    border: 10px solid var(--color-primaryBackground);
    border-radius: 40px;
    align-items: center;
    float: left;
    width: 70%;
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 32px;
    padding-right: 32px;
    transform: translateY(-50px);
    @media screen and (max-width: 420px) {
        & {
            width: 95%;
            padding-left: 15px;
            padding-right: 15px;
            border: 8px solid var(--color-primaryBackground);
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

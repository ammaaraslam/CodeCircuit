import React from 'react'
import styled from 'styled-components'

const LeftPageBodyContainer = styled.section`
    background-color: var(--color-darkerBackground);
    border-radius: 20px;
    align-items: center;
    float: left;
    width: 72%;
    padding-top: 20px;
    padding-bottom: 40px;
    transform: translateY(-50px);
    
`

const LeftPageBody = ({children}) => {
    return (
        <LeftPageBodyContainer>
            {children}
        </LeftPageBodyContainer>
    )
}

export default LeftPageBody

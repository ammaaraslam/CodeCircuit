// /* eslint-disable react-hooks/rules-of-hooks */
// import { Link } from 'gatsby'
// import styled from 'styled-components'
import React, {useState} from 'react'
import styled from 'styled-components';
import '@fontsource/roboto/400.css'
import {AiFillCloseCircle} from 'react-icons/ai'


export const AlertContainer = styled.div`
  background: var(--color-highlightColorChangeInverted);
  width: fit-content;
  padding: 0.6rem;
  display: flex;
  justify-content: space-between;
  z-index: 100000;
  position: fixed;
  bottom: 20px;
  left: 10px;
  font-size: 21px;
  font-family: 'Roboto';
  border-left: 8px solid var(--color-linkColorChange);
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  overflow: hidden;
  
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;



const AlertText = styled.p`
    color: var(--color-textInverted);
    text-align: center;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0;
    margin-left: 15px;
`

const CloseButton = styled.div`
    display: flex;
    align-items: center;
    margin-left: 30px;
    margin-right: 10px;
`
const CloseButtonIcon = styled(AiFillCloseCircle)`
    padding: 0;
    font-size: 28px;
    color: var(--color-linkColorChange);
    &:hover {
        cursor: pointer;
        transform: scale(1.05);
    }
`

const Alert = (props) => {
    const [closeToggled, setCloseToggle] = useState(true);
    const handleCloseToggle = () => {
        setCloseToggle(!closeToggled);
    }
    const alertText = props.alertText
  return (
    <>
        { closeToggled ? <AlertContainer>
          
          <AlertText>{alertText}</AlertText>
          <CloseButton><CloseButtonIcon onClick={handleCloseToggle} /></CloseButton>
        </AlertContainer> : null }
      
    </>
  );
};

export default Alert;

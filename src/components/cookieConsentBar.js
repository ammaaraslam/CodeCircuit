import * as React from 'react';
import { useLocation } from '@reach/router';
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies';
import styled from 'styled-components';
import '@fontsource/rubik/500.css'
import '@fontsource/roboto/400.css'
function isBrowser() {
  return typeof window !== 'undefined';
}

function getValue(key, defaultValue) {
  return isBrowser() && window.localStorage.getItem(key)
    ? JSON.parse(window.localStorage.getItem(key))
    : defaultValue;
}

function setValue(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

function useStickyState(defaultValue, key) {
  const [value, setter] = React.useState(() => {
    return getValue(key, defaultValue);
  });

  React.useEffect(() => {
    setValue(key, value);
  }, [key, value]);

  return [value, setter];
}

const CookieConsent = () => {
  const location = useLocation();
  if (isBrowser()) {
    initializeAndTrack(location);
  }

  const [bannerHidden, setBannerHidden] = useStickyState(
    false,
    'consentCookieHidden',
  );

  const EnableAnalytics = () => {
    document.cookie = 'gatsby-gdpr-google-analytics=true';
    setBannerHidden(true);
  };

  return (
    <>
      {!bannerHidden && (
        <CookieConsentBarContainer>
          <CookieConsentBarText>
            This website uses cookies to personalize content and analyze our
            traffic.<a href='/privacy'>Learn More</a>
          </CookieConsentBarText>
          <AcceptButton onClick={EnableAnalytics}>Accept</AcceptButton>
        </CookieConsentBarContainer>
      )}
    </>
  );
};

export default CookieConsent;

const CookieConsentBarContainer = styled.div`
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
`

const CookieConsentBarText = styled.p`
    color: var(--color-textInverted);
    text-align: left;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0;
    margin-left: 15px;
    a {
      margin-left: 5px;
      color: var(--color-linkColorChange);
      text-decoration: underline;
      text-decoration-color: var(--color-linkColorChange);
      text-decoration-thickness: 2px;
      &:hover {
        color: var(--color-linkColorChange);
        text-decoration: underline;
        text-decoration-color: var(--color-linkColorChange);
        text-decoration-thickness: 3px;
      
      }
  }
`


const AcceptButton = styled.div`
    display: flex;
    align-items: center;
    margin-left: 30px;
    margin-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 8px;
    padding-right: 15px;
    font-family: Rubik;
    background-color: var(--color-linkColorChange);
    color: var(--color-highlightColorChangeInverted);
    border-radius: 8px;
    &:hover {
      cursor: pointer;
      transform: scale(1.05);
      
    }

`

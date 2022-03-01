import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import styled from 'styled-components'
import LeftPageBody from '../components/LeftPageBody'
import RightSection from '../components/RightSection'

const PageBody = styled.div`
  background-color: var(--color-lighterBackground);
  width: 100%;
  content: "";
  clear: both;
  display: table;
  padding-left: 15px;
  padding-right: 15px;
  transform: translateY(-50px);
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  color: var(--color-primaryText);
  
`

class SeriesPage extends React.Component {
    render() {

        return (
            <Layout>
                <SEO title={`Programming Series`} />
                <Hero title="Programming Series" />
                <PageBody>
                  <LeftPageBody>
                    <h1>Coming Soon</h1>
                  </LeftPageBody>
                  <RightSection />
                </PageBody>
            </Layout>
        )
    }
}

export default SeriesPage

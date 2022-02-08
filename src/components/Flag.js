import React from 'react'
import styled from 'styled-components'

class Flag extends React.Component {
  render() {
    const { language } = this.props
    const alt = language === 'en' ? 'english post' : 'post en francais'

    return <p>.</p>
  }
}

export default Flag

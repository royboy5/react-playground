import React, { Component } from 'react'
import { connect } from 'react-redux'

import InfoMessage from './styled-components/InfoMessage'
import SuccessMessage from './styled-components/SuccessMessage'
import ErrorMessage from './styled-components/ErrorMessage'

class Header extends Component {
  renderContent () {
    switch (this.props.sample) {
      case null:
        return 'I am null state'
      case false:
        return 'I am false state'
      default:
        return 'Default state'
    }
  }

  render () {
    console.log(this.props)
    return (
      <nav>
        <InfoMessage>Info Message</InfoMessage>
        <SuccessMessage>Success Message</SuccessMessage>
        <ErrorMessage>Error Message</ErrorMessage>
        <p>{this.renderContent()}</p>
      </nav>
    )
  }
}

function mapStateToProps ({sample}) {
  return {sample}
}

export default connect(mapStateToProps)(Header)

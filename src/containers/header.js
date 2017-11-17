import React, { Component } from 'react'
import { connect } from 'react-redux'

import InfoMessage from '../components/messages/InfoMessage'
import SuccessMessage from '../components/messages/SuccessMessage'
import ErrorMessage from '../components/messages/ErrorMessage'
import Message from '../components/messages/Message'

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

    // displaying the use of styled-components with 
    // bootstrap css
    return (
      <div>
        <Message className="alert">Message</Message>
        <InfoMessage className="alert">Info Message</InfoMessage>
        <SuccessMessage className="alert">Success Message</SuccessMessage>
        <ErrorMessage className="alert">Error Message</ErrorMessage>
        <p className="alert alert-success">{this.renderContent()}</p>
      </div>
    )
  }
}

function mapStateToProps ({sample}) {
  return {sample}
}

export default connect(mapStateToProps)(Header)

import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'

import Header from './header'

const body = () => <h2>body</h2>

class App extends Component {
  componentDidMount () {
    // sample call to action that will
    // be called everytime the app component is rendered
    this.props.sample()
  }

  render () {
    return (
      <BrowserRouter>
        <div className='App'>
          <Header />
          <Route path='/' component={body} />
        </div>
      </BrowserRouter>
    )
  }
}

export default connect(null, actions)(App)

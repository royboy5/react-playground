import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    return (
      <h1>Haiii</h1>
    );
  }
}

mapStateToProps({auth}) {
  return {auth};
}

export default connect()(Header);
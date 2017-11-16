import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  renderContent() {
    switch (this.props.sample) {
      case null:
        return 'I am null'
      case false:
        return 'I am false'
      default:
        return 'Default'
    }
  }

  render() {
    console.log(this.props);
    return (
      <nav>
        <h1>Haiii</h1>
        {this.renderContent()}
      </nav>
    );
  }
}

function mapStateToProps({sample}) {
  return {sample};
}

export default connect(mapStateToProps)(Header);
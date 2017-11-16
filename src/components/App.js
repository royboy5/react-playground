import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './header';

const body = () => <h2>body</h2>;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route path="/" component={body} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

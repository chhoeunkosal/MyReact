import React, { Component } from 'react';
import Content from './components/Content/Content';
import Header from './components/Header/Header'

class App extends Component {
  render() {
    return (
      <div>
          <Header/>
          <Content/>
      </div>
    );
  }
}

export default App;

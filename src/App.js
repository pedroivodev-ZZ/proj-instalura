import React, { Component } from 'react'

import Header from './components/Header'
import Timeline from './components/Timeline'

class App extends Component {
  render() {
    return (
      <div className="main">
        <Header history={this.props.history} />
        <Timeline history={this.props.history} />
      </div>
    );
  }
}

export default App;

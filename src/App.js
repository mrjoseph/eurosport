import React, { Component } from 'react';
import data from './utils/fetchData';
import Players from './components/players/Players';

import './App.css';



class App extends Component {
  constructor(){
    super();
    this.state = {
      data: null,
    }
  }
  componentDidMount() {
    this.setState({
        ...data
    });
  }
  render() {
    const { data } = this.state;
    if(data) {
      return (
          <div className="App">
            <header className="header">
              <div className="logo" />
              <h1 className="page-title">Technical UI test</h1>
            </header>
            <Players {...data} />
          </div>
      );
    }
    return null;
  }
}

export default App;

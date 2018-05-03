import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './Register';
import WorldBoss from './WorldBoss';

class App extends Component {

  constructor(){
    super();
    this.state = {
      route: 'register'
    }
  }

  onRouteChange = () => {
    this.setState({route: 'worldboss'})
  }

  render() {
    const {route} = this.state;
    return (
      <div className="App">
        {route === 'register'
          ? <Register onRouteChange={this.onRouteChange}/>
          : <WorldBoss />
        }
      </div>
    );
  }
}

export default App;

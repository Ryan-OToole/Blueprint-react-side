import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm'
import Sidebar from './Sidebar'
import PoemDetails from './PoemDetails'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          This will be a project soon
        </p>
        <LoginForm /><br/>
        <RegistrationForm /><br/><br/><br/>
        <Sidebar />
        <PoemDetails />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm'
import Sidebar from './Sidebar'
import PoemDetails from './PoemDetails'
import { connect } from "react-redux"

class App extends Component {
  render() {
    return (
      <div className="App">
        <br/>
        <LoginForm /><br/>
        <RegistrationForm /><br/><br/><br/>
        <Sidebar />
        <PoemDetails />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    alive: state.alive
  }
}

export default connect(mapStateToProps)(App)

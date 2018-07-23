import React, { Component } from 'react';
import './App.css';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm'
import Sidebar from './Sidebar'
import CreatePoemForm from './CreatePoemForm'
import DisplayPoem from './DisplayPoem'
import { connect } from "react-redux"

class App extends Component {
  render() {
    return (
      <div className="App">
        <br/>
        <LoginForm /><br/>
        <RegistrationForm /><br/><br/><br/>
        <Sidebar />
        {this.props.currentPoem === null ? null : <DisplayPoem />}
        { this.props.createOrDisplay ? <CreatePoemForm /> : null}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    currentPoem: state.currentPoem,
    createOrDisplay: state.createOrDisplay
  }
}

export default connect(mapStateToProps)(App)

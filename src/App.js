import React, { Component } from 'react';
import './App.css';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm'
import Sidebar from './Sidebar'
import CreatePoemForm from './CreatePoemForm'
import DisplayPoem from './DisplayPoem'
import { connect } from "react-redux"
import UpdatePoemForm from './UpdatePoemForm'
import Adapter from './Adapter'

class App extends Component {

  componentDidMount() {
    Adapter.getPoems()
      .then(this.props.fillPoemList)
  }

  renderDisplayType = () => {
    switch(this.props.displayType) {
        case "display":
          return <DisplayPoem />
        case "create":
          return <CreatePoemForm />
        case "update":
          return <UpdatePoemForm />
        default:
          return null
    }
  }



  render() {
    return (
      <div className="App">
        <br/>
        <LoginForm /><br/>
        <RegistrationForm /><br/><br/><br/>
        <Sidebar />
        { this.renderDisplayType() }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    displayType: state.displayType
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fillPoemList: (poemsArr) => {
      dispatch({type:"FILL_POEMLIST", payload: poemsArr})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

import React, { Component } from 'react';
import '../App.css';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm'
import { connect } from "react-redux"
import Adapter from '../Adapter'
import { setPoemList } from '../actions/index'
import NavBar from './NavBar'
import { Route, withRouter, Switch } from 'react-router-dom'
import PoemContainer from './PoemContainer'


class App extends Component {



  render() {
    
    return (
      <div className="App">
          <NavBar />
        <Switch>
          <Route exact path="/" component={(props) =>   <RegistrationForm {...props} /> }/>
          <Route exact path="/poems" component={(props) =>   <PoemContainer {...props} /> }/>
          <Route exact path="/login" component={(props) => <LoginForm {...props} /> }/>
      </Switch>
     </div>
    )
  }
}

function mapStateToProps(state) {
  currentUser: state.currentUser
}

function mapDispatchToProps(dispatch){
    setPoemList: (poemsArr) => {
      dispatch(setPoemList(poemsArr))
    }
  }




export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))

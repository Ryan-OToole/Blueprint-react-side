import React, { Component } from 'react';
import '../App.css';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm'
import { connect } from "react-redux"
import { setPoemList, setPoemListFilter } from '../actions/index'
import NavBar from './NavBar'
import { Route, withRouter, Switch } from 'react-router-dom'
import PoemContainer from './PoemContainer'
import PoemContainerAll from './PoemContainerAll'
import About from './About'


class App extends Component {



  render() {

    return (
      <div className="App">
          <NavBar />
        <Switch>
          <Route exact path="/register" component={(props) =>   <RegistrationForm {...props} /> }/>
          <Route exact path="/poems" component={(props) =>   <PoemContainer {...props} /> }/>
          <Route exact path="/community" component={(props) => <PoemContainerAll {...props} /> }/>
          <Route exact path="/about" component={(props) => <About {...props} /> }/>
          <Route exact path="/" component={(props) => <LoginForm {...props} /> }/>
      </Switch>
     </div>
    )
  }
}




export default withRouter(App)

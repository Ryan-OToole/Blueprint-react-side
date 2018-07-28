import React, { Component, Fragment } from 'react';
import '../App.css';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm'
import Sidebar from './Sidebar'
import CreatePoemForm from './CreatePoemForm'
import DisplayPoem from './DisplayPoem'
import { connect } from "react-redux"
import UpdatePoemForm from './UpdatePoemForm'
import Adapter from '../Adapter'
import MarkovMaker from './MarkovMaker'
import MarkovMade from './MarkovMade'
import {Grid, Segment} from 'semantic-ui-react'
import MarkovFillerBtns from './MarkovFillerBtns'
import { setPoemList } from '../actions/index'
import NavBar from './NavBar'
import { Link, Route, withRouter, Switch, Redirect } from 'react-router-dom'
import Home from './Home'
import PoemContainer from './PoemContainer'


class App extends Component {

  componentDidMount() {
    Adapter.getPoems()
      .then(this.props.fillPoemList)
  }

  render() {

    return (
      <div className="App">
          <NavBar />
        <Switch>

        <Route exact path="/register" component={(props) =>   <RegistrationForm {...props} /> }/>
        <Route exact path="/poems" component={(props) =>   <PoemContainer {...props} /> }/>
        <Route exact path="/login" component={(props) => <LoginForm {...props} /> }/>
      </Switch>
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
      dispatch(setPoemList(poemsArr))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))

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

  componentDidMount() {
    Adapter.getPoems()
      .then(this.props.fillPoemList)
  }

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

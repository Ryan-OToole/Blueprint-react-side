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
import MarkovMaker from './MarkovMaker'
import MarkovMade from './MarkovMade'
import {Grid, Segment} from 'semantic-ui-react'

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
        <h3>Markov Madness</h3>
          <LoginForm />
          <RegistrationForm />
        <Grid columns={3} divided>
         <Grid.Row stretched>
           <Grid.Column>
             <Segment><Sidebar /></Segment>
             <Segment>2</Segment>
             <Segment>3</Segment>
           </Grid.Column>
           <Grid.Column>
             <Segment>{ this.renderDisplayType() }</Segment>
           </Grid.Column>
           <Grid.Column>
             <Segment><MarkovMaker /></Segment>
             <Segment><MarkovMade /></Segment>
           </Grid.Column>
         </Grid.Row>
       </Grid>
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

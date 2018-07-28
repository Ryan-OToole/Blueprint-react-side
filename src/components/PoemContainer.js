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



class PoemContainer extends Component {

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
      <div>
      {this.props.currentUser.username ?
        <Grid columns={3} divided>
         <Grid.Row stretched>
           <Grid.Column centered="true">
             <Segment><Sidebar /></Segment>
           </Grid.Column>
           <Grid.Column>
             <Segment>{ this.renderDisplayType() }</Segment>
           </Grid.Column>
           <Grid.Column>
             <Segment>  <MarkovMaker /> <MarkovMade /> </Segment>
           </Grid.Column>
         </Grid.Row>
       </Grid>
       :
       null
    }
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  }
}



export default withRouter(connect(mapStateToProps)(PoemContainer))

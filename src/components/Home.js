import React, { Component } from 'react';
import NavBar from './NavBar'
import LoginForm from './LoginForm'
import RegistrationForm from './RegistrationForm'

class Home extends Component {



  render() {
    return (
        <div>
          <LoginForm history={this.props} />
        </div>
      )
    }
  }



export default Home

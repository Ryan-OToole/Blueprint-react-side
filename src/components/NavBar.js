import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Adapter from '../Adapter'

class NavBar extends Component {

  handleClick = (event) => {
    event.preventDefault()
    console.log("hey")
      localStorage.removeItem('token')
      localStorage.removeItem('user')
  }



  render() {
    return (
      <div className="ui inverted icon large blue menu" >
        <i className="home icon"/>
      { Adapter.isLoggedIn() ?
        <div className="right menu">
          <Link className="ui basic inverted item" to="/community">Community Feed</Link>
          <Link className="ui basic inverted item" to="/" onClick={() => {this.handleClick()}} >Logout</Link>
          <Link className="ui basic inverted item" to="/poems" >Poems</Link>
        </div>

          :

        <div className="right menu">
          <Link className="ui basic inverted item" to="/register">Register</Link>
        </div>
      }
      </div>
    )
  }
}

export default NavBar

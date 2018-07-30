import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Adapter from '../Adapter'

class NavBar extends Component {

  handleClick = (event) => {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
  }




  render() {
    return (
      <div className="ui inverted icon large blue menu" id="navBar" >
        { Adapter.isLoggedIn() ?
      <Fragment>
          <div className="left menu">
            <Link className="ui basic inverted item" to="/poems" >My Poems</Link>
            <Link className="ui basic inverted item" to="/community">Community Feed</Link>
          </div>
          <div className="right menu">
            <Link className="ui basic inverted item" to="/" onClick={() => {this.handleClick()}} >Logout</Link>
          </div>
      </Fragment>
          :
        <div className="right menu">
          <Link className="ui basic inverted item" to="/">Login</Link>
          <Link className="ui basic inverted item" to="/register">Register</Link>
          <Link className="ui basic inverted item" to="/about">About</Link>
        </div>
      }
      </div>
    )
  }
}

export default NavBar

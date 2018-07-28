import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Adapter from '../Adapter'

class NavBar extends Component {

  handleClick = (event) => {
    console.log("hey inside Of logout problem")
      localStorage.removeItem('token')
      localStorage.removeItem('user')
  }




  render() {
    return (
      <div className="ui inverted icon large blue menu" >
        { Adapter.isLoggedIn() ?
      <Fragment>
          <div className="left menu">
            <Link className="ui basic inverted item" to="/poems" >Poems</Link>
            <Link className="ui basic inverted item" to="/community">Community Feed</Link>
          </div>
          <div className="right menu">
            <Link className="ui basic inverted item" to="/" onClick={() => {this.handleClick()}} >Logout</Link>
          </div>
      </Fragment>
          :
        <div className="right menu">
          <Link className="ui basic inverted item" to="/">Register</Link>
        </div>
      }
      </div>
    )
  }
}

export default NavBar

import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Adapter from '../Adapter'
import { connect } from "react-redux";
import { clearMarkovOutputTitle, clearMarkov, setMarkovOutput  } from '../actions/index'
import { withRouter } from 'react-router-dom'

class NavBar extends Component {

  handleClick = (event) => {
      // localStorage.removeItem('token')
      // localStorage.removeItem('user')
      localStorage.clear();
      this.props.clearMarkovOutputTitle("")
      this.props.clearMarkov("")
      this.props.setMarkovOutput("")
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
            <Link className="ui basic inverted item" to="/" onClick={() =>this.handleClick}>Logout</Link>
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

function mapStateToProps(state) {
  return {
    markov: state.markov,
    markovOutput: state.markovOutput,
    title: state.title
  }
}

function mapDispatchToProps(dispatch) {
  return {
    clearMarkov: () => {
      dispatch(clearMarkov(""))
    },
    setMarkovOutput: (markovOutput) => {
      dispatch(setMarkovOutput(markovOutput))
    },
    clearMarkovOutputTitle: (string) => {
      dispatch(clearMarkovOutputTitle(string))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar))

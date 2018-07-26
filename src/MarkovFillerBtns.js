import React, { Component } from 'react';
import { connect } from "react-redux"
import './App.css';
import Adapter from './Adapter'

class MarkovMade extends Component {

  handleClick = (id) => {
      Adapter.getFillerText(id)
        .then( poemObj => {
          this.props.setMarkovInput(poemObj)
        })
  }


  render() {
      return (
      <div>
        <form>
          Load Text From:
          <button onClick={() => {this.handleClick(62)}}>Grimm Bros</button>
          <button onClick={() => {this.handleClick(68)}}>Emily Dickinson</button>
        </form>
      </div>
      )
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
        setMarkovInput: (poem) => {
          dispatch({type: "SET_MARKOV_INPUT", payload: poem})
        }
    }
  }

  export default connect(null, mapDispatchToProps)(MarkovMade)

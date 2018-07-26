import React, { Component } from 'react';
import { connect } from "react-redux"
import '../App.css';
import Adapter from '../Adapter'

const URL = "http://localhost:3000/poems";

class MarkovMade extends Component {

  handleClick = (id) => {
      // Adapter.getFillerText(id)
      fetch(URL + `/${id}`)
      .then(res=>res.json())
      .then( poemObj => {
        console.log(poemObj);
        debugger
          this.props.setMarkovInput(poemObj)
        })
  }


  render() {
      return (
      <div>
          Load Text From:
          <button onClick={() => {this.handleClick(62)}}>Grimm Bros</button>
          <button onClick={() => {this.handleClick(68)}}>Emily Dickinson</button>
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

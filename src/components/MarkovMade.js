import React, { Component } from 'react';
import { connect } from "react-redux"
import '../App.css';
import Adapter from '../Adapter'

class MarkovMade extends Component {

  handleSubmit = (event) => {
    event.preventDefault()

    Adapter.postPoem("Flinstone Space Jam", this.props.markovOutput)
        .then( poem => {
          this.props.addToPoemList(poem)
          this.props.setCurrentPoem(poem)
        })
        .then(this.props.setDisplayType())
        .then(this.props.clearMarkovOutput())
}

render() {
  return (
    <div>
      <form onSubmit={this.handleSubmit}>
          Gold Content of Poem:<br/><textarea
            id='markov-body-output'
            name="markovOutput"
            rows="10"
            cols="50"
            value={this.props.markovOutput}></textarea>
            <br />
        <button type='submit'>Save this Poem?</button>
      </form>
    </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    markovOutput: state.markovOutput
  }
}

function mapDispatchToProps(dispatch) {
  return {
    clearMarkovOutput: () => {
      dispatch({type: "CLEAR_MARKOV_OUTPUT", payload: ""})
    },
    addToPoemList: (poem) => {
      dispatch({type: "ADD_TO_POEMLIST", payload: poem})
    },
    setCurrentPoem: (poem) => {
      dispatch({type: "SET_CURRENT_POEM", payload: poem})
    },
    setDisplayType: () => {
      dispatch({type: "SET_DISPLAY_TYPE", payload: "display"})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MarkovMade)

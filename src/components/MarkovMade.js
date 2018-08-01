import React, { Component } from 'react';
import { connect } from "react-redux";
import '../App.css';
import Adapter from '../Adapter';
import { setPoemList, setCurrentPoem, setDisplayType, setMarkovOutput, controlledComponent } from '../actions/index'
import { Button } from 'semantic-ui-react'

class MarkovMade extends Component {




  handleSubmit = (event) => {
    event.preventDefault()
      Adapter.postPoem("Name me", this.props.markovOutput, this.props.currentUser.id)
        .then( poem => {
          const poemListUpdated = Array.from(this.props.poemList)
          poemListUpdated.unshift(poem)
          this.props.updatePoemList(poemListUpdated)
          this.props.setCurrentPoem(poem)
          this.props.setDisplayType("display")
          this.props.clearMarkovOutput()
        })
}

render() {
  return (
    <div>
      <form onSubmit={this.handleSubmit}>
        Markov Output:<br/><textarea
            id='markov-body-output'
            name="markovOutput"
            rows="20"
            cols="50"
            onChange={this.props.handleChange}
            value={this.props.markovOutput}></textarea>
            <br />
        <Button type='submit' color='teal'>Save me?</Button>
      </form>
    </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    markovOutput: state.markovOutput,
    poemList: state.poemList,
    currentPoem: state.currentPoem,
    currentUser: state.currentUser
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updatePoemList: (poemListUpdated) => {
      dispatch(setPoemList(poemListUpdated))
    },
    setCurrentPoem: (poem) => {
      dispatch(setCurrentPoem(poem))
    },
    setDisplayType: (type) => {
      dispatch(setDisplayType(type))
    },
    handleChange: (event) => {
      dispatch(controlledComponent(event))
    },
    clearMarkovOutput: () => {
      dispatch(setMarkovOutput(""))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MarkovMade)

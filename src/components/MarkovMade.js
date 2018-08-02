import React, { Component } from 'react';
import { connect } from "react-redux";
import '../App.css';
import Adapter from '../Adapter';
import { setPoemList, setCurrentPoem, setDisplayType, setMarkovOutput, controlledComponent, clearMarkovOutputTitle, setMarkovInput, setPoemListFilter } from '../actions/index'
import { Button } from 'semantic-ui-react'

class MarkovMade extends Component {




  handleSubmit = (event) => {
    event.preventDefault()
      Adapter.postPoem(this.props.title, this.props.markovOutput, this.props.currentUser.id)
        .then( poem => {
          const poemListUpdated = Array.from(this.props.poemList)
          poemListUpdated.unshift(poem)
          this.props.updatePoemList(poemListUpdated)
          this.props.setPoemListFilter(poemListUpdated)
          this.props.setCurrentPoem(poem)
          this.props.setDisplayType("display")
          this.props.clearMarkovOutput()
          this.props.clearMarkovOutputTitle()
        })
}

handleClick = () => {
  this.props.setMarkovInput(this.props.markovOutput)
  this.props.clearMarkovOutput()
}

render() {
  return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <h3>Title:</h3><input
           id='markov-title-output'
           name="title"
           type='text'
           size="30"
           onChange={this.props.handleChange}
           value={this.props.title} /><br/>
          <br/><textarea
            id='markov-body-output'
            name="markovOutput"
            rows="20"
            cols="50"
            onChange={this.props.handleChange}
            value={this.props.markovOutput}></textarea>
            <br />
        <Button type='submit' color='teal'>Save Me?</Button>
        <Button color='blue' onClick={this.handleClick}>Rejumble Me?</Button>
      </form>
    </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    markovOutput: state.markovOutput,
    poemList: state.poemList,
    poemListFilter: state.poemListFilter,
    currentPoem: state.currentPoem,
    currentUser: state.currentUser,
    title: state.title
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updatePoemList: (poemListUpdated) => {
      dispatch(setPoemList(poemListUpdated))
    },
    setPoemListFilter: (poemsArr) => {
      dispatch(setPoemListFilter(poemsArr))
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
    },
    clearMarkovOutputTitle: () => {
      dispatch(clearMarkovOutputTitle(""))
    },
    setMarkovInput: (string) => {
      dispatch(setMarkovInput(string))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MarkovMade)

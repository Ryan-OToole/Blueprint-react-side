import React, { Component } from 'react';
import { connect } from "react-redux"
import Adapter from './Adapter'

class DisplayPoem extends Component {

  deletePoemFromServer = (poemToDelete) => {
    const newPoemList = Array.from(this.props.poemList).filter( poem => {
      return poem.id !== this.props.currentPoem.id
    })
    Adapter.deletePoem(poemToDelete)
      .then(this.props.updatePoemList(newPoemList))
      .then(this.props.resetCurrentPoemState())
  }

  render() {
    return (
      <div id="poem-details" >
        <h3> {this.props.currentPoemTitle} </h3>
        <p> {this.props.currentPoemBody} </p>
        <button onClick={this.props.setDisplayType}> Edit Poem </button>
        <button onClick={ () => {this.deletePoemFromServer(this.props.currentPoem)}}> Delete Poem </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentPoem: state.currentPoem,
    currentPoemTitle: state.currentPoemTitle,
    currentPoemBody: state.currentPoemBody,
    poemList: state.poemList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updatePoemList: (newPoemList) => {
      dispatch({type: "UPDATE_POEMLIST", payload: newPoemList})
    },
    resetCurrentPoemState: () => {
      dispatch({type: "RESET_CURRENT_POEM_STATE", payload: null})
    },
    setDisplayType: () => {
      dispatch({type: "SET_DISPLAY_TYPE", payload: "update"})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayPoem)

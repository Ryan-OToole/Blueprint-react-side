import React, { Component } from 'react';
import { connect } from "react-redux";
import Adapter from '../Adapter';
import { setPoemList, setCurrentPoem, setDisplayType, setPoemListFilter } from '../actions/index'
import { Button } from 'semantic-ui-react'

class DisplayPoem extends Component {

  deletePoemFromServer = (poemToDelete) => {
    const newPoemList = Array.from(this.props.poemList).filter( poem => {
      return poem.id !== this.props.currentPoem.id
    })
    Adapter.deletePoem(poemToDelete)
      .then(this.props.updatePoemList(newPoemList))
      .then(this.props.setPoemListFilter(newPoemList))
      .then(this.props.setDisplayTypeNull())
      .then(this.props.setCurrentPoemState())
  }

  render() {
    return (
      <div id="poem-details" >
        <h3> {this.props.currentPoemTitle} </h3>
        <p> {this.props.currentPoemBody} </p>
          <Button basic color='blue' onClick={this.props.setDisplayType}>Edit Poem</Button>
          <Button basic color='pink' onClick={ () => {this.deletePoemFromServer(this.props.currentPoem)}}>Delete Poem </Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentPoem: state.currentPoem,
    currentPoemTitle: state.currentPoemTitle,
    currentPoemBody: state.currentPoemBody,
    poemList: state.poemList,
    poemListFilter: state.poemListFilter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updatePoemList: (newPoemList) => {
      dispatch(setPoemList(newPoemList))
    },
    setPoemListFilter: (poemsArr) => {
      dispatch(setPoemListFilter(poemsArr))
    },
    setCurrentPoemState: () => {
      dispatch(setCurrentPoem(""))
    },
    setDisplayType: () => {
      dispatch(setDisplayType("update"))
    },
    setDisplayTypeNull: () => {
      dispatch(setDisplayType(null))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayPoem)

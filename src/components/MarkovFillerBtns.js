import React, { Component } from 'react';
import { connect } from "react-redux"
import '../App.css';
import Adapter from '../Adapter'
import { setMarkovInput } from '../actions/index'
import { Button } from 'semantic-ui-react'



class MarkovFillerBtns extends Component {

  handleClick = (id) => {
      Adapter.getFillerText(id)
        .then( poemObj => {
           this.props.setMarkovInput(poemObj.body)
        })
  }


  render() {

      return (
      <div>
          <Button basic color='yellow' onClick={() => {this.handleClick(38)}}>Emily Dickinson</Button>
          <Button basic color='green' onClick={() => {this.handleClick(32)}}>Ryan's Poems</Button>
          <Button basic color='blue' onClick={() => {this.handleClick(96)}}>The Doors</Button>
          <Button basic color='teal' onClick={() => {this.handleClick(36)}}>Another Source</Button>
          <Button basic color='pink' onClick={() => {this.handleClick(36)}}>Grimm Bros</Button>
      </div>
      )
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
        setMarkovInput: (poemText) => {
          dispatch(setMarkovInput(poemText))
      }
    }
  }

  export default connect(null, mapDispatchToProps)(MarkovFillerBtns)

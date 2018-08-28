import React, { Component } from 'react';
import PoemList from './PoemList'
import CreatePoemButton from './CreatePoemButton'
import '../App.css';
// import { Input } from 'semantic-ui-react'
import { connect } from "react-redux"
import { setPoemList, setPoemListFilter, controlledComponent } from '../actions/index'

class Sidebar extends Component {

  handleChange = (event) => {

    this.props.controlledComponent(event)

    const poemList = this.props.poemListFilter.filter( poem => {
      return poem.title.toLowerCase().includes(event.target.value.toLowerCase())
    })
    this.props.setPoemList(poemList)
}

  render() {
    return (
      <div id="sidebar" >
        <div class="ui icon input">
          <input
            onChange={this.handleChange}
            type="text"
            name= "searchTerm"
            placeholder="Search By Title..."
            value={this.props.searchTerm}
          />
          <i class="search icon"></i>
        </div>
        <br /><br /><CreatePoemButton />
        <PoemList />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    poemList: state.poemList,
    poemListFilter: state.poemListFilter,
    searchTerm: state.searchTerm
  }
}

function mapDispatchToProps(dispatch){
  return {
    setPoemList: (poemsArr) => {
      dispatch(setPoemList(poemsArr))
    },
    setPoemListFilter: (poemsArr) => {
      dispatch(setPoemListFilter(poemsArr))
    },
    controlledComponent: (event) => {
      dispatch(controlledComponent(event))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)

import React, { Component, Fragment } from 'react';
import { connect } from "react-redux"

class DisplayPoem extends Component {

  state = {
    clicked: false
  }

  handleUpdate = (event) => {
    event.preventDefault()
    const newPoem = this.props.poemList.find( poem => {
      return poem.id === this.props.currentPoem.id
    })
    newPoem.title = this.props.currentPoemTitle
    newPoem.body = this.props.currentPoemBody
    this.props.afterUpdateUpdateCurrentPoem(newPoem)
    this.props.afterUpdateUpdatePoemList(this.props.poemList)

    const config = {
        method:'PATCH',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({
            title: this.props.currentPoemTitle,
            body: this.props.currentPoemBody
        })
    }
      const url = `http://localhost:3000/poems/${this.props.currentPoem.id}`

      fetch(url,config)
        .then( r=>r.json() )
        .then( poem => {
            this.props.addPostToSidebar(poem)
          })
        .then( this.setState({clicked: false}) )
  }

  displayNoteOnClick = () => {
    return (
      <Fragment>
        <h3> {this.props.currentPoemTitle} </h3>
        <p> {this.props.currentPoemBody} </p>
        <button onClick={this.handleClick}> Edit Poem </button>
        <button onClick={this.deletePoemFromServer}> Delete Poem </button>
      </Fragment>
    )
  }

  handleClick = () => {
    this.setState({
      clicked:true
    })
  }

  renderUpdateForm = () => {

    return (
    <div id="poem-details" >
      <form onSubmit={this.handleUpdate}>
          Title:<br/><input
           id='note-title-input'
           name="currentPoemTitle"
           type='text'
           size="30"
           onChange={this.props.handleChange}
           value={this.props.currentPoemTitle} ></input><br/>
          Body:<br/><textarea
            id='note-body-input'
            name="currentPoemBody"
            rows="10"
            cols="50"
            onChange={this.props.handleChange}
            value={this.props.currentPoemBody}></textarea><br/>
          <button type='submit'>Update Poem</button>
      </form>
    </div>
    )
  }

  deletePoemFromServer = () => {
    const newPoemList = Array.from(this.props.poemList).filter( poem => {
      return poem.id !== this.props.currentPoem.id
    })

    fetch(`http://localhost:3000/poems/${this.props.currentPoem.id}`, {method:'DELETE'})
      .then( r=>r.json() )
      .then(console.log)
      .then(this.props.updatePoemList(newPoemList))
      .then(this.props.resetCurrentPoemState())
  }

  render() {
    return (
      <div>
        {this.state.clicked ? this.renderUpdateForm() : this.displayNoteOnClick() }
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
    handleChange: (event) => {
      dispatch({type: "TITLE_AND_BODY", payload: event})
    },
    resetCurrentPoemState: () => {
      dispatch({type: "RESET_CURRENT_POEM_STATE", payload: null})
    },
    afterUpdateUpdateCurrentPoem: (newPoem) => {
      dispatch({type: "UPDATE_AFTER_UPDATE", payload: newPoem})
    },
    afterUpdateUpdatePoemList: (poemList) => {
      dispatch({type: "UPDATE_POEMLIST_AFTER_UPDATE", payload: poemList})
    },
    addPostToSidebar: (poem) => {
      dispatch({type: "POST_TO_SIDEBAR", payload: poem})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayPoem)

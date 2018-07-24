import React, { Component } from 'react';
import { connect } from "react-redux"
import { form } from 'semantic-ui-react';
import Adapter from './Adapter';

class UpdatePoemForm extends Component {

  handleSubmit = (event) => {
    event.preventDefault()
    Adapter.patchPoem(this.props.currentPoemTitle, this.props.currentPoemBody, this.props.currentPoem)
      .then( poem => {
        const newPoemList = this.props.poemList.filter( poem => poem.id !== this.props.currentPoem.id)
        newPoemList.push(poem)
        this.props.updatePoemList(newPoemList)
        this.props.updateCurrentPoem(poem)
        this.props.setDisplayType()
      })
  }



  render() {
    console.log(this.props)
    return (
        <div id="poem-details">
          <form onSubmit={this.handleSubmit}>
              Title:<br/><input id='note-title-input'
               name="currentPoemTitle"
               type='text'
               size="30"
               onChange={this.props.handleChange}
               value={this.props.currentPoemTitle} /><br/>
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
  }

  function mapStateToProps(state) {
    return {
      currentPoem: state.currentPoem,
      currentPoemTitle: state.currentPoemTitle,
      currentPoemBody: state.currentPoemBody,
      poemList: state.poemList
    }
  }

  function mapDispatchToProps(dispatch){
    return {
      handleChange: (event) => {
        dispatch({type: "TITLE_AND_BODY", payload: event})
      },
      updatePoemList: (newPoemList) => {
        dispatch({type: "FILL_POEMLIST", payload: newPoemList})
      },
      setDisplayType: () => {
        dispatch({type: "SET_DISPLAY_TYPE", payload: "display"})
      },
      updateCurrentPoem: (poem) => {
        dispatch({type: "UPDATE_CURRENT_POEM", payload: poem})
      }

    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePoemForm)

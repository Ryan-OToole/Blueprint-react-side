import React, { Component } from 'react';
import { connect } from "react-redux"
import { form } from 'semantic-ui-react';
import Adapter from './Adapter';

class CreatePoemForm extends Component {

  handleSubmit = (event) => {
    event.preventDefault()
    Adapter.postPoem(this.props.title, this.props.body)
      .then( poem => {
        this.props.addToPoemList(poem)
        this.props.setCurrentPoem(poem)
      })
      .then(this.props.setDisplayType())
}
  render() {
    return (
        <div id="poem-details">
          <form onSubmit={this.handleSubmit}>
              Title:<br/><input id='note-title-input'
               name="title"
               type='text'
               size="30"
               onChange={this.props.handleChange}
               value={this.props.title} /><br/>
              Body:<br/><textarea
                id='note-body-input'
                name="body"
                rows="10"
                cols="50"
                onChange={this.props.handleChange}
                value={this.props.body}></textarea><br/>
              <button type='submit'>Create Poem</button>
          </form>
        </div>
      )
    }
  }

  function mapStateToProps(state) {
    return {
      title: state.title,
      body: state.body,
      poemList: state.poemList
    }
  }

  function mapDispatchToProps(dispatch){
    return {
      handleChange: (event) => {
        dispatch({type: "TITLE_AND_BODY", payload: event})
      },
      addToPoemList: (poem) => {
        dispatch({type: "ADD_TO_POEMLIST", payload: poem})
      },
      setDisplayType: () => {
        dispatch({type: "SET_DISPLAY_TYPE", payload: "display"})
      },
      setCurrentPoem: (poem) => {
        dispatch({type: "SET_CURRENT_POEM", payload: poem})
      }


    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(CreatePoemForm)

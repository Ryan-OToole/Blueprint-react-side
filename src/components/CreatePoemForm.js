import React, { Component } from 'react';
import { connect } from "react-redux"
import { form } from 'semantic-ui-react';
import Adapter from '../Adapter';
import { setPoemList, setCurrentPoem, controlledComponent, setDisplayType } from '../actions/index'

class CreatePoemForm extends Component {

  handleSubmit = (event) => {
    event.preventDefault()
    Adapter.postPoem(this.props.title, this.props.body, this.props.currentUser.id)
      .then( poem => {
        const poemListUpdated = Array.from(this.props.poemList)
        poemListUpdated.push(poem)
        this.props.updatePoemList(poemListUpdated)
        this.props.setCurrentPoem(poem)
        this.props.setDisplayType()
      })
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
      poemList: state.poemList,
      currentUser: state.currentUser
    }
  }

  function mapDispatchToProps(dispatch){
    return {
      handleChange: (event) => {
        dispatch(controlledComponent(event))
      },
      updatePoemList: (poemListUpdated) => {
        dispatch(setPoemList(poemListUpdated))
      },
      setDisplayType: () => {
        dispatch(setDisplayType("display"))
      },
      setCurrentPoem: (poem) => {
        dispatch(setCurrentPoem(poem))
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(CreatePoemForm)

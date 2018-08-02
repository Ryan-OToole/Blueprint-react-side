import React, { Component } from 'react';
import { connect } from "react-redux"
import { form, Button } from 'semantic-ui-react';
import Adapter from '../Adapter';
import { setPoemList, setCurrentPoem, controlledComponent, setDisplayType, clearCreateForm, setPoemListFilter } from '../actions/index'

class CreatePoemForm extends Component {

  handleSubmit = (event) => {
    event.preventDefault()
    Adapter.postPoem(this.props.title, this.props.body, this.props.currentUser.id)
      .then( poem => {
        const poemListUpdated = Array.from(this.props.poemList)
        poemListUpdated.unshift(poem)
        this.props.updatePoemList(poemListUpdated)
        this.props.setPoemListFilter(poemListUpdated)
        this.props.setCurrentPoem(poem)
        this.props.setDisplayType()
        this.props.clearCreateForm("")
      })
}


  render() {
    return (
        <div id="poem-details">
          <form onSubmit={this.handleSubmit}>
              <h3>Title:</h3><input id='note-title-input'
               name="title"
               type='text'
               size="30"
               onChange={this.props.handleChange}
               value={this.props.title} /><br/>
             <h3>Body:</h3><textarea
                id='note-body-input'
                name="body"
                rows="10"
                cols="50"
                onChange={this.props.handleChange}
                value={this.props.body}></textarea><br/>
              <Button basic color='yellow' type='submit'> Create Poem </Button>
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
      currentUser: state.currentUser,
      setPoemListFilter: state.poemListFilter
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
      setPoemListFilter: (poemsArr) => {
        dispatch(setPoemListFilter(poemsArr))
      },
      setDisplayType: () => {
        dispatch(setDisplayType("display"))
      },
      setCurrentPoem: (poem) => {
        dispatch(setCurrentPoem(poem))
      },
      clearCreateForm: (string) => {
        dispatch(clearCreateForm(string))
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(CreatePoemForm)

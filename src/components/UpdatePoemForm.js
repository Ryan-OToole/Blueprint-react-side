import React, { Component } from 'react';
import { connect } from "react-redux";
import { form, Button } from 'semantic-ui-react';
import Adapter from '../Adapter';
import { setPoemList, setCurrentPoem, controlledComponent, setDisplayType } from '../actions/index'

class UpdatePoemForm extends Component {

  handleSubmit = (event) => {
    event.preventDefault()
    Adapter.patchPoem(this.props.currentPoemTitle, this.props.currentPoemBody, this.props.currentPoem)
      .then( poem => {
        const newPoemList = this.props.poemList.filter( poem => poem.id !== this.props.currentPoem.id)
        newPoemList.unshift(poem)
        this.props.updatePoemList(newPoemList)
        this.props.setCurrentPoem(poem)
        this.props.setDisplayType()
      })
  }

  render() {
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
              <Button basic color='blue' type='submit'>Update Poem</Button>
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
        dispatch(controlledComponent(event))
      },
      updatePoemList: (newPoemList) => {
        dispatch(setPoemList(newPoemList))
      },
      setDisplayType: () => {
        dispatch(setDisplayType("display"))
      },
      setCurrentPoem: (poem) => {
        dispatch(setCurrentPoem(poem))
      }

    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePoemForm)

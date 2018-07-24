import React, { Component } from 'react';
import { connect } from "react-redux"
import { form } from 'semantic-ui-react';


class UpdatePoemForm extends Component {

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
              <button type='submit'>Create note</button>
          </form>
        </div>
      )
    }
  }

  function mapStateToProps(state) {
    return {
      currentPoem: state.currentPoem,
      currentPoemTitle: state.currentPoemTitle,
      currentPoemBody: state.currentPoemBody
    }
  }

  function mapDispatchToProps(dispatch){
    return {
      handleChange: (event) => {
        dispatch({type: "TITLE_AND_BODY", payload: event})
      },
      addToPoemList: (poem) => {
        dispatch({type: "ADD_TO_POEMLIST", payload: poem})
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePoemForm)

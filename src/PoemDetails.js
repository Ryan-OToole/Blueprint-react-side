import React, { Component } from 'react';
import { connect } from "react-redux"
import { form } from 'semantic-ui-react';

class PoemDetails extends Component {

  handleSubmit = (event) => {
    event.preventDefault()
    const config = {
      method: "POST",
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
          title: this.props.title,
          body: this.props.body,
          user_id:1
      })
    }
    fetch('http://localhost:3000/poems', config)
      .then( r=>r.json() )
      .then( poem => {
        console.log("get here poem:", poem)
        this.props.generateSidebar(poem)
      })
  }

  render() {
    return (
      <div id="poem-details" >
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
            <button type='submit'>Create note</button>
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
      generateSidebar: (poem) => {
        dispatch({type: "GENERATE_SIDEBAR", payload: poem})
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(PoemDetails)

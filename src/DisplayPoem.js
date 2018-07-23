import React, { Component, Fragment } from 'react';
import { connect } from "react-redux"

class DisplayPoem extends Component {

  state = {
    clicked: false
  }

  handleSubmit = (event) => {
    event.preventDefault()
  }



  handleEdit = (event) => {
    const config = {
        method:'PATCH',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({
            title: this.props.currentPoem.title,
            body: this.props.currentPoem.body
        })
    }
      const url = `http://localhost:3000/poems/${this.props.currentPoem.id}`
      fetch(url,config)
        .then( r=>r.json() )
        .then(console.log)
  }

  displayNoteOnClick = () => {
    return (
      <Fragment>
        <h3> {this.props.currentPoem.title} </h3>
        <p> {this.props.currentPoem.body} </p>
        <button onClick={this.renderUpdateForm}> Edit Poem </button>
        <button> Delete Poem </button>
      </Fragment>
    )
  }

  renderUpdateForm = () => {
    return (
    <div id="poem-details" >
      <form onSubmit={this.handleSubmit}>
          Title:<br/><input id='note-title-input'
           name="title"
           type='text'
           size="30"
           value={this.props.currentPoem.title} /><br/>
          Body:<br/><textarea
            id='note-body-input'
            name="body"
            rows="10"
            cols="50"
            value={this.props.currentPoem.body}></textarea><br/>
          <button type='submit'>Create note</button>
      </form>
    </div>
    )
  }

  render() {
    return (
      <div>
        {this.displayNoteOnClick()}
        {this.renderUpdateForm()}

      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    currentPoem: state.currentPoem
  }
}



export default connect(mapStateToProps)(DisplayPoem)

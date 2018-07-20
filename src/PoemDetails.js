import React, { Component } from 'react';
import { connect } from "react-redux"
import { form } from 'semantic-ui-react';

class PoemDetails extends Component {

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  render() {
    console.log(this.props.title)
    return (
      <div id="poem-details" >
        <form data-action='create-note'>
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
            <button
            type='submit'
            
            >Create note</button>
        </form>

      </div>
    )
  }


}

function mapStateToProps(state) {
  return {
    title: state.title,
    body: state.body
  }
}

function mapDispatchToProps(dispatch){
  return {
    handleChange: (event) => {
      dispatch({type: "TITLE_AND_BODY", payload: event})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PoemDetails)

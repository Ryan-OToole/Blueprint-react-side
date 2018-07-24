import React, { Component } from 'react';
import { connect } from 'react-redux';

class Poem extends Component {

  render() {
    return (
      <div
        onClick={() => {this.props.setCurrentPoem(this.props.poem)}}
        id={this.props.poem.id}
        >
        <h3>{this.props.poem.title}</h3>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      setCurrentPoem: (poem) => {
        dispatch({type: "SET_CURRENT_POEM", payload: poem})
    }
  }
}

export default connect(null, mapDispatchToProps)(Poem)

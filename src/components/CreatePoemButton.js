import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setDisplayType } from '../actions/index'

class CreatePoemButton extends Component {

  render() {
    return (
      <div>
        <button onClick={this.props.setDisplayType}>Create Poem</button>
      </div>
    )
  }
}

  function mapDispatchToProps(dispatch){
    return {
      setDisplayType: () => {
        dispatch(setDisplayType("create"))
    }
  }
}

export default connect(null, mapDispatchToProps)(CreatePoemButton)

import React, { Component } from 'react';
import { connect } from 'react-redux';

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
        dispatch({type: "SET_DISPLAY_TYPE", payload: "create"})
    }
  }
}

export default connect(null, mapDispatchToProps)(CreatePoemButton)

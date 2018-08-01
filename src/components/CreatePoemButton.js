import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setDisplayType } from '../actions/index'
import { Button } from 'semantic-ui-react'

class CreatePoemButton extends Component {

  render() {
    return (
      <div>
        <Button color='teal' onClick={this.props.setDisplayType}>Create Poem</Button>
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

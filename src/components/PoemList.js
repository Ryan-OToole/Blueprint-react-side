import React, { Component } from 'react';
import { connect } from 'react-redux';
import Poem from './Poem'

class PoemList extends Component {

  mapPoems = () => {
    return this.props.poemList.map( poem => {
      return <Poem poem={poem} key={poem.id} />
    })
  }

  render() {
    return (
      <div>
        {this.mapPoems()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    poemList: state.poemList
  }
}

export default connect(mapStateToProps)(PoemList)

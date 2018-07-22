import React, { Component } from 'react';
import { connect } from 'react-redux';



class Sidebar extends Component {

  componentDidMount() {
    fetch('http://localhost:3000/poems')
      .then( r=>r.json() )
      .then( poemsArray=> {
        this.props.generateSidebar(poemsArray)
      })
  }

  mapPoems = () => {
    return this.props.poemList.map( poem => {
      return <h3> {poem.title} </h3>
    })
  }

  render() {
    return (
      <div id="sidebar" >
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

const mapDispatchToProps = (dispatch) => {
  return {
      generateSidebar: (poemsArray) => {
        dispatch({type: "GENERATE_SIDEBAR", payload: poemsArray})
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)

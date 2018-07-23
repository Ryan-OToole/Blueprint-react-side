import React, { Component } from 'react';
import CreatePoemForm from './CreatePoemForm'
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
      return <h3 id={poem.id} key={poem.id} onClick={this.handleClick}> {poem.title} </h3>
    })
  }

  handleClick = (event) => {
    const clickedPoem = this.props.poemList.find( poem => {
      return poem.id.toString() === event.target.id
    })
    this.props.displayPoem(clickedPoem)
  }

  createPoemForm = () => {
    console.log("hey")
    // return <CreatePoemForm />
  }

  render() {
    return (
      <div id="sidebar" >
        <button onClick={this.createPoemForm}>Create Poem</button>

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
    },
      handleClick: (event) => {
        dispatch({type: "DISPLAY_POEM", payload: event})
      },
      displayPoem: (clickedPoem) => {
        dispatch({type: "DISPLAY_POEM", payload: clickedPoem})
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)

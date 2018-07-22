import React, { Component } from 'react';
import { connect } from 'react-redux';



class Sidebar extends Component {

  // componentDidMount() {
  //   fetch('http://localhost:3000/poems')
  //     .then( r=>r.json() )
  //     .then( poemsObj=> {
  //       this.props.poemList.push(poemsObj)
  //     })
  // }
  //


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

export default connect(mapStateToProps)(Sidebar)

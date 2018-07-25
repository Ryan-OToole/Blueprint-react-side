import React, { Component } from 'react';
import PoemList from './PoemList'
import CreatePoemButton from './CreatePoemButton'
import './App.css';

class Sidebar extends Component {

  render() {
    return (
      <div id="sidebar" >
        <CreatePoemButton />
        <PoemList />
      </div>
    )
  }
}

export default Sidebar

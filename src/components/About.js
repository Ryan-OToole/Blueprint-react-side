import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'

class About extends Component {

  componentWillMount() {
    document.body.className = 'background_image'
  }

  render() {
    return (
      <div id="about">
        <h2>Markov Madness</h2>
        <img src='https://www.soliantconsulting.com/wp-content/uploads/2013/02/Using-JavaScript-generate-text.png' alt="" height="350" width="750" />
        <p>App title here allows users to create poems and run them through a Markov Generator, which uses an algorithim that splits a body of text into pieces the size of which is dictated by input into the function.</p>
        <p>This tool is extremely useful for creative idea generation.  A user can create, read, update, and delete poems.  They can send poems into the generator with the click of a button;  at this point they have the option to add supplemental text from different sources by clicking another button.  The user can then generate output, save that output, then edit it or delete it.</p>
        <p>App title here allows users to share poems through a community link.  This feature encourages users to collaborate in their creative endevors.</p>
      </div>
    )
  }
}

export default About

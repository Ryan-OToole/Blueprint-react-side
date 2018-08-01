import React, { Component } from 'react';


class About extends Component {

  componentWillMount() {
    document.body.className = 'background_image'
  }

  render() {
    return (
      <div id="about">
        <h2>Markov Madness</h2>
        <img src='https://www.soliantconsulting.com/wp-content/uploads/2013/02/Using-JavaScript-generate-text.png' alt="" height="350" width="750" />
        <h3>The Christmas Wish, The Client, The Client List, The Clique, The Cold Heart of a Killer, The Colony, The Color of Courage, The Color of Love: Jaceys Story, The Color Purple, The Con</h3>
        <p>Markov Madness allows users to create poems and run them through a Markov generator, which uses an algorithim that splits a body of text into pieces the size of which is dictated by input into the function (i do this in the backend).</p>
        <p>Consider the above movie titles.  The diagram illustrates how a Markov generator works.  It finds patterns in the input it recieves, figures out the probability of one word (or group of words) being followed by another word (or group of words) then randomly fills in endings while taking the probability of that event happening into account.</p>
        <p>A Markov generator is extremely useful for creative idea generation.  With this app a user can create, read, update, and delete poems.  They can send poems into the generator with the click of a button;  at this point they have the option to add supplemental text from different sources by clicking another button.  The user can then generate output, save that output, then edit it or delete it.</p>
        <p>Markov Madness shares all poems through a community link.  This feature encourages users to collaborate in their creative endevors, and offers new users plenty of material to get started.</p>
      </div>
    )
  }
}

export default About

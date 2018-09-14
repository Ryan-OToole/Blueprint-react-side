## Screenshots
![Screenshot](https://user-images.githubusercontent.com/35941205/45562301-0fe21200-b818-11e8-80d4-6e470f1b8777.png)

## Jumbler
Jumbler allows user to create, share, and jumble poems.  The jumble feature makes use of a Markov generator, which finds patterns in text input and randomly mixes the patterns up.

## Motivation
Jumbler was born out of the frustration and inefficiency i experienced while using various Markov generators. A Markov generator is an extremely useful tool for creative idea generation.  I constantly used one in grad school for poetry, but found the process of copy and pasting, combining, and sharing poems to be extremely cumbersome.  Jumbler utilizes a Markov generator and streamlines the the aforementioned processes that i found to be so onerous.

## Tech/framework used
<b>Built with</b>
- Ruby on Rails
- Javascript
- React
- Redux

## Features
Full CRUD functionality.  A user can Create, Read, Update, and Delete poems.  Search bar allows users to search for poems by title.  Custom routing allows users access all poems through the community tab.  User can run poems through the Jumbler, and re-run the same poem with a click of the Rejumble button.  User can add external sources to the text input to be jumbled with the click of a button; this helps generate more dynamic output.

## Installation
Run bundle install.  Run Ruby on Rails backend on port 3000, rails s.  Run React frontend on port 4000, npm start PORT=4000.

{
  "name": "my-react-blueprint",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^16.4.1",
    "react-dom": "^16.4.1",
    "react-redux": "^5.0.7",
    "react-router": "^4.3.1",
    "react-router-dom": "^4.3.1",
    "react-scripts": "1.1.4",
    "redux": "^4.0.0",
    "semantic-ui": "^2.3.3",
    "semantic-ui-react": "^0.82.0"
  },
  "scripts": {
    "start": "PORT=4000 react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  },
  "devDependencies": {
    "redux-devtools-extension": "^2.13.5"
  }
}

## How to use?
Demo found [here](https://www.youtube.com/watch?v=qHk985QTRnY&feature=youtu.be)

## Credits
This site, markomposition, is the best site that i found that utilizes a Markov generator for making poetry.  Markomposition helped me envision how i wanted my app to function.
http://mariechatfield.com/markomposition/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';

const initialState = {
  poemList: [],
  currentPoem: {},
  markovState: [],
  alive: true
}

const action = { type: "CLICK_EVENT"}

const reducer = (state = initialState, action) => {

  switch(action.type) {
    case "CLICK_EVENT":
      return {...state, alive: false}
    default:
      return state
  }
}

const store = createStore(reducer);

store.dispatch(action);




ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

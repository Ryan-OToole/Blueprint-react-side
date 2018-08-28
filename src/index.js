import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import reducer from "./reducers/reducer"
import { Provider } from "react-redux"
import { BrowserRouter } from 'react-router-dom'
import { devToolsEnhancer } from 'redux-devtools-extension';
// import 'semantic-ui-css/semantic.min.css'

const store = createStore(reducer, /* preloadedState, */ devToolsEnhancer(
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
));

ReactDOM.render(<BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();

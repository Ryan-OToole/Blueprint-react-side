import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import reducer from "./reducers/reducer"
import { Provider } from "react-redux"
import { BrowserRouter } from 'react-router-dom'
// import 'semantic-ui-css/semantic.min.css'

const store = createStore(reducer)

ReactDOM.render(<BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();

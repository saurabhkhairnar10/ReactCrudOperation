import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from "redux";
import { contactReducer } from './redux/reducers/contactReducer';
import { Provider } from 'react-redux';


const store = createStore(contactReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
  <Provider store={store}>
  <Router>
    <App />
  </Router>  
  </Provider>,
  document.getElementById('root')
);


reportWebVitals();
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { Provider } from 'react-redux'
import { store } from './store'
import './index.css';



import firebase from 'firebase'

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBwGjq0FA_rCc-IvFk3XmrQ34NR_lGZP98",
    authDomain: "fyp-project-9b5af.firebaseapp.com",
    databaseURL: "https://fyp-project-9b5af.firebaseio.com",
    projectId: "fyp-project-9b5af",
    storageBucket: "fyp-project-9b5af.appspot.com",
    messagingSenderId: "58506419089"
  };
  firebase.initializeApp(config);



ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);

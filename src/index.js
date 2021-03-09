import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";



ReactDOM.render(
  // <React.StrictMode> - violations on react rules
  // #1 arg what we want to create
  // React.createElement(
    // "ul", // #1
    // null, // #2 properties to be created
    // React.createElement("h1",{style: {color:"blue"}},"Monday")), // element, props, value
    // React.createElement("li",null,"Monday"), // element, props, value
    // React.createElement("li",null,"Tuesday"),
    // React.createElement("li",null,"Wednesday"),
    // React.createElement("li",null,"Thursday")
    <Router>
      <App />
    </Router>
    // JSX Rule:
    // render only one component
    // we cannot render sibling COMPONENTS unless wrapped in another tag (div)
    //<App /><AppTwo />

  ,
  // #2 arg where we want to put it
  document.getElementById('root')
);


// REACT FRAGMENT
// - as a wrapper and not add element in DOM
// - shorthand: <>

// ROUTER
// - react-router@next & react-router-dom@next
// - routes tells the router which components to render whenever the location changes
// <Router> = router

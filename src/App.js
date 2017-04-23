import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router';

const App1 = (props) => {
  return (
   
    <div>
      
      {props.children}
   
   
    </div>
  );
};

/*
var Home = reqire('./Home');
var Top10 = reqire('./Top10');
var ContactUs = reqire('./ContactUs');
*/
var Navigbar = require('./Navigbar');
//var Footer = require('./Footer');
var Movies = require('./Movies');
// Search
//var Search = require('./Search');

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigbar />


        <Movies search={this.movieSearchTerm} />

      </div>
    );
  }
}

export default App;
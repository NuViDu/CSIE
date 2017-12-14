import React, { Component } from 'react';
import Header from './Containers/Header';
import Footer from './Containers/Footer';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Footer/>
      </div>
    );
  }
}

export default App;

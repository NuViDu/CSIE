import React, { Component } from 'react';
import Header from './Containers/Header';
import Footer from './Containers/Footer';
import Containers from './Containers';
import About from './Containers/Screen/About';
import Home from './Containers/Screen/Home';
import Contact from './Containers/Screen/Home';
import Lib from './Containers/Screen/Library';
import Projects from './Containers/Screen/Projects';
import Updates from './Containers/Screen/Updates';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Containers} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/library' component={Lib} />
          <Route path='/projects' component={Projects} />
          <Route path='/updates' component={Updates} />
        </div>
      </Router>
    );
  }
}

export default App;

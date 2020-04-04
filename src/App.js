import React from 'react';
import './App.css';
import Home from './containers/Home';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ContactUs from './containers/ContactUs';
import Post from './containers/Post';
import AboutUs from './containers/AboutUs';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/post" component={Post} />
        <Route path="/about-us" component={AboutUs} />
      </Router>
    </div>
  );
}

export default App;

import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import logo from './logo.svg';
import Home from './component/Home';
import About from './component/About';
import Topics from './component/Topics';
import TestArea from './component/TestArea';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        nav:['首页','A页面','B页面']
    };
  }
  render() {
    return (
      <Router>
        <div className="App" style={{backgroundColor: '#282c34'}}>
          <Route exact path="/" component={Home} />
          <Route path="/about/:id" name="Rub" component={About} />
          <Route path="/topics" component={Topics} />
          <Route path="/testArea" component={TestArea} />
          <div className="navFoot">
            <ul>
              <li><Link to="/">{this.state.nav[0]}</Link></li>
              <li><Link to="/about/2333">{this.state.nav[1]}</Link></li>
              <li><Link to="/topics">{this.state.nav[2]}</Link></li>
            </ul>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

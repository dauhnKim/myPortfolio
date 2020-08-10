import React, { Component } from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import { render } from 'react-dom';
import Header from './components/Header';
import About from './routes/About';

class App extends Component {
  state = { time : null };

  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  render() {
    return (
      <HashRouter>
        <Header />
        <Route path="/about" component={About} />
        <span className="time">{ this.state.time }</span>
      </HashRouter>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { render } from 'react-dom';
import Header from './components/Header';
import Home from './routes/Home';
import About from './routes/About';
import Work from './routes/Work';
import Resume from './routes/Resume';
import Contact from './routes/Contact';

class App extends Component {
  state = { time : null };

  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  render() {
    return (
      <div>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Header />
          <Route path="/" exact={true} component={Home} />
          <Route path="/about" component={About} />
          <Route path="/work" component={Work} />
          <Route path="/resume" component={Resume} />
          <Route path="/contact" component={Contact} />
        </BrowserRoute>
        <span className="time">{ this.state.time }</span>
      </div>
    );
  }
}

export default App;

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './logo2.png';

class Header extends React.Component {
  container = React.createRef();

  state = {
    open: false,
  }
  handleButtonClick = () => {
    this.setState(state => {
      return {
        open: !state.open,
      };
    })
  }
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }
  handleClickOutside = event => {
    if (this.container.current && !this.container.current.contains(event.target)) {
      this.setState({
        open: false,
      });
    }
  };

  render() {
      return (
              <header className="header" ref={this.container}>
                <h1>
                  <Link to="/"><img src={logo} alt='logo'/></Link>
                </h1>

                <div className="dropdown max-screen">
                  <ul className="nav">
                    <li><Link to="/about">ABOUT</Link></li>
                    <li><Link to="/work">WORK</Link></li>
                    <li><Link to="/resume">RESUME</Link></li>
                    <li><Link to="/contact" className="last_a">CONTACT</Link></li>
                  </ul>
                </div>

                <button type="button" className="button"
                  onClick={ this.handleButtonClick }>
                  MENU
                </button>
                { this.state.open && (
                  <div className="dropdown">
                    <ul className="nav">
                      <li><Link to="/about">ABOUT</Link></li>
                      <li><Link to="/work">WORK</Link></li>
                      <li><Link to="/resume">RESUME</Link></li>
                      <li><Link to="/contact" className="last_a">CONTACT</Link></li>
                    </ul>
                  </div>
                )}

              </header>
      );
  }
}

export default Header;

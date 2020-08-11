import React from 'react';
import './About.css';
import about from './images/about.png';
function About() {
  return (
    <main className="about_main">
      <div className="about_container">
          <h1>About</h1>
          <div className="about_img">
            <img src={about} alt='profile photo'/>
          </div>
          <div className="about_contents">
            <h2>A bit about <i>myself</i></h2>
            <p>
              Hi, <br/>
              I'm Dauhn — Entry level front end developer. <br/>
              I love minimalist design and functional user experience. <br/>
              And creating clean code is my priority.  <br/>
              Not that easy for now, but I always try to.
            </p>
            <h2>Things has <i>inspired</i> me</h2>
            <p>
              Country — Singapore <br/>
              Movie — Trainwreck <br/>
              Book — Unacknowledged <br/>
              Language — JavaScript, Spanish and French <br/>
            </p>
          </div>
      </div>
    </main>
  );
}

export default About;

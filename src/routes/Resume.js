import React from 'react';
import './Resume.css';

function Resume() {
  return(
    <main className="resume_main">
      <div className="resume_container">
          <h1>Resume</h1>
          <section className="edu">
              <div className="resume_contents">
                <h2>Education</h2>
                <ul>
                  <li className="when">03.2020 - 08.2020</li>
                  <li className="what">MSA App. Expert Training Course</li>
                  <li className="where">Korea Software Technology Association</li>
                  <li>Capstone Project Planning</li>
                  <li>Entry Level Java</li>
                  <li>Web & Server</li>
                  <li>UI Design</li>
                </ul>
              </div>
              <div className="resume_contents">
                <ul>
                  <li className="when">08.2019 - 01.2020</li>
                  <li className="what">UI / UX Web Design & Development</li>
                  <li className="where">EZEN Computer Academy</li>
                  <li>Graphic Design</li>
                  <li>UI / UX Design</li>
                  <li>Web Publishing</li>
                </ul>
              </div>
              <div className="resume_contents">
                <ul>
                  <li className="when">03.2011 - 02.2017</li>
                  <li className="what">Tourism English Interpretaion</li>
                  <li className="where">Kongju National Univ.</li>
                  <li>English Interpretaion</li>
                  <li>English Translation</li>
                  <li>Business English</li>
                  <li>Tourism & Hospitality</li>
                </ul>
              </div>
          </section>
          <section className="exp">
              <div className="resume_contents">
                <h2>Int. Experience</h2>
                <ul>
                  <li className="when">05.2017 - 06.2019</li>
                  <li className="what">Sejong Korean Lang. School</li>
                  <li className="where">Singapore</li>
                  <li>Teaching Korean Language</li>
                  <li>Planning Lessons</li>
                  <li>Assessing Student Progress</li>
                </ul>
              </div>
              <div className="resume_contents">
                <ul>
                  <li className="when">06.2014 - 01.2015</li>
                  <li className="what">MEC Language School</li>
                  <li className="where">Ireland</li>
                  <li>Concentrating on Learning English</li>
                </ul>
              </div>
              <div className="resume_contents">
                <ul>
                  <li className="when">03.2012 - 07.2012</li>
                  <li className="what">Bulacan State Univ.</li>
                  <li className="where">The Philippines</li>
                  <li>Teaching Korean Language</li>
                  <li>Learning English</li>
                </ul>
              </div>
          </section>
          <section className="skl">
              <div className="resume_contents">
                <h2>Skills</h2>
                <ul>
                  <li className="what">Graphic Design</li>
                  <li>Photoshop</li>
                  <li>Illustrator</li>
                  <li>Procreate</li>
                </ul>
              </div>
              <div className="resume_contents">
                <ul>
                  <li className="what">Front-End</li>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JavaScript</li>
                  <li>jQuery</li>
                  <li>React</li>
                </ul>
              </div>
              <div className="resume_contents">
                <ul>
                  <li className="what">Back-End</li>
                  <li>Java JSP</li>
                  <li>Servlet</li>
                  <li>Spring Tool Suite</li>
                  <li>MySQL</li>
                </ul>
              </div>
          </section>
      </div>
    </main>
  );
}

export default Resume;

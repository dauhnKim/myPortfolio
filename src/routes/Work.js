import React, { useRef } from 'react';
import './Work.css';
import pf01 from './images/pf01.png';
import pf02 from './images/pf02.png';
import pf03 from './images/pf03.png';

const Work = () => {

  const titleRef = useRef()

  function handleBackClick() {
    titleRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return(
    <main className="work_main">
      <div className="work_container">
        <h1>Work</h1>
        <h2>
            <a target="_blank" href="https://dauhnkim.github.io/myportfolio/#/">
            Portfolio Ver.01</a>
        </h2>
        <a target="_blank" href="https://dauhnkim.github.io/myportfolio/#/">View</a>
        <ul className="work_explain">
          <li>HTML5 · CSS3</li>
          <li>JS · JQUERY</li>
          <li>PHP</li>
          <li>
            <button className="arrow" onClick={handleBackClick}></button>
          </li>
        </ul>
      </div>
      <div className="work_photo">
        <h3 ref={titleRef}>Dauhn KIM</h3>
        <p className="description">
          This is my first portfolio website including 7 small projects more.
          <br/> Tried to keep it simple but delicate.
          <br/> While I was building this, it got me familiar with using basic JS.
        </p>
        <ul className="work_photo_ul">
          <li><img src={pf01}/></li>
          <li><img src={pf02}/></li>
          <li><img src={pf03}/></li>
        </ul>
      </div>
    </main>
  );
}

export default Work;

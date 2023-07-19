// Section.js
import './App.css';
import cppLogo from './logos/cpp_logo.png';
import cLogo from './logos/c_logo.png';
import pythonLogo from './logos/python_logo.png';
import htmlLogo from './logos/html_logo.png';
import cssLogo from './logos/css_logo.png';
import jsLogo from './logos/js_logo.png';
import reactLogo from './logos/react_logo.png';
import sqlLogo from './logos/sql_logo.png';
import JamesLim from './JamesLim.png';
import ImageSlider from './ImageSlider';
import Image1 from './SimCity/introscreen.png';
import Image2 from './SimCity/mainscreen.png';
import Image3 from './SimCity/Endgame.png';
import Image4 from './UniLink/myClubs.jpg';
import Image5 from './UniLink/createEvents.jpg';
import Image6 from './UniLink/manageClubs.jpg';
import Image7 from './UniLink/manageMembers.jpg';
import Image8 from './UniLink/viewClubs.png';
import Image9 from './UniLink/createPost.jpg';
import UniLink from './UniLink/UniLinkLogo.png';
import React, { useContext, useEffect, useRef } from 'react';
import ActiveSectionContext from './ActiveSectionContext';

function Section({ id, name, children }) {
  const { setActiveSection } = useContext(ActiveSectionContext);
  const ref = useRef();

  const simCityImages = [
    Image1,
    Image2,
    Image3
  ];

  const UniLinkImages = [
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
  ];
  

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection(id);
        }
      },
      { threshold: 0.7 }  // Adjust this value as needed
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [id, setActiveSection]);

  let content;
  if (id === "Welcome") {
    content = (
      <div className="about-me-container">
        <div className="about-me-left">
          <div className="about-me-title">
            <img src={JamesLim} alt="JamesLim" className="name"/>
          </div>
          <div className="about-me-subtitle">
            Computer Science Undergraduate
          </div>
          <div className="about-me-description">
            Passionate in Full-Stack Development with Skills in 
          </div>
          <div className="bunch-of-logos">
            <img src={cppLogo} alt="C++" className="logo"/>
            <img src={cLogo} alt="C" className="logo"/>
            <img src={pythonLogo} alt="Python" className="logo"/>
            <img src={htmlLogo} alt="HTML" className="logo"/>
            <img src={cssLogo} alt="CSS" className="logo" style={{width: 23}}/>
            <img src={jsLogo} alt="JS" className="logo" style={{width: 33}}/>
            <img src={reactLogo} alt="React" className="logo" style={{width: 40}}/>
            <img src={sqlLogo} alt="sql" className="logo" style={{width: 30}}/>
          </div>
        </div>
        <div className="bouncing-container">
          <p className="bouncing-text">Check Out my Projects</p>
          <div className="bouncing-arrow">&#8595;</div>
        </div>
      </div>
    );
  } else if (id === "SimCity 1989") {
    content = (
      <div className="SimCity-container">
        <div className="SimCity-left">
          <div className="SimCity-title">
            SimCity 1989 in C++
          </div>
          <div className="about-me-description">
            <ul>
              <li>Working collaboratively, we created SimCity 1989 with a C++ reincarnation.</li>
              <li>Featuring a grid-based map and interactive text inputs.</li>
              <li>Each house, uniquely generated at command such as 'B7 House', is characterized by distinct attributes and dependent on key resources.</li>
              <li>This project served as a significant milestone in advancing my understanding of Object-Oriented Programming (OOP)</li>
            </ul>
          </div>
          <div className="bunch-of-logos">
            <img src={cppLogo} alt="C++" className="logo"/>
          </div>
        </div>
        <div className="SimCity-right">
          <ImageSlider className="SimCity-images" images={simCityImages}/>
        </div>
      </div>
    );
  } else if (id === "UniLink") {
    content = (
      <div className="UniLink-container">
        <div className="UniLink-left">
          <div className="UniLink-title">
          <img src={UniLink} alt="UniLink" className="UniLink-logo"/>
          </div>
          <div className="about-me-description">
            <ul>
              <li>Learnt HTML, CSS, JS, and SQL through the UniLink website project.</li>
              <li>Enabled effortless management of user information.</li>
              <li>Facilitated club joining and staying updated with relevant club information.</li>
              <li>Displayed and RSVP'd for upcoming club events.</li>
              <li>Provided club managers with login capabilities to manage user information and view members.</li>
              <li>Empowered system admins with comprehensive control over users, clubs, and admins.</li>
              <li>Was put in charge of designing unique UI and FrontEnd entirely</li>
            </ul>
          </div>
          <div className="bunch-of-logos">
            <img src={htmlLogo} alt="HTML" className="logo"/>
            <img src={cssLogo} alt="CSS" className="logo" style={{width: 23}}/>
            <img src={jsLogo} alt="JS" className="logo" style={{width: 33}}/>
            <img src={sqlLogo} alt="sql" className="logo" style={{width: 30}}/>
          </div>
        </div>
        <div className="UniLink-right">
          <ImageSlider className="UniLink-images" images={UniLinkImages}/>
        </div>
      </div>
    );
  }

  return (
    <div ref={ref} id={id} className="Section">
      {content}
    </div>
  );
}

export default Section;

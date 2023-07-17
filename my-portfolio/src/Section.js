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
import React, { useContext, useEffect, useRef } from 'react';
import ActiveSectionContext from './ActiveSectionContext';

function Section({ id, name, children }) {
  const { setActiveSection } = useContext(ActiveSectionContext);
  const ref = useRef();

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
            JAMES LIM
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
          <img src={cssLogo} alt="CSS" className="logo" style={{width: 33}}/>
          <img src={jsLogo} alt="JS" className="logo" style={{width: 50}}/>
          <img src={reactLogo} alt="React" className="logo" style={{width: 55}}/>
          <img src={sqlLogo} alt="sql" className="logo" style={{width: 42}}/>
          </div>
        </div>
        <div className="about-me-right">
          <img src="your_image_url_here" alt="James Lim" className="about-me-image"/>
        </div>
      </div>
    );
  } else if (id === "Project 1") {
    content = (
      <div>
        <p>This is Project 1.</p>
      </div>
    );
  } else if (id === "Project 2") {
    content = (
      <div>
        <p>This is Project 2.</p>
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

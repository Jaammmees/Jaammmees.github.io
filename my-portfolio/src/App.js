import './App.css';
import React, {useState, useEffect, useRef} from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import Sidebar from './Sidebar';
import Main from './Main';
import ActiveSectionContext from './ActiveSectionContext';

function App() {
  const [activeSection, setActiveSection] = useState("");
  const [bgColor, setBgColor] = useState("#ffffff"); //default color
  const observer = useRef();

  useEffect(() => {
    observer.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          switch (entry.target.id) {
            case "Welcome":
              setBgColor('#FAF3DD');
              break;
            case "SimCity 1989":
              setBgColor('#FFB85C');
              break;
            case "UniLink":
              setBgColor('#b7bfc8');
              break;
            default:
              setBgColor('#ffffff');
          }
        }
      },
      { threshold: 0.7 }
    );

    const welcomeElement = document.getElementById('Welcome');
    const project1Element = document.getElementById('SimCity 1989');
    const project2Element = document.getElementById('UniLink');
    observer.current.observe(welcomeElement);
    observer.current.observe(project1Element);
    observer.current.observe(project2Element);

    return () => {
      if (observer.current) {
        observer.current.unobserve(welcomeElement);
        observer.current.unobserve(project1Element);
        observer.current.unobserve(project2Element);
      }
    };
  }, []);

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      <div className="App">
        <Sidebar />
        <Main bgColor={bgColor} />
      </div>
    </ActiveSectionContext.Provider>
  );
}

export default App;

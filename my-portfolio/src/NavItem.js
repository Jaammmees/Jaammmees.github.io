// NavItem.js
import React, { useContext } from 'react';
import ActiveSectionContext from './ActiveSectionContext';

function NavItem({ name }) {
  const { activeSection } = useContext(ActiveSectionContext);
  const isActive = name === activeSection;

  const handleClick = () => {
    console.log(`Clicked on ${name}`);
    const element = document.getElementById(name);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`NavItem ${isActive ? 'active' : ''}`} onClick={handleClick}>
      {name}
    </div>
  );
}

export default NavItem;

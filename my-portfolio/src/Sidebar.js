// Sidebar.js
import React from 'react';
import NavItem from './NavItem';
import SocialLink from './SocialLink';
import { ReactComponent as Logo } from './signature.svg';

function Sidebar() {
  return (
    <div className="Sidebar">
        <div className="Sidebar-Spacer">
          <Logo />  
        </div> 
        <div className="Sidebar-Navigation">
            <NavItem name="Welcome" />
            <NavItem name="SimCity 1989" />
            <NavItem name="UniLink" />
        </div>
        <div className="SideBar-Footer">
            <SocialLink platform="GitHub" url="https://github.com/Jaammmees" />
            <SocialLink platform="LinkedIn" url="https://linkedin.com/in/james-lim2002" />
            <SocialLink platform="Instagram" url="https://instagram.com/jammes.lim" />
        </div>
    </div>
  );
}

export default Sidebar;
// SocialLink.js
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";


function SocialLink({ platform, url }) {
  let icon;

  switch (platform) {
    case "GitHub":
      icon = faGithub;
      break;
    case "LinkedIn":
      icon = faLinkedin;
      break;
    case "Instagram":
      icon = faInstagram;
      break;
    default:
      icon = null;
  }

  return (
    <a href={url} target="_blank" rel="noreferrer" className="SocialLink">
      <FontAwesomeIcon icon={icon} />
    </a>
  );
}

export default SocialLink;
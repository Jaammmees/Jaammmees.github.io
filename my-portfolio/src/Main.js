import React from 'react';
import Section from './Section';

function Main({ bgColor }) {
  return (
    <div className="Main" style={{backgroundColor: bgColor}}>
      <Section id="Welcome" name="Welcome" />
      <Section id="Project 1"name="Project 1" />
      <Section id="Project 2" name="Project 2" />
    </div>
  );
}

export default Main;

import React from 'react';
import Section from './Section';

function Main({ bgColor }) {
  return (
    <div className="Main" style={{backgroundColor: bgColor}}>
      <Section id="Welcome" name="Welcome" />
      <Section id="SimCity 1989"name="SimCity 1989" />
      <Section id="UniLink" name="UniLink" />
    </div>
  );
}

export default Main;

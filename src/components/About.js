import React from "react";

const image = "https://i.imgur.com/mV8PQxj.gif";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I am a passionate web developer who loves creating projects!</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;

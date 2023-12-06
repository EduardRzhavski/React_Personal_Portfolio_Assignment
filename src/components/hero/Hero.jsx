import React from 'react';
import './hero.css';

export default function Hero() {
  return <section id="hero">
      <div className="text-container">
      <h2>Hi everyone and wellcome!</h2>
      <h3>I'm Eduard - FullStack Web Developer</h3>
      <p>I am a passionate and versatile full-stack developer with a love for crafting meaningful digital experiences. My journey in the world of web development has been an exciting adventure, and I'm thrilled to share some of my work with you.</p>
      </div>
      <div className="img-container">
      <img src={"./src/Addressing-the-pressure-to-man-up-warren-wong-uuVguyksViA-unsplash4.jpg"}/>
      </div>
  </section>;
}
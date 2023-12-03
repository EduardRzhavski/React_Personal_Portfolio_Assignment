import React from 'react';
import './heroStyles.module.css';

export default function Hero() {
  return <section className="hero" id="hero">
      <div className="text-container">
      <h2>Hi everyone and wellcome!</h2>
      <p>I'm Eduard</p>
      <p>FullStack-Web-Developer</p>
      </div>
      <div className="img-container">
      <img src={"./Addressing-the-pressure-to-man-up-warren-wong-uuVguyksViA-unsplash4 (1).jpg"}/>
      </div>
  </section>;
}
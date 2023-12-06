import React from "react";
import Form from "./Form";
import './contactform.css'

export default function Contact() {
  return (
    <>
    <main id="contact" className="contact-container">
      <h1 id="title">Contact Me</h1>
      <div className="form-content-container">
      <section className="contact">
        <p className="animate__animated animate__zoomInDown">
          Feel free to reach out! Whether you have questions, are interested in
          discussing a potential collaboration, or simply want to say hello,
          your thoughts are important to me. Your feedback and inquiries
          contribute to the ongoing conversation of innovation. Please take a
          moment to use the form below to share your message, and I'll make it a
          priority to respond promptly.
        </p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/" target="_blank">
            <img src="path/to/linkedin-icon.png"/>
          </a>
          <a href="https://twitter.com/" target="_blank">
            <img src="path/to/twitter-icon.png"/>
          </a>
          <a href="https://github.com/" target="_blank">
            <img src="path/to/github-icon.png"/>
          </a>
        </div>
        <p>
          I look forward to hearing from you and exploring new opportunities together!
        </p>
        
        </section>
        <Form />
        </div>
      
    </main>
    </>
  );
}
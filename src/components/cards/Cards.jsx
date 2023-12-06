import React from 'react';
import './cards.css'; 

const Card = ({ title, description, mainLink, secondaryLink, imgSrc }) => {
  return (
    <div id="card">
      <h2>{title}</h2>
      <img src={imgSrc} alt={title} className="project-image" />
      <p>{description}</p>
      <div className="card-links">
        <a href={mainLink} target="_blank">
          GitHub
        </a>
        <a href={secondaryLink} target="_blank">
        Netlify
        </a>
      </div>
    </div>
  );
};

const Cards = () => {
  const projects = [
    { id: 1, title: "Project 1", description: "Description of Project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", mainLink: "#project1", secondaryLink: "path/to/secondary-link1"},
    { id: 2, title: "Project 2", description: "Description of Project 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", mainLink: "#project2", secondaryLink: "path/to/secondary-link2"},
    { id: 3, title: "Project 3", description: "Description of Project 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", mainLink: "#project3", secondaryLink: "path/to/secondary-link3"},
  ];

  return (
    <>
    <div className="card-container">
    <h1>latest Projects</h1>
    <section className="cards">
      {projects.map((project) => (
        <Card key={project.id} {...project} />
      ))}
    </section>
    </div>
   
    </>
  );
};

export { Cards };

import React from 'react';
import './cards.css'; 

const Cards = () => {
  return (
    <section className="cards">
      <Card
        title="Project 1"
        description="Description of Project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        link="#project1"
      />
      <Card
        title="Project 2"
        description="Description of Project 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        link="#project2"
      />
      <Card
        title="Project 3"
        description="Description of Project 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        link="#project3"
      />
    </section>
  );
};

const Card = ({ title, description, link }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Learn More
      </a>
    </div>
  );
};

export { Cards, Card };

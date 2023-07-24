import React from 'react';

const ProjectCard = ({ title, description, githubRepo }) => {
  return (
    <div style={{ margin: '20px', border: '1px solid #ccc', padding: '10px' }}>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={githubRepo} target="_blank" rel="noopener noreferrer">
        GitHub Repository
      </a>
    </div>
  );
};

export default ProjectCard;

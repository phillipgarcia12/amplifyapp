import React from 'react';

const ProjectCard = ({ title, description, githubRepo }) => {
  return (
    <div
      style={{
        margin: '20px',
        border: '1px solid #ccc',
        padding: '10px',
        maxWidth: '300px', // Set a maximum width for the card
        height: '100%', // Allow the card to expand vertically
        display: 'flex',
        flexDirection: 'column', // Stack content vertically
        justifyContent: 'space-between', // Align items with space in-between
      }}
    >
      <h3>{title}</h3>
      <p style={{ flex: '1', marginBottom: '10px' }}>{description}</p>
      <a href={githubRepo} target="_blank" rel="noopener noreferrer">
        GitHub Repository
      </a>
    </div>
  );
};

export default ProjectCard;

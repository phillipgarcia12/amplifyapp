import React from 'react';
import ProjectCard from './projectCard';
import projects from './projects';

const ProjectsList = () => {
  return (
    <div
    
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
    <h2>
      My Projects
    </h2>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          githubRepo={project.githubRepo}
        />
      ))}
    </div>
  );
};

export default ProjectsList;

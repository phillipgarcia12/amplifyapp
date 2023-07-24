import React from 'react';
import ProjectsList from './projectList';
import PersonalSection from './personalSection';

function App() {
  return (
    <div>
      <header>
        <h1>My Projects</h1>
      </header>
      <main>
        <ProjectsList />
        <PersonalSection />
      </main>
    </div>
  );
}

export default App;

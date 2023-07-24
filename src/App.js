import React from 'react';
import ProjectsList from './projectList';
import PersonalSection from './personalSection';
import  './styling.css';

function App() {
  return (
    <div>
      <header>
        <h1>Phillip Garcia's Personal Website</h1>
      </header>
      <main>
        <ProjectsList />
        <PersonalSection />
      </main>
    </div>
  );
}

export default App;

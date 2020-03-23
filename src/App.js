import React from 'react';
import { Header } from './components/layout/Header';
import { Content } from './components/layout/Content';
import { SelectedProjectProvider } from './context/selected-projects-context';
import { ProjectsProvider } from './context/projects-context';

export const App = () => (
  <SelectedProjectProvider>
    <ProjectsProvider>
      <div className="App">
        <Header />
        <Content />
      </div>
    </ProjectsProvider>
  </SelectedProjectProvider>
  );

export default App;

import React from 'react';
import { Header } from './components/layout/Header';
import { Context } from './components/layout/Context';
import { SelectedProjectProvider } from './context/selected-projects-context';
import { ProjectsProvider } from './context/projects-context';

export const App = () => (
  <SelectedProjectProvider>
    <ProjectsProvider>
      <div className="App">
        <Header />
        <Context />
      </div>
    </ProjectsProvider>
  </SelectedProjectProvider>
  );

export default App;

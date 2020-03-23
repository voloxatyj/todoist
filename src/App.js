import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { Content } from './components/layout/Content';
import { SelectedProjectProvider } from './context/selected-projects-context';
import { ProjectsProvider } from './context/projects-context';

export const App = ({ darkModeDeafault = false }) => {
  const [darkMode, setDarkMode] = useState(darkModeDeafault)

  return (
  <SelectedProjectProvider>
    <ProjectsProvider>
      <main
       data-testid="application"
       className={darkMode ? 'darkmode' : undefined}
      >
        <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
        <Content />
      </main>
    </ProjectsProvider>
  </SelectedProjectProvider>
  )
}

export default App;

import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Home from './pages/Home';

function App() {
  // Update document title
  React.useEffect(() => {
    document.title = 'Future AI Expert - AI Automation Solutions';
  }, []);

  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}

export default App;
import React from 'react';
import { AppearanceProvider } from 'react-native-appearance';
import { Home } from './components/home'
import { ThemeProvider } from './providers/themeProvider';

const App = () => {

  return (
    <AppearanceProvider>
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </AppearanceProvider>
  );
};

export default App;

import React from 'react';
import { AppearanceProvider } from 'react-native-appearance';
import { Home } from './components/home'

const App = () => {

  return (
      <AppearanceProvider>
        <Home/>
      </AppearanceProvider>
  );
};

export default App;

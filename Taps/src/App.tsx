import React from 'react';
import { AppearanceProvider } from 'react-native-appearance';
import { Home } from './screens/home'

const App = () => {

  return (
    <AppearanceProvider>
        <Home />
    </AppearanceProvider>
  );
};

export default App;

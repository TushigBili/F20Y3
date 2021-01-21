import React from 'react';
import { AppearanceProvider } from 'react-native-appearance';
import { Draggable } from './screens/draggable'
import { Text } from 'react-native';

const App = () => {

  return (
    <AppearanceProvider>
        <Draggable />
    </AppearanceProvider>
  );
};

export default App;

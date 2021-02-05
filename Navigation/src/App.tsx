import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { MyNavigationStack } from './navigation'

const App = () => {
  return (
    <NavigationContainer>
      <MyNavigationStack />
    </NavigationContainer>
  );
};

export default App;

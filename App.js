import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainAppNavigator from './src/navigation/MainAppNavigator.js';
import IndividualStockNavigator from './src/navigation/IndividualStockNavigator.js';


const App = () => {
  return (
    <NavigationContainer>
      <MainAppNavigator />
    </NavigationContainer>
  );
};

export default App;

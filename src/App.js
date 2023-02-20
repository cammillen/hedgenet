import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabsNavigator from './navigation/BottomTabsNavigator';

const App = () => {
    return(
        <NavigationContainer>
            <BottomTabsNavigator />
        </NavigationContainer>
    )
}

export default App;
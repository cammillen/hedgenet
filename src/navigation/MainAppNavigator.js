import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home.js';

const Stack = createStackNavigator();

const MainAppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false}}/>
    </Stack.Navigator>
  );
};

export default MainAppNavigator;


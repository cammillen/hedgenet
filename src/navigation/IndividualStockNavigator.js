import { createStackNavigator } from '@react-navigation/stack';
import StockPage from '../screens/StockPage.js';

const Stack = createStackNavigator();

const IndividualStockNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ animationEnabled: false, gestureEnabled: false}}>
      <Stack.Screen name="StockPage" component={StockPage} options={{ headerShown: false}}/>
    </Stack.Navigator>
  );
};

export default IndividualStockNavigator;
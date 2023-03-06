import { createStackNavigator } from '@react-navigation/stack';
import StockPage from '../screens/StockPage.js';

const Stack = createStackNavigator();

const IndividualStockNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Stock" component={StockPage} options={{ headerShown: false}}/>
    </Stack.Navigator>
  );
};

export default IndividualStockNavigator;


import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home.js';
import Profile from '../screens/Profile.js';
import Notifications from '../screens/Notifications.js';
import Leaderboard from '../screens/Leaderboard.js';
import Newsfeed from '../screens/Newsfeed.js'

const Stack = createStackNavigator();

const MainAppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ animationEnabled: false, gestureEnabled: false}}>
      {/* Top Menu Bar screens: */}
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false}}/>
      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false}}/>
      <Stack.Screen name="Notifications" component={Notifications} options={{ headerShown: false}}/>
      <Stack.Screen name="Leaderboard" component={Leaderboard} options={{ headerShown: false}}/>
      <Stack.Screen name="Newsfeed" component={Newsfeed} options={{ headerShown: false}}/>
      {/* Bottom Menu Bar Screens */}
    </Stack.Navigator>
  );
};

export default MainAppNavigator;


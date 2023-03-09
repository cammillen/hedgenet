// Navigation DOCUMENTATION: 
// You need to create the placeholder screen using the code in PlaceholderScreen.js, change the code necessary for the new screen. 
// You need to:
// 1. import the new screen at the top e.g. "import Chat from '../screens/Chat.js';",
// 2. add new Stack.screen e.g. "<Stack.Screen name="Home" component={Home} options={{ headerShown: false}}/>"
  // You then need to make sure you can navigate to it via an On Press from another screen e.g. "<TouchableOpacity onPress={() => navigation.navigate('Chat')}><TouchableOpacity>"
// Make sure on that page you have TouchableOpacity and useNavigation imported:
      // import { TouchableOpacity } from 'react-native-gesture-handler';
      // import { useNavigation } from '@react-navigation/native';
      // and then have "const navigation = useNavigation();"" at the top of the component function you are exporting - see LogoHeader.js for a good example. 

import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home.js';
import Profile from '../screens/Profile.js';
import Notifications from '../screens/Notifications.js';
import Leaderboard from '../screens/Leaderboard.js';
import Newsfeed from '../screens/Newsfeed.js';
import Dashboard from '../screens/Dashboard.js';
import Chat from '../screens/Chat.js';
import Menu from '../screens/Menu.js';
import StockPage from '../screens/StockPage.js';
import AdminPanel from '../screens/AdminPanel.js';
import Browse from '../screens/Browse.js';
import Search from '../screens/Search.js';
import FundMembers from '../components/Dashboard/FundMembers.js';
import TradingInsights from '../components/Dashboard/TradingInsights.js';

// import KeyActionsModal from '../components/KeyActionsModal.js';

const Stack = createStackNavigator();

const MainAppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ animationEnabled: false, gestureEnabled: false}}>
      {/* Top Menu Bar screens: */}
      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false}}/>
      <Stack.Screen name="Notifications" component={Notifications} options={{ headerShown: false}}/>
      <Stack.Screen name="Leaderboard" component={Leaderboard} options={{ headerShown: false}}/>
      <Stack.Screen name="Newsfeed" component={Newsfeed} options={{ headerShown: false}}/>
      {/* Search bar to search page navigation */}
      <Stack.Screen name="Search" component={Search} options={{ headerShown: false}}/>
      {/* Bottom Menu Bar Screens */}
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false}}/>
      <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false}}/>
      {/* <Stack.Screen name="KeyActionsModal" component={KeyActionsModal} options={{ headerShown: false}}/> */}
      <Stack.Screen name="Chat" component={Chat} options={{ headerShown: false}}/>
      <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false}}/>
      {/* Individual Stock Navigation */}
      <Stack.Screen name="StockPage" component={StockPage} options={{ headerShown: false}}/>
      {/* Other Navigation */}
      <Stack.Screen name="AdminPanel" component={AdminPanel} options={{ headerShown: false}}/>
      <Stack.Screen name="FundMembers" component={FundMembers} options={{ headerShown: false}}/>
      <Stack.Screen name="TradingInsights" component={TradingInsights} options={{ headerShown: false}}/>
      {/* Adding Browse */}
      <Stack.Screen name="Browse" component={Browse} options={{ headerShown: false}}/>
    </Stack.Navigator>
  );
};

export default MainAppNavigator;


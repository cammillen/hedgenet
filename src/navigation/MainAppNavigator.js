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
import CountryLeaderboard from '../screens/CountryLeaderboard.js';
import Newsfeed from '../screens/Newsfeed.js';
import Dashboard from '../screens/Dashboard.js';
import Chat from '../screens/Chat.js';
import Menu from '../screens/Menu.js';
import StockPage from '../screens/StockPage.js';
import MarketStatsDetails from '../components/StockPage/MarketStatsDetails.js';
import NewsSectionDetails from '../components/StockPage/NewsSectionDetails.js';
import SecuritySettings from '../components/SecuritySettings.js';
import NotificationSettings from '../components/NotificationSettings.js';
import ProfileSettings from '../components/ProfileSettings.js';
import ChangePincode from '../components/ChangePincode';
import Legal from '../components/Legal.js';
import AdminPanel from '../screens/AdminPanel.js';
import Browse from '../screens/Browse.js';
import Search from '../screens/Search.js';
import CategorySearch from '../screens/CategorySearch.js';
import TopMoversSearch from '../screens/TopMoversSearch .js';
import FundMembers from '../components/Dashboard/FundMembers.js';
import TradingInsights from '../components/Dashboard/TradingInsights.js';
import Settings from '../screens/Settings.js';
import Language from '../screens/Language.js';
import HelpCenter from '../screens/HelpCenter';
import Currency from '../screens/Currency';
import UCLFintechFundProfile from '../screens/UCLFintechFundProfile';
import LSESustainablefinanceFundProfile from '../screens/LSESustainablefinanceFundProfile';
import CambridgeAlgoTradersProfile from '../screens/CambridgeAlgoTradersProfile';
import Post from '../screens/Post';
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
      {/* Derivative Leaderboard screen */}
      <Stack.Screen name="CountryLeaderboard" component={CountryLeaderboard} options={{ headerShown: false}}/>
      {/* Search bar with category screens */}
      <Stack.Screen name="Search" component={Search} options={{ headerShown: false}}/>
      <Stack.Screen name="CategorySearch" component={CategorySearch} options={{ headerShown: false}}/>
      <Stack.Screen name="TopMoversSearch" component={TopMoversSearch} options={{ headerShown: false}}/>
      {/* Bottom Menu Bar Screens */}
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false}}/>
      <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false}}/>
      {/* <Stack.Screen name="KeyActionsModal" component={KeyActionsModal} options={{ headerShown: false}}/> */}
      <Stack.Screen name="Chat" component={Chat} options={{ headerShown: false}}/>
      <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false}}/>
      {/* Individual Stock Navigation */}
      <Stack.Screen name="StockPage" component={StockPage} options={{ headerShown: false}}/>
      <Stack.Screen name="MarketStatsDetails" component={MarketStatsDetails} options={{ headerShown: false}}/>
      <Stack.Screen name="NewsSectionDetails" component={NewsSectionDetails} options={{ headerShown: false}}/>
      {/* Settings Navigation */}
      <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false}}/>
      <Stack.Screen name="Language" component={Language} options={{ headerShown: false}}/>
      <Stack.Screen name="Help Center" component={HelpCenter} options={{ headerShown: false}}/>
      <Stack.Screen name="Currency" component={Currency} options={{ headerShown: false}}/>
      <Stack.Screen name="SecuritySettings" component={SecuritySettings} options={{ headerShown: false}}/>
      <Stack.Screen name="NotificationSettings" component={NotificationSettings} options={{ headerShown: false}}/>
      <Stack.Screen name="Legal" component={Legal} options={{ headerShown: false}}/>
      <Stack.Screen name="ProfileSettings" component={ProfileSettings} options={{ headerShown: false}}/>
      <Stack.Screen name="ChangePincode" component={ChangePincode} options={{ headerShown: false}}/>
      <Stack.Screen name="UCL Fintech Fund" component={UCLFintechFundProfile} options={{ headerShown: false}}/>
      <Stack.Screen name="LSE Sustainable finance Fund" component={LSESustainablefinanceFundProfile} options={{ headerShown: false}}/>
      <Stack.Screen name="Cambridge Algo Traders" component={CambridgeAlgoTradersProfile} options={{ headerShown: false}}/>
      <Stack.Screen name="Post" component={Post} options={{ headerShown: false}}/>
      {/* Adding Browse */}
      <Stack.Screen name="Browse" component={Browse} options={{ headerShown: false}}/>
    </Stack.Navigator>
  );
};

export default MainAppNavigator;
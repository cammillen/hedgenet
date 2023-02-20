import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from '../screens/Home.js';
import FundDashboard from '../screens/FundDashboard.js';
import KeyActions from '../screens/KeyActions.js';
import Chat from '../screens/Chat.js';
import Menu from '../screens/Menu.js';

const Tab = createBottomTabNavigator();
const BottomTabsNavigator = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name= "Home" component={Home} />
            <Tab.Screen name= "FundDashboard" component={FundDashboard} />
            <Tab.Screen name= "KeyActions" component={KeyActions} />
            <Tab.Screen name= "Chat" component={Chat} />
            <Tab.Screen name= "Menu" component={Menu} />
        </Tab.Navigator>
    );
}

export default BottomTabsNavigator;
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import orgHomeStack from './orgHomeStack';
import orgProfileStack from './orgProfileStack';
import Start from '../forms/start';
import Logout from '../forms/logout';
import AllChats from '../forms/AllChats';

const DrawScreens = {
    orgHome: {
        screen: orgHomeStack,
        navigationOptions: {
            title: "My Home"
        }
    },
    orgProfile: {
        screen: orgProfileStack,
        navigationOptions: {
            title: "My Profile"
        }
    },
    MyChats: {
        screen: AllChats,
        navigationOptions: {
            title: "My Chats"
        }
    },
    Logout: {
        // screen: Start,
        screen:Logout
       
    }
}

const orgDrawerNav = createDrawerNavigator(DrawScreens);

export default createAppContainer(orgDrawerNav);





import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import orgProfile from '../OrganizationsForms/orgProfile';
import orgHomeStack from './orgHomeStack';
import Start from '../forms/start';
import Logout from '../forms/logout';

const DrawScreens = {
    orgHome: {
        screen: orgHomeStack,
        navigationOptions: {
            title: "My Home"
        }
    },
    orgProfile: {
        screen: orgProfile,
        navigationOptions: {
            title: "My Profile"
        }
    },
    Logout: {
        // screen: Start,
        screen:Logout
       
    }
}

const orgDrawerNav = createDrawerNavigator(DrawScreens);

export default createAppContainer(orgDrawerNav);





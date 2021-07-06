import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import UserProfile from '../forms/userProfile';
import UserHome from '../forms/userHome';
import CampaignsIjoined from '../forms/CampaignsIjoined';
import myCampaignsStack from './myCampaignsStack';
import userHomeStack from './userHomeStack';
import Start from '../forms/start';
import Logout from '../forms/logout';
import { Alert, TouchableOpacity } from 'react-native';
import AllChats from '../forms/AllChats';

const DrawScreens = {
    userHome: {
        screen: userHomeStack,
        navigationOptions: {
            title: "My Home"
        }
    },
    userProfile: {
        screen: UserProfile,
        navigationOptions: {
            title: "My Profile"
        }
    },
    AllChats: {
        screen: AllChats,
        navigationOptions: {
            title: "My Chats"
        }
    },
    userCampaigns: {
        screen: CampaignsIjoined,
        navigationOptions: {
            title: "My Campaign History"
        }
    },
    userMyCampaigns: {
        screen: myCampaignsStack,
        navigationOptions: {
            title: "Campaigns I created"
        }
    },
    Logout: {
        screen:Logout
        
       
    },
    
}

const DrawerNav = createDrawerNavigator(DrawScreens);

export default createAppContainer(DrawerNav);


/* const DrawerNav = createDrawerNavigator({
    userHome: {
        screen: UserHome
    },
    userProfile: {
        screen: UserProfile
    },
    userCampaigns: {
        screen: MyCampaigns
    },
    trial: {
        screen: Trial,
    }
}); */


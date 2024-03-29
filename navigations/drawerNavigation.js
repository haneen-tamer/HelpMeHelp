import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';


import UserHome from '../forms/userHome';
import CampaignsIjoined from '../forms/CampaignsIjoined';
import myCampaignsStack from './myCampaignsStack';
import userHomeStack from './userHomeStack';
import userProfileStack from './userProfileStack'
import userCampagineStack from './userCampaignsStack';
import Start from '../forms/start';
import Logout from '../forms/logout';
import { Alert, TouchableOpacity } from 'react-native';
import AllChats from '../forms/AllChats';
import Search from '../forms/Search';

const DrawScreens = {
    userHome: {
        screen: userHomeStack,
        navigationOptions: {
            title: "My Home"
        }
    },
    userProfile: {
        screen: userProfileStack,
        navigationOptions: {
            title: "My Profile"
        }
    },
    Search:{
        screen: Search,
        navigationOptions: {
            title: "Search"
        }
    },
    AllChats: {
        screen: AllChats,
        navigationOptions: {
            title: "My Chats"
        }
    },
    userCampaigns: {
        screen: userCampagineStack,
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


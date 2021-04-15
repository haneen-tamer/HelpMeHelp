import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import UserProfile from '../forms/userProfile';
import UserHome from '../forms/userHome';
import CampaignsIjoined from '../forms/CampaignsIjoined';
import myCampaignsStack from './myCampaignsStack';
import Trial from '../forms/trial';
import Logout from '../forms/logout';
import { Alert, Button } from 'react-native';

const DrawScreens = {
    userHome: {
        screen: UserHome,
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
    userCampaigns: {
        screen: CampaignsIjoined,
        navigationOptions: {
            title: "Campaigns I joined"
        }
    },
    userMyCampaigns: {
        screen: myCampaignsStack,
        navigationOptions: {
            title: "Campaigns I created"
        }
    },
    Logout: {
        screen: Logout,
        navigationOptions: {
            title: "Logout"
        }
    }
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


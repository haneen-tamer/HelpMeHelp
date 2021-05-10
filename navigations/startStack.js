import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { BackHandler } from 'react-native';
import Start from '../forms/start';
import Trial from '../forms/trial';
import UserHome from '../forms/userHome';
import UserReg from '../forms/userRegister';
import OrgReg from '../forms/orgResgister';
import DrawNav from './drawerNavigation';
import Header from '../shared/header';
import Username from '../shared/username';
import CampaignsIjoined from '../forms/CampaignsIjoined'
import userCampaignDetails from '../forms/userCampaignDetails'
import userOrganizationProfile from '../forms/userOrganizationProfile'
import pendingPage from '../forms/pendingPage'
import React from 'react';

const forms = 
{
    Start: {
        screen: Start,
        navigationOptions: {
            title: "",
            headerStyle: { height: 0}
        }
    },
    DrawNav: {
        screen: DrawNav,
        navigationOptions: {
            headerLeft: () => <Header />,
            headerRight: () => <Username />,
            gestureEnabled: false,
            title: "",
            // headerStyle: { height: 30},
            // headerTitle: () => <Header />,

        }
    },
    userRegister: {
        screen: UserReg,
        navigationOptions: {
           
        }
    },
    orgRegister: {
        screen: OrgReg,
        navigationOptions: {
            title:"Organization Registration"
        }
    },
    CampaignsIjoined: {
        screen: CampaignsIjoined,
       
    },
    userCampaignDetails:{
        screen: userCampaignDetails,
        navigationOptions: {
            title: "Campaign Details"
        }
    },
    userOrganizationProfile:{
        screen:userOrganizationProfile,
        navigationOptions: {
            title:"Organization Profile"
        }
    },
    pendingPage:{
        screen:pendingPage,
        navigationOptions: {
            title: "Pending"
        }
    }


}

const startStack = createStackNavigator(forms);

export default createAppContainer(startStack);
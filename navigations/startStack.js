import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { BackHandler, Alert } from 'react-native';
import Start from '../forms/start';
import Trial from '../forms/trial';
import AdminStack from './adminStack';
import UserHome from '../forms/userHome';
import UserReg from '../forms/userRegister';
import OrgReg from '../OrganizationsForms/orgResgister';
import DrawNav from './drawerNavigation';
import orgDrawerNav from './orgDrawerNavigation';
import Header from '../shared/header';
import AdminHeader from '../shared/adminHeader'
import Username from '../shared/username';
import AdminUsername from '../shared/adminUsername';
import CampaignsIjoined from '../forms/CampaignsIjoined'
import userCampaignDetails from '../forms/userCampaignDetails'
import userOrganizationProfile from '../forms/userOrganizationProfile'
import pendingPage from '../OrganizationsForms/pendingPage'
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
            header: null

        }
    },
    AdminStack: {
        screen: AdminStack,
        navigationOptions: {
            headerLeft: () => <AdminHeader onPress={() => Alert.alert("hii")} />,
            headerRight: () => <AdminUsername />,
            gestureEnabled: true,
            title: "",

        }
    },
    orgDrawerNav: {
        screen: orgDrawerNav,
        navigationOptions: {
            header: null
        },
       headerMode: 'none'

        
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
        navigationOptions: ({ navigation }) => {
            return {
                 headerLeft: () => <Header navigation={navigation}/>,
                headerTitle:()=><Title title={"Campaigns You Joined"}/>,
            }
          },
       
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
            title: "Pending",
            headerLeft: null
        }
    }


}

const startStack = createStackNavigator(forms);

export default createAppContainer(startStack);
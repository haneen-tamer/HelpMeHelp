import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { BackHandler, Alert } from 'react-native';
import Start from '../forms/start';
import Trial from '../forms/trial';
import AdminStack from './adminStack';
import AdminDrawer from './adminDrawer';
import UserHome from '../forms/userHome';
import UserReg from '../forms/userRegister';
import OrgReg from '../OrganizationsForms/orgResgister';
import DrawNav from './drawerNavigation';
import orgDrawerNav from './orgDrawerNavigation';
import Header from '../shared/header';
import AdminHeader from '../shared/adminHeader'
import Username from '../shared/username';
import AdminUsername from '../shared/adminUsername';
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
            header: null,
            gestureEnabled: false,
        }
    },
    AdminDrawer: {
        screen: AdminDrawer,
        navigationOptions: {
            // headerLeft: () => <AdminHeader />,
            // headerRight: () => <AdminUsername />,
            // gestureEnabled: true,
            // title: "",
            header: null,
            gestureEnabled: false,
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
            title:"Registration Form"
        }
    },
    orgRegister: {
        screen: OrgReg,
        navigationOptions: {
            title:"Organization Registration"
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
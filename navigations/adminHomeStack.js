import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';


import AdminHome from '../forms/adminHome';
import UserOrgProfile from '../forms/userOrganizationProfile';


import Header from '../shared/header';
import Title from '../shared/Title';
import React from 'react';

const screens = {
    AdminHome:{
        screen: AdminHome,
        navigationOptions: ({ navigation }) => {
            return {
                headerLeft: () => <Header navigation={navigation}/>,
                headerTitle:()=><Title title={"Home"}/>,
            }
          },
    },
    UserOrgProfile: {
        screen: UserOrgProfile,
    },
   
};

const userHomeStack = createStackNavigator(screens);

export default createAppContainer(userHomeStack);


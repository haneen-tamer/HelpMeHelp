import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';


import AllOrgs from '../forms/allOrgs';
import UserOrgProfile from '../forms/userOrganizationProfile';


import Header from '../shared/header';
import Title from '../shared/Title';
import React from 'react';

const screens = {
    AllOrgs:{
        screen: AllOrgs,
        navigationOptions: ({ navigation }) => {
            return {
                headerLeft: () => <Header navigation={navigation}/>,
                headerTitle:()=><Title title={"All organizations"}/>,
            }
          },
    },
    UserOrgProfile: {
        screen: UserOrgProfile,
    },
   
};

const userHomeStack = createStackNavigator(screens);

export default createAppContainer(userHomeStack);


import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';


import AddAdmine from '../forms/addAdmin';
import UserProfile from '../OrganizationsForms/orgUserProfile';


import Header from '../shared/header';
import Title from '../shared/Title';
import React from 'react';

const screens = {
    AddAdmine:{
        screen: AddAdmine,
        navigationOptions: ({ navigation }) => {
            return {
                headerLeft: () => <Header navigation={navigation}/>,
                headerTitle:()=><Title title={"Add admin"}/>,
            }
          },
    },
    UserProfile: {
        screen: UserProfile,
    },
   
};

const userHomeStack = createStackNavigator(screens);

export default createAppContainer(userHomeStack);


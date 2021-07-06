import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Header from '../shared/header';
import Title from '../shared/Title';
import React from 'react';
import UserProfile from '../forms/userProfile';
import editUserProfile from '../forms/editUserProfile';
const screens = {
    UserProfile: {
        screen: UserProfile,
        navigationOptions: ({ navigation }) => {
            return {
                 headerLeft: () => <Header navigation={navigation} />,
                headerTitle:()=><Title title={"My Profile"}/>,
            }
          },
    },
    editUserProfile:{
        screen: editUserProfile,
        navigationOptions: {
            title: "Edit Profile"
        }
    }
   

   
};

const userProfileStack = createStackNavigator(screens);

export default createAppContainer(userProfileStack);




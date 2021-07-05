import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import orgProfile from '../OrganizationsForms/orgProfile';
import editOrgProfile from '../OrganizationsForms/editOrgProfile';
import Header from '../shared/header';
import Title from '../shared/Title';
import React from 'react';
const screens = {
    orgProfile: {
        screen: orgProfile,
        navigationOptions: ({ navigation }) => {
            return {
                 headerLeft: () => <Header navigation={navigation} />,
                headerTitle:()=><Title title={"My Profile"}/>,
            }
          },
    },
    editOrgProfile:{
        screen: editOrgProfile,
        navigationOptions: {
            title: "Edit Profile"
        }
    }
   

   
};

const orgProfileStack = createStackNavigator(screens);

export default createAppContainer(orgProfileStack);




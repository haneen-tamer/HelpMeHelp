import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import userHome from '../forms/userHome';
import seeAllCampaigns from '../forms/seeAllCampaigns'
import userCampaignDetails from '../forms/userCampaignDetails'
import chat from '../forms/chat';
import AllChats from '../forms/AllChats';

import Header from '../shared/header';
import Title from '../shared/Title';
import React from 'react';
const screens = {
    home:{
        screen: userHome,
        navigationOptions: ({ navigation }) => {
            return {
                 headerLeft: () => <Header navigation={navigation}/>,
                headerTitle:()=><Title title={"Home Page"}/>,
            }
          },
    },
    seeAll:{
        screen: seeAllCampaigns,
        navigationOptions: {
            title: "All Campaigns"
        }
    },
    userCampaignDetails:{
        screen: userCampaignDetails,
    },
    chat:{
        screen:chat,
    },
    AllChats:{
        screen:AllChats,
        navigationOptions: {
            title: ""
        }
    }
};

const userHomeStack = createStackNavigator(screens);

export default createAppContainer(userHomeStack);


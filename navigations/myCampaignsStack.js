import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import MyCampaigns from '../forms/MyCampaigns';
import UserCreateCampaign from '../forms/UserCreateCampaign';
import userCampaignDetails from '../forms/userCampaignDetails'
import Header from '../shared/header';
import Title from '../shared/Title';
import React from 'react';

const screens = {
    MyCampaigns:{
        screen: MyCampaigns,
        navigationOptions: ({ navigation }) => {
            return {
                 headerLeft: () => <Header navigation={navigation}/>,
                headerTitle:()=><Title title={"Campagins I Created"}/>,
            }
          },
    },
    UserCreateCampaign:{
        screen: UserCreateCampaign,
    },
    userCampaignDetails:{
        screen: userCampaignDetails,
    }
};

const myCampaignsStack = createStackNavigator(screens);

export default createAppContainer(myCampaignsStack);


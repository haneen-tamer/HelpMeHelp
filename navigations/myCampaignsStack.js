import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import MyCampaigns from '../forms/MyCampaigns';
import UserCreateCampaign from '../forms/CreateUserDonationCampaign';
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
                headerTitle:()=><Title title={"Campagins You Created"}/>,
            }
          },
    },
    UserCreateCampaign:{
        screen: UserCreateCampaign,
        navigationOptions: {
            headerTitle: "Create Campaign"
        }
    },
    userCampaignDetails:{
        screen: userCampaignDetails,
        navigationOptions: {
            headerTitle: "Campaign Details"
        }
    }
};

const myCampaignsStack = createStackNavigator(screens);

export default createAppContainer(myCampaignsStack);


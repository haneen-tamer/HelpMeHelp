import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import userHome from '../forms/userHome';
import seeAllCampaigns from '../forms/seeAllCampaigns'
import userCampaignDetails from '../forms/userCampaignDetails'
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
    },
    userCampaignDetails:{
        screen: userCampaignDetails,
    }
};

const userHomeStack = createStackNavigator(screens);

export default createAppContainer(userHomeStack);


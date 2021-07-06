import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Header from '../shared/header';
import Title from '../shared/Title';
import React from 'react';
import CampaignsIjoined from '../forms/CampaignsIjoined'
import userCampaignDetails from '../forms/userCampaignDetails'
import userOrganizationProfile from '../forms/userOrganizationProfile'
const screens = {
    CampaignsIjoined: {
        screen: CampaignsIjoined,
        navigationOptions: ({ navigation }) => {
            return {
                 headerLeft: () => <Header navigation={navigation}/>,
                headerTitle:()=><Title title={"Campaigns You Joined"}/>,
            }
          },
       
    },
    userCampaignDetails:{
        screen: userCampaignDetails,
        navigationOptions: {
            headerTitle: "Campaign Details"
        }
    },
    userOrganizationProfile:{
        screen:userOrganizationProfile,
        navigationOptions: {
            title:"Organization Profile"
        }
    },
   

   
};

const userCampagineStack = createStackNavigator(screens);

export default createAppContainer(userCampagineStack);




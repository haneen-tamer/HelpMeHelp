import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import React from 'react';
import CampaignItem from '../shared/CampaignItem'
import userCampaignDetails from '../forms/userCampaignDetails'

const forms = 
{
    CampaignItem: {
        screen: CampaignItem,
       
    },
    userCampaignDetails:{
        screen: userCampaignDetails
    }
   
  

}

const campaignDetailsStack = createStackNavigator(forms);

export default createAppContainer(campaignDetailsStack);
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import MyCampaigns from '../forms/MyCampaigns';
import UserCreateCampaign from '../forms/UserCreateCampaign';
import userCampaignDetails from '../forms/userCampaignDetails';

const screens = {
    MyCampaigns:{
        screen: MyCampaigns,
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


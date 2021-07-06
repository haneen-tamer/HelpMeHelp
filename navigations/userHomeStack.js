import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import userHome from '../forms/userHome';
import seeAllCampaigns from '../forms/seeAllCampaigns'
import userCampaignDetails from '../forms/userCampaignDetails'
import chat from '../forms/chat';

const screens = {
    home:{
        screen: userHome,
        navigationOptions: {
            title:"",
            headerLeft: null
        }
    },
    seeAll:{
        screen: seeAllCampaigns,
    },
    userCampaignDetails:{
        screen: userCampaignDetails,
    },
    chat:{
        screen:chat,
    }
};

const userHomeStack = createStackNavigator(screens);

export default createAppContainer(userHomeStack);


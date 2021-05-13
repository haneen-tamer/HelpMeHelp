import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import orgHome from '../OrganizationsForms/orgHome';
import Applicant from '../OrganizationsForms/Applicant';
import CampaignItem from '../shared/CampaignItem'

const screens = {
    orgHome:{
        screen: orgHome,
        navigationOptions: {
            title: "Home Page",
            headerLeft: null
        }
    },
    Applicant:{
        screen:Applicant,
        navigationOptions: {
            title: "Applicants Requests",
           
        }

    },
    
   

   
};

const orgHomeStack = createStackNavigator(screens);

export default createAppContainer(orgHomeStack);




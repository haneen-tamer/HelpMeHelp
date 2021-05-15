import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import orgHome from '../OrganizationsForms/orgHome';
import applicantRequests from '../OrganizationsForms/applicantRequests';
import orgUserProfile from '../OrganizationsForms/orgUserProfile';

const screens = {
    orgHome:{
        screen: orgHome,
        navigationOptions: {
            title: "Home Page",
            headerLeft: null
        }
    },
    applicantRequests:{
        screen:applicantRequests,
        navigationOptions: {
            title: "Applicants Requests",
           
        }

    },
    orgUserProfile:{
        screen:orgUserProfile,
        navigationOptions: {
            title: " User Profile",
           
        }
        
    }
    
   

   
};

const orgHomeStack = createStackNavigator(screens);

export default createAppContainer(orgHomeStack);




import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import orgProfile from '../OrganizationsForms/orgProfile';
import editOrgProfile from '../OrganizationsForms/editOrgProfile';
const screens = {
    orgProfile: {
        screen: orgProfile,
        navigationOptions: {
            title: "My Profile",
            headerLeft: null
        }
    },
    editOrgProfile:{
        screen: editOrgProfile,
        navigationOptions: {
            title: "Edit Profile"
        }
    }
   

   
};

const orgProfileStack = createStackNavigator(screens);

export default createAppContainer(orgProfileStack);




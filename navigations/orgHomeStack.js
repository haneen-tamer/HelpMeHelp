import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import orgHome from '../OrganizationsForms/orgHome';

const screens = {
    orgHome:{
        screen: orgHome,
        navigationOptions: {
            title: "Home Page",
            headerLeft: null
        }
    },
   
};

const orgHomeStack = createStackNavigator(screens);

export default createAppContainer(orgHomeStack);




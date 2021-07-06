import { createStackNavigator, HeaderTitle } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import orgHome from '../OrganizationsForms/orgHome';
import applicantRequests from '../OrganizationsForms/applicantRequests';
import orgUserProfile from '../OrganizationsForms/orgUserProfile';
import Header from '../shared/header';
import Title from '../shared/Title';
import React from 'react';

const screens = {
    orgHome:{
        screen: orgHome,
        navigationOptions: ({ navigation }) => {
            return {
                 headerLeft: () => <Header navigation={navigation}/>,
                headerTitle:()=><Title title={"Home Page"}/>,
            }
          },
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
            title: " Applicant Profile",
           
        }
        
    }
    
   

   
};

const orgHomeStack = createStackNavigator(screens);

export default createAppContainer(orgHomeStack);




import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';


import NewHotline from '../forms/newHotline';


import Header from '../shared/header';
import Title from '../shared/Title';
import React from 'react';

const screens = {
    NewHotline:{
        screen: NewHotline,
        navigationOptions: ({ navigation }) => {
            return {
                headerLeft: () => <Header navigation={navigation}/>,
                headerTitle:()=><Title title={"Add hotline"}/>,
            }
          },
    },
    
};

const userHomeStack = createStackNavigator(screens);

export default createAppContainer(userHomeStack);


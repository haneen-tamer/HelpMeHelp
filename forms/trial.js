import React, { componentWillMount } from 'react';
import { Text, BackHandler, Button, View } from 'react-native';


export default class trial extends React.Component {
    componentWillMount()
    {
        BackHandler.addEventListener('hardwareBackPress', function(){
            return true;
        });
    }

    render() {
        return(
            <View>
                <Text>hi</Text>
            </View>
        );
    }
}
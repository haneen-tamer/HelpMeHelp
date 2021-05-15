import React  from 'react';
import { FloatingAction } from "react-native-floating-action";




export default function CreateCampaignBtn({navigation}){

    const actions = [{
        text: "Create",
        icon: require("../images/plus.png"),
        name: "bt_createCampaign",
        position: 1
    }]
    return(
       
        <FloatingAction
        actions={actions}
        onPressItem={name => {
        console.log('create campaign');
        navigation.navigate('UserCreateCampaign')
        }}
        overrideWithAction='true'
        color='#92E3A9'
        // color='#454545'
        iconHeight={40}
        iconWidth={40}
        />
        
        
);
}



    
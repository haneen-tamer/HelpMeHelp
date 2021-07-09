import React  from 'react';
import { FloatingAction } from "react-native-floating-action";




export default function CreateCampaignBtn({navigation}){

    const actions = [{
        key:"1",
        text: "Create Donation Campaign",
        icon: require("../images/plus.png"),
        name: "bt_donationCampaign",
        position: 1
    },
    {
        key:"2",
        text: "Create Volunteer Campaign",
        icon: require("../images/plus.png"),
        name: "bt_volunteerCampaign",
        position: 2
    },
    ]
    return(
       
        <FloatingAction
        actions={actions}
        onPressItem={(name) => {
            console.log(`here: ${name}`);
        switch(name){
            case 'bt_donationCampaign':
                navigation.navigate('CreateDonationCampaign');
                break;
            case 'bt_volunteerCampaign':
                navigation.navigate('CreateVolunteerCampaign');
                break;
            default:
                break;

        }

        }}
        // overrideWithAction='true'
        color='#92E3A9'
        // color='#454545'
        iconHeight={40}
        iconWidth={40}
        />
        
        
);
}



    
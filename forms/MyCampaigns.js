import React ,{ useState } from 'react';
import { StyleSheet, View,FlatList,TouchableOpacity} from 'react-native';
import CampaignItem from '../shared/CampaignItem'
import CreateCampaignBtn from '../shared/CreateCampaignBtn';
import {globalStyles} from '../shared/globalStyles'
// import { FloatingAction } from "react-native-floating-action";

export default function MyCampaigns({navigation}) {
    const [campaign] = useState([
      {name:'Ramdan Iftar',organizationName:'Resala',startDate:'8/4/2021',endDate:'10/4/2021',class:'A',subClass:['dd','dddd'],progress:7,target:7,status:'completed',id:'1',month:'April',adress:'fhifhoiojfoije',descreption:'kskskskksks',donationType:'clothes',userStatus:'Approved'},
      {name:'qqq',organizationName:'ggg',startDate:'8/4/2021',endDate:'10/4/2021',class:'B',subClass:['dd','dddd'],progress:1,target:7,status:'ongoing',id:'2',month:'April',adress:'fhifhoiojfoije',descreption:'kskskskksks',donationType:'clothes',userStatus:'Approved'},
      {name:'qqq',organizationName:'ggg',startDate:'8/4/2021',endDate:'10/4/2021',class:'B',subClass:['dd','dddd'],progress:3,target:7,status:'completed',id:'3',month:'April',adress:'fhifhoiojfoije',descreption:'kskskskksks',donationType:'clothes',userStatus:'Approved'},
      {name:'qqq',organizationName:'ggg',startDate:'8/4/2021',endDate:'10/4/2021',class:'B',subClass:['dd','dddd'],progress:4,target:7,status:'ongoing',id:'4',month:'April',adress:'fhifhoiojfoije',descreption:'kskskskksks',donationType:'clothes',userStatus:'Approved'},
      {name:'qqq',organizationName:'ggg',startDate:'8/4/2021',endDate:'10/4/2021',class:'B',subClass:['dd','dddd'],progress:5,target:7,status:'completed',id:'5',month:'April',adress:'fhifhoiojfoije',descreption:'kskskskksks',donationType:'clothes',userStatus:'Approved'},
    ])
    // const actions = [{
    //     text: "Create",
    //     icon: require("../images/plus.png"),
    //     name: "bt_createCampaign",
    //     position: 1
    // }]
    return(
        <View style={styles.container}>
            <View style={styles.flatListStyle}>
            <FlatList
            keyExtractor={(item) => item.id} 
            data={campaign} 
            renderItem={({ item }) => ( 
                <TouchableOpacity style={styles.container} 
                onPress={()=>navigation.navigate('userCampaignDetails',item)}>
                <CampaignItem item={item}/>
                </TouchableOpacity>
            )}
            />
            <CreateCampaignBtn navigation={navigation}/>
            {/* <FloatingAction
            actions={actions}
            onPressItem={name => {
            console.log('create campaign');
            navigation.navigate('UserCreateCampaign')
            }}
            overrideWithAction='true'
            color='#92E3A9'
            iconHeight={40}
            iconWidth={40}
            /> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      flexDirection:'column',
      
    },
    flatListStyle:{
      justifyContent:'flex-start',
      flex:2,
      padding:20
    },
  });
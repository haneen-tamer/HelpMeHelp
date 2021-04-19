import React ,{ useState } from 'react';
import { StyleSheet, View,FlatList,TouchableOpacity, Text} from 'react-native';
import CampaignItem from '../shared/CampaignItem'
import {globalStyles} from '../shared/globalStyles'

export default function seeAllCampaigns({navigation}){

    const [campaign] = useState([
        {name:'Ramdan Iftar',organizationName:'Resala',start:'8/4/2021',end:'10/4/2021',class:'A',subClass:['dd','dddd'],progress:7,target:7,status:'completed',id:'1',month:'April',adress:'fhifhoiojfoije',descreption:'kskskskksks',donationType:'clothes',userStatus:'NotSent'},
        {name:'qqq',organizationName:'ggg',start:'8/4/2021',end:'10/4/2021',class:'B',subClass:['dd','dddd'],progress:1,target:7,status:'ongoing',id:'2',month:'April',adress:'fhifhoiojfoije',descreption:'kskskskksks',donationType:'clothes',userStatus:'NotSent'},
        {name:'qqq',organizationName:'ggg',start:'8/4/2021',end:'10/4/2021',class:'B',subClass:['dd','dddd'],progress:3,target:7,status:'completed',id:'3',month:'April',adress:'fhifhoiojfoije',descreption:'kskskskksks',donationType:'clothes',userStatus:'NotSent'},
        {name:'qqq',organizationName:'ggg',start:'8/4/2021',end:'10/4/2021',class:'B',subClass:['dd','dddd'],progress:4,target:7,status:'ongoing',id:'4',month:'April',adress:'fhifhoiojfoije',descreption:'kskskskksks',donationType:'clothes',userStatus:'NotSent'},
        {name:'qqq',organizationName:'ggg',start:'8/4/2021',end:'10/4/2021',class:'B',subClass:['dd','dddd'],progress:5,target:7,status:'completed',id:'5',month:'April',adress:'fhifhoiojfoije',descreption:'kskskskksks',donationType:'clothes',userStatus:'NotSent'},
      ])

    return(
        <View style={styles.container}>
            
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
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      flexDirection:'column',
    },
    
  });
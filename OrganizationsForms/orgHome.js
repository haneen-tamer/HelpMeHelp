import { StatusBar } from 'expo-status-bar';
import React ,{ useState } from 'react';
import { StyleSheet, Text, View,Button,FlatList,TouchableOpacity,ScrollView,SafeAreaView} from 'react-native';
import CampaignItem from '../shared/CampaignItem'
import {globalStyles} from '../shared/globalStyles'
import CreateCampaignBtn from '../shared/CreateCampaignBtn';


export default function App({navigation}) {
  const [campgin, setCampagin] = useState([
    {name:'Ramdan Iftar',organizationName:'Resala',start:'8/4/2021',end:'10/4/2021',class:'A',subClass:['dd','dddd'],progress:7,target:7,status:'completed',id:'1',month:'April',adress:'fhifhoiojfoije',descreption:'kskskskksks',donationType:'clothes',userStatus:'Approved'},
    {name:'qqq',organizationName:'ggg',start:'8/4/2021',end:'10/4/2021',class:'B',subClass:['dd','dddd'],progress:1,target:7,status:'ongoing',id:'2',month:'April',adress:'fhifhoiojfoije',descreption:'kskskskksks',donationType:'clothes',userStatus:'Approved'},
    {name:'qqq',organizationName:'ggg',start:'8/4/2021',end:'10/4/2021',class:'B',subClass:['dd','dddd'],progress:3,target:7,status:'completed',id:'3',month:'April',adress:'fhifhoiojfoije',descreption:'kskskskksks',donationType:'clothes',userStatus:'Approved'},
    {name:'qqq',organizationName:'ggg',start:'8/4/2021',end:'10/4/2021',class:'B',subClass:['dd','dddd'],progress:4,target:7,status:'ongoing',id:'4',month:'April',adress:'fhifhoiojfoije',descreption:'kskskskksks',donationType:'clothes',userStatus:'Approved'},
    {name:'qqq',organizationName:'ggg',start:'8/4/2021',end:'10/4/2021',class:'B',subClass:['dd','dddd'],progress:5,target:7,status:'completed',id:'5',month:'April',adress:'fhifhoiojfoije',descreption:'kskskskksks',donationType:'clothes',userStatus:'Approved'},
  ])
  //const [show,notShow]=useState(false);
  const [filters,setFilter]=useState(campgin)
  const ongoingFilter=()=>{
    setFilter(prevF=>
      {return campgin.filter(c => 
      c.status==='completed')});  
  }
  const completedFilter=()=>{
    setFilter(prevF=>
      {return campgin.filter(c => 
      c.status==='ongoing')});

  }
  const allFilter=()=>{
    setFilter(campgin)
  }
  
  return (

  
<View style={styles.container}>
<ScrollView>
    <View style={globalStyles.buttonstyle}>


      <TouchableOpacity style={globalStyles.blackButtonStyle} onPress={allFilter}> 
          <Text style={globalStyles.textStyle}> All </Text>
      </TouchableOpacity>

      
      <TouchableOpacity style={globalStyles.greenButtonStyle} onPress={ongoingFilter}> 
          <Text style={globalStyles.textStyle} > Ongoing </Text>
      </TouchableOpacity>


      
      <TouchableOpacity style={globalStyles.blueButtonStyle} onPress={completedFilter}> 
          <Text style={globalStyles.textStyle}> Completed </Text>
      </TouchableOpacity>


     

      </View>
      

      <View style={styles.flatListStyle}>
        <FlatList
        keyExtractor={(item) => item.id} 
        data={filters} 
        renderItem={({ item }) => ( 
         <CampaignItem item={item} addUser={true} navigation={navigation}/>
        )}
        />
        
    </View>
    </ScrollView>
    <CreateCampaignBtn navigation={navigation}/>
    
    
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection:'column',
    // paddingTop:"2%"
  },
  flatListStyle:{
    justifyContent:'flex-start',
    flex:2,
    padding:20

  },
 
});

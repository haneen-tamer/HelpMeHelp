import { StatusBar } from 'expo-status-bar';
import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity , ScrollView,BackHandler} from 'react-native';
import CampaignItem from '../shared/CampaignItem';
import Header from '../shared/header';
import { SearchBar } from 'react-native-elements';



export default function App({navigation}) {

  const [entry, setEntry] = useState("");
  
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => true);
  }, []);

  const [campaign] = useState([
    {name:'Ramdan Iftar',organizationName:'Resala',startDate:'8/4/2021',endDate:'10/4/2021',class:'A',subClass:['dd','dddd'],progress:7,target:7,status:'completed',id:'1',month:'April',adress:'fhifhoiojfoije',descreption:'kskskskksks',donationType:'clothes',userStatus:'NotSent'},
    {name:'qqq',organizationName:'ggg',startDate:'8/4/2021',endDate:'10/4/2021',class:'B',subClass:['dd','dddd'],progress:1,target:7,status:'ongoing',id:'2',month:'April',adress:'fhifhoiojfoije',descreption:'kskskskksks',donationType:'clothes',userStatus:'NotSent'},
    {name:'qqq',organizationName:'ggg',startDate:'8/4/2021',endDate:'10/4/2021',class:'B',subClass:['dd','dddd'],progress:3,target:7,status:'completed',id:'3',month:'April',adress:'fhifhoiojfoije',descreption:'kskskskksks',donationType:'clothes',userStatus:'NotSent'},
    {name:'qqq',organizationName:'ggg',startDate:'8/4/2021',endDate:'10/4/2021',class:'B',subClass:['dd','dddd'],progress:4,target:7,status:'ongoing',id:'4',month:'April',adress:'fhifhoiojfoije',descreption:'kskskskksks',donationType:'clothes',userStatus:'NotSent'},
    {name:'qqq',organizationName:'ggg',startDate:'8/4/2021',endDate:'10/4/2021',class:'B',subClass:['dd','dddd'],progress:5,target:7,status:'completed',id:'5',month:'April',adress:'fhifhoiojfoije',descreption:'kskskskksks',donationType:'clothes',userStatus:'NotSent'},
  ])

  return (
    <ScrollView style={styles.container}>
    
      {/*<View style={styles.search} >
        <SearchBar placeholder="search..." onChangeText={(val) => setEntry(val)} />
      </View>/>*/}
      <View style={styles.flatListContainer}>
        <View style={styles.campaignListHeading}>
        <Text style={styles.text}> Donations you might like</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('seeAll')}>
        <Text style={styles.text} >see all{' >'}</Text>
        </TouchableOpacity>
        
        </View>
        <View style={styles.flatListStyle}>
          <FlatList
          keyExtractor={(item) => item.id} 
          data={campaign} 
          horizontal={true}
          renderItem={({ item }) => ( 
              <TouchableOpacity style={styles.container} 
              onPress={()=>navigation.navigate('userCampaignDetails',item)}>
              <CampaignItem item={item}/>
              </TouchableOpacity>
          )}
          />
          </View>
      </View>
      <View style={styles.flatListContainer}>
        <View style={styles.campaignListHeading}>
        <Text style={styles.text}> Campaigns you might like</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('seeAll')}>
        <Text style={styles.text} >see all{' >'}</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.flatListStyle}>
          <FlatList
          keyExtractor={(item) => item.id} 
          data={campaign} 
          horizontal={true}
          renderItem={({ item }) => ( 
              <TouchableOpacity style={styles.container} 
              onPress={()=>navigation.navigate('userCampaignDetails',item)}>
              <CampaignItem item={item}/>
              </TouchableOpacity>
          )}
          />
          </View>
      </View>
      <StatusBar style="auto" />
      </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 15,
    // margin:5,
    padding:5,
    fontWeight:'bold'
  },
  search: {
    marginTop: 20,
    height: 30,
    left: 20,
    width: 330,
  },
  flatListStyle:{
    justifyContent:'flex-start',
    flex:2,
    padding:20
  },
  flatListContainer:{
    borderColor:'#64CA80',
    borderWidth:2,
    borderRadius:8,
    marginTop:5
  },
  campaignListHeading:{
    flexDirection:'row',
    flex:1,
    alignItems:'flex-start',
    justifyContent:'space-between'
  },

});

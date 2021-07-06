import { StatusBar } from 'expo-status-bar';
import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity , ScrollView,BackHandler} from 'react-native';
import CampaignItem from '../shared/CampaignItem';
import Header from '../shared/header';
import { SearchBar } from 'react-native-elements';



export default function App({navigation}) {

  const [entry, setEntry] = useState("");
  const [username,setUsername]=useState( navigation.dangerouslyGetParent().getParam('User_Username'));
  const [campaign,setCampagin] = useState(null);
  const [donationType,setDonationType]=useState(null);
  const [found,setFound]=useState(false);
  const [donationFound,setDonationFound]=useState(null);
  const [volunteerFound,setVolunteerFound]=useState(null);
  const [donationCampaigns,setDonationCampaigns]=useState(null);
  const [volunteerCampaigns,setVolunteerCampaigns]=useState(null);
  
  // useEffect(() => {
  //   BackHandler.addEventListener('hardwareBackPress', () => true);
  // }, []);

  useEffect(() => {
      fetch("http://10.0.2.2:8080/userAllCampagin", {
        method: 'GET',
    })
    .then(res=>res.json())
    .then(json => {
       setCampagin(json)
       if(campaign!=null)
       {
         //console.log(z)
        setDonationCampaigns(prevF=>
          {return campaign.filter(c => 
          c.dontationTypeID==1)});
          setVolunteerCampaigns(prevF=>
            {return campaign.filter(c => 
            c.dontationTypeID!=1)});
            setFound(true);
       }
        
      // console.log(campaign)   
    })
    .catch((error) => {
        console.error(error);
    });
  }, []);
  //console.log(donationCampaigns);
  console.log(volunteerCampaigns);
  return (
    <ScrollView style={styles.container}>
    
      {/*<View style={styles.search} >
        <SearchBar placeholder="search..." onChangeText={(val) => setEntry(val)} />
      </View>/>*/}
      {found &&
      <View style={styles.flatListContainer}>
        <View style={styles.campaignListHeading}>
        <Text style={styles.text}> Donations you might like</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('seeAll')}>
        <Text style={styles.text} >see all{' >'}</Text>
        </TouchableOpacity>
        
        </View>
        <View style={styles.flatListStyle}>
          <FlatList
          // keyExtractor={(item) => item.id} 
          data={donationCampaigns} 
          horizontal={true}
          renderItem={({ item }) => ( 
              <TouchableOpacity style={styles.container} 
              onPress={()=>navigation.navigate('userCampaignDetails',item)}>
            <CampaignItem item={item} addUser={false} navigation={navigation}/>
              </TouchableOpacity>
          )}
          />
          </View>
      </View>
}
{found &&
      <View style={styles.flatListContainer}>
        <View style={styles.campaignListHeading}>
        <Text style={styles.text}> Campaigns you might like</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('seeAll')}>
        <Text style={styles.text} >see all{' >'}</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.flatListStyle}>
          <FlatList
          // keyExtractor={(item) => item.id} 
          data={volunteerCampaigns} 
          horizontal={true}
          renderItem={({ item }) => ( 
              <TouchableOpacity style={styles.container} 
              onPress={()=>navigation.navigate('userCampaignDetails',item)}>
               <CampaignItem item={item} addUser={false} navigation={navigation}/>
              </TouchableOpacity>
          )}
          />
          </View>
      </View>
}
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

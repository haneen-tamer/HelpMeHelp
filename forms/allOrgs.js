import { StatusBar } from 'expo-status-bar';
import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert, ScrollView, FlatList, Modal,
 TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import OrgCard from '../shared/orgCard';


export default function App({navigation}) {

  const [name, setName] = useState();
  const [users, setUsers] = useState();
  const [orgs, setOrgs] = useState(null);
  const [found,setFound]=useState(false);
  useEffect(() => {
    fetch("http://10.0.2.2:8080/admin/AllAcceptedOrganizations", {
      method: 'GET',
  })
  .then(res=>res.json())
  .then(json => {
    setOrgs(json)
    setFound(true);
  })
  .catch((error) => {
      console.error(error);
  });
}, []);


  return (

      
      <View style={styles.container}>
        {/* <View style={styles.head} > 
          <Text style={styles.headText}> Organizations </Text> 
        </View> */}
        <View style={styles.searchArea}>
          <TextInput style={styles.searchEntry} 
          placeholder='Search organization'
          onChangeText={(val) => setName(val)}
          />
          <AntDesign style={styles.icon} name="search1" size={24} color="black" />
        </View>

        <ScrollView style={styles.container}>
    {found &&
          <View style={styles.flatListStyle}>
            <FlatList
            data={orgs} 
            renderItem={({ item }) => (   
                <OrgCard item={item} navigation={navigation}/>
              )}
            />
          </View>
}
        </ScrollView>

      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 20,
  },
  searchArea:{
    flexDirection: 'row',
    width: '90%',
    height: '10%',
    backgroundColor: 'lightgrey',
    //fontSize: 15,
    //fontWeight: 'bold',
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    borderWidth: 0.25,
    margin: 20,
  },
  searchEntry:{
    fontSize: 16,
    fontWeight: 'bold',
    width: '90%',
  },
  icon:{
    right: '5%',
    position: 'absolute',
    paddingTop: 17,
  },
  flatListStyle:{
    justifyContent:'flex-start',
    flex:2,
    padding:5,
  },
  head:{
    width: '100%',
    height: '5%',
    fontSize:20,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headText:{
    fontSize: 15,
    fontWeight: 'bold',
  }
});

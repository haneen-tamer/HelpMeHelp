import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, ScrollView, FlatList, Modal,
 TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import UserCard from '../shared/userCard';


export default function App() {

  const [name, setName] = useState();
   const [user, setUser] = useState([
    {name:'Yomna Yasser',age:'22',userStatus:'Pending',id:'1',email:'yomna@gmail.com', governorate:'Cairo',contribution:'1',username:'YY'},
    {name:'Haneen',age:'21',userStatus:'Pending',id:'2',email:'sssss', governorate:'ddd',username:'HT'},
    {name:'Assem',age:'23',userStatus:'Pending',id:'3',email:'sssss', governorate:'ddd',username:'AM'},
    {name:'Sara',age:'21',userStatus:'Pending',id:'4',email:'sssss', governorate:'ddd',username:'SF'},
    {name:'Raghda',age:'22',userStatus:'Pending',id:'5',email:'sssss', governorate:'ddd',username:'RM'},
    {name:'Hager',age:'21',userStatus:'Pending',id:'6',email:'sssss', governorate:'ddd',username:'HM'},
    ]);


  return (

      
      <View style={styles.container}>
        {/* <View style={styles.head} > 
          <Text style={styles.headText}> Add new admin </Text> 
        </View> */}
        <View style={styles.searchArea}>
          <TextInput style={styles.searchEntry} 
          placeholder='Search user'
          onChangeText={(val) => setName(val)}
          />
          <AntDesign style={styles.icon} name="search1" size={24} color="black" />
        </View>

        <ScrollView style={styles.container}>
    
          <View style={styles.flatListStyle}>
            <FlatList
            data={user} 
            renderItem={({ item }) => (   
                <UserCard item={item} navigation={navigation}/>
              )}
            />
          </View>
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

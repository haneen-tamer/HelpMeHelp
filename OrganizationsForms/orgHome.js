import { StatusBar } from 'expo-status-bar';
import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity , ScrollView,BackHandler} from 'react-native';
import CampaignItem from '../shared/CampaignItem';
import Header from '../shared/header';
import { SearchBar } from 'react-native-elements';



export default function App({navigation}) {

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => true);
  }, []);

  return (
    <ScrollView style={styles.container}>
    
      <Text>hi</Text>
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

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, ScrollView, FlatList, Modal,
 TextInput, Keyboard, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import UserCard from '../shared/orgCard';
import { globalStyles } from './../shared/globalStyles';


export default function App() {

  const [hotline, setHotline] = useState();
  const [description, setDescription] = useState();


  return (

    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss();}}>
      <View style={styles.container}>
        {/* <View style={styles.head} > 
          <Text style={styles.headText}> Add new hotline </Text> 
        </View> */}
        
        <View style={styles.sectoin1} >
            <Text style={styles.textStyle}> Hotline: </Text>
            <TextInput
                style={styles.numberArea}
                placeholder="Enter number"
                keyboardType = 'numeric'
                onChangeText={(val) => setHotline(val)}           
            />
        </View>
        
        <View style={styles.sectoin2} >
            <Text style={styles.textStyle}> Description: </Text>
            <TextInput
                style={styles.descriptionArea}
                placeholder="Write the description"
                multiline={true}
                onChangeText={(val) => setDescription(val)}           
            />
        </View>

        <View style={{right: '15%'}} >
            <View style={globalStyles.buttonstyle}>
                <TouchableOpacity style={styles.blackButtonStyle} > 
                    <Text style={globalStyles.textStyle} > Add hotline </Text>
                </TouchableOpacity>
            </View>
        </View>


      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 20,
  },
  sectoin1:{
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    height: '20%',
    // alignItems: 'center',
  },
  sectoin2:{
    margin: 20,
    height: '35%',
    // alignItems: 'center',
  },
  textStyle:
  {
    fontSize:20,
    fontWeight:"bold",
    color:"#000",
    flexDirection: 'row',
    
    marginBottom:'2%',
  },
  numberArea:{
    flexDirection: 'row',
    borderRadius: 5,
    borderWidth: 1,
    width: '70%',
    height: '30%',
    padding: '3%',
    fontSize: 17,
  },
  descriptionArea:{
    flexDirection: 'row',
    borderRadius: 5,
    borderWidth: 1,
    width: '90%',
    height: '80%',
    padding: '3%',
    fontSize: 17,
  },
  blackButtonStyle:{
    width: '50%',
    height: 50,
    elevation: 5,
    backgroundColor: '#454545',
    borderRadius: 10,
    left: '270%',
    paddingVertical: 13,
    margin:1
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

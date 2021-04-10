import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableWithoutFeedback, Keyboard, 
        KeyboardAvoidingView, Modal, ScrollView, Button, BackHandler} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import CustomButton from '../shared/button';
import { Fontisto } from '@expo/vector-icons';
import { Alert } from 'react-native';

export default function Start({ navigation }) {



  const DrawNav = () => {
    navigation.navigate('DrawNav');
  }

  const userSignUp = () => {
    navigation.navigate('userRegister');
  }

  const orgSignUp = () => {
    navigation.navigate('orgRegister');
  }
  
  const [modal, setModal] = useState(false); 
  //const [username, setUsername] = useState(""); 
 
  return ( 
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss();}}>

      <View style={styles.container}>
        <Modal animationType="slide" transparent={true} visible={modal}>
          
          <View style={styles.modalView}>

            <View style={styles.closeIcon} >
              <Fontisto name='close-a' size={20} onPress={() => setModal(false)}/>
            </View>

              <View style={{marginTop: '20%'}}>
                  <CustomButton text='User' onPress={() => {
                    navigation.navigate('userRegister')
                    setModal(false)
                  }}/>
                  <CustomButton text='Organization' onPress={() => {
                    navigation.navigate('orgRegister')
                    setModal(false)
                  }}/> 
              </View>
          </View>

        </Modal>

      <View style={styles.head} />

        <ScrollView>
          <View style={styles.logoCenter}>
            <Image style={styles.logo} source={require('../assets/logo.png')} />
            <Text style={styles.title}>HELP ME HELP</Text>
          </View>

          <View style={styles.entryArea} >   
            <TextInput 
              style={styles.entryData}
              placeholderTextColor="lightslategrey"
              placeholder="Username"
              onChangeText={(val) => setUsername(val)}
              />
            <TextInput
              secureTextEntry={true}
              style={styles.entryData}
              placeholderTextColor="lightslategrey"
              placeholder="Password"
              />

            <CustomButton text='Login' onPress={DrawNav} />

            <View style={styles.horiztontalLine}>
              <View style={styles.inLine} />
                <View>
                  <Text style={{width: 25, textAlign: 'center'}}>Or</Text>
                </View>
              <View style={styles.inLine} />
            </View>

            <CustomButton text='Sign up' onPress={() => setModal(true) } />

          </View>
        
        </ScrollView>
      </View>
      
    </TouchableWithoutFeedback>
    <StatusBar style="auto" />
    </KeyboardAvoidingView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  head: {
    flex: 1,
    flexDirection: 'row',
  },
  logoCenter: {
    alignItems: 'center',
    marginTop: 50,
  },
  logo: {
    width: 100,
    height: 100,
  },
  title: {
    fontFamily: "Arial-BoldMT",
    fontSize: 40,
  },
  entryData: {
      borderBottomWidth: 2,
      borderColor: 'black',
      padding: 5,
      margin: 15,
      width: 200,
      height: 40,
      fontSize: 20,
  },
  entryArea: {
    margin: 30,
  },
  btn: {
    backgroundColor: 'silver',
    borderRadius: 4,
    paddingVertical: 13,
    margin: 10,
  },
  btnText: {
    fontSize: 17,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    textAlign: 'center',
  },
  horiztontalLine: {
    flexDirection: 'row',
    marginTop: 45,
    margin:10,
    alignItems: 'center',
  },
  inLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
  },
  modalView: {
    position: 'absolute',
    bottom: 1,
    height: '50%',
    width: '100%',
    opacity: 1,
    backgroundColor: 'dimgray',
    //justifyContent: 'center',
    /* paddingStart: 0,
    flex: 1,
    alignItems: "center",
    margin: 40,
    marginVertical: 100,
    width: 300,
    opacity: 0.9, */
  },
  closeIcon: {
    position: 'absolute',
    //bottom: 20,
    //alignItems: 'center',
    //justifyContent: 'center',
    top: 10,
    right: 15,
    marginBottom: 5,
  },
});
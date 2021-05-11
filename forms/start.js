import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableWithoutFeedback, Keyboard, 
        KeyboardAvoidingView, Modal, ScrollView, Button, BackHandler,TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import CustomButton from '../shared/button';
import { Fontisto } from '@expo/vector-icons';
import { Alert } from 'react-native';
import { globalStyles } from './../shared/globalStyles';

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
          </View>

               {/* <CustomButton text='Login' onPress={DrawNav} /> */}
              <View style={globalStyles.buttonAlignStyle}>
                <TouchableOpacity style={styles.blueButtonStyle} onPress={DrawNav}> 
                <Text style={globalStyles.textStyle}>Login</Text>
                </TouchableOpacity>
                </View>

              <View style={styles.horiztontalLine}>
                <View style={styles.inLine} />
                  <View>
                    <Text style={styles.textStyle}>OR</Text>
                  </View>
                <View style={styles.inLine} />
              </View>

              {/* <CustomButton text='Sign up' onPress={() => setModal(true) } /> */}
              <View style={globalStyles.buttonAlignStyle}>
                <TouchableOpacity style={styles.greenButtonStyle} onPress={() => setModal(true)}> 
                <Text style={globalStyles.textStyle}>Sign up</Text>
                </TouchableOpacity>
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
    justifyContent:"flex-start",
    alignItems: 'center',
    padding:"10%"
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
    // fontFamily: "Arial-BoldMT",
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
  horiztontalLine: {
    flexDirection: 'row',
    marginTop: 45,
    margin:10,
    alignItems: 'center',
    paddingBottom:'10%'
  },
  inLine: {
    flex: 1,
    height: 2,
    backgroundColor: 'black',
    marginLeft:"1%",
    marginRight:"1%"
    
  },
  modalView: {
    position: 'absolute',
    bottom: 1,
    height: '50%',
    width: '100%',
    opacity: 1,
    backgroundColor: 'dimgray',
  },
  closeIcon: {
    position: 'absolute',
    top: 10,
    right: 15,
    marginBottom: 5,
  },
  blueButtonStyle:{
    width: '67%',
    height: 50,
    elevation: 8,
    backgroundColor: '#AACCDD',
    borderRadius: 10,
    paddingVertical: 10,
    margin:1
},
greenButtonStyle:{
  width: '67%',
  height: 50,
  elevation: 8,
  backgroundColor: "#64CA80",
  borderRadius: 10,
  paddingVertical: 10,
  margin:1
},
textStyle:
{
  width: 25, 
  textAlign: 'center',
  fontSize:18,
  fontWeight:"bold",
  marginRight:"1%",
  marginLeft:"1%"
  
}
  
});
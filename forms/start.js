import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableWithoutFeedback, Keyboard, 
        KeyboardAvoidingView, Modal, ScrollView, FlatList, BackHandler,TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import CustomButton from '../shared/button';
import { Fontisto } from '@expo/vector-icons';
import { Alert } from 'react-native';
import { globalStyles } from './../shared/globalStyles';
import Username from './../shared/username';

export default function Start({ navigation }) {

   
  const userSignUp = () => {
    navigation.navigate('userRegister');
  }

  const orgSignUp = () => {
    navigation.navigate('orgRegister');
  }

  const [modal, setModal] = useState(false); 
  const [username,setUsername]=useState(null);
  const [password,setPassword]=useState(null);
  const [loginInfo,setLoginIfo]=useState([
    {username:"org",password:"hi",role:"org",id:'1'},
    {username:"user",password:"bye",role:"user",id:'2'},
    {username:"Ad",password:"min",role:"admin",id:'3'},
  ]);
  const [loginError,setLoginError]=useState('');
  const [found,setFound]=useState(false);
  

    
    const loginBtn=()=>{
      setLoginError('')
      if (username == "Ad" && password == "min")
      {
        return navigation.navigate('AdminHome',{username: "Ad", password: "min", role: "admin", id: '3'});
      }
      if(username=="user" && password=="bye" )
      {
        return navigation.navigate('DrawNav');
      }
      else
      {
        fetch("http://10.0.2.2:8080/OrgLogin",{
      method:"post",
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({     
        username,
        password
    })
  })
    .then(res=>res.json())
    .then(json =>{
       if(json==true)
        {
          navigation.navigate('orgDrawerNav',{OrgUsername:username});
        }
        else
        {
          setLoginError('Invalid Username or Password. Please try again')
        }
       
    })

      }
      
  }
 
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
                onChangeText={(val) => setPassword(val)}
                />

              <View style={globalStyles.rowAlginStyle}>
            
                 <Text style={globalStyles.errorStyle}>{loginError}</Text>
            
               </View>
          </View>
           

              <View style={globalStyles.buttonAlignStyle}>
                <TouchableOpacity style={styles.blueButtonStyle} onPress={loginBtn}> 
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
    marginTop: 20,
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
    alignSelf:'center'
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
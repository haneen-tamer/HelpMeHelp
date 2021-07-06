import { StatusBar } from 'expo-status-bar';
import React ,{ useState,useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Button,Image,Platform,ScrollView,TextInput,FlatList} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import Header from '../shared/header';
import { globalStyles } from '../shared/globalStyles';
import GovernoratePicker from '../shared/governorateDropDown';
import OrgTypePicker from '../shared/orgTypeDropDown';
import CategoryPicker from '../shared/categoryDropDown';
import TextInputCard from './../shared/textInputCard';
import { onChange } from 'react-native-reanimated';

export default function App({navigation}) {
  const [changeImage,setChangeImage]=useState(false);
  const [image,setImage]=useState(null);
  
  const [username,setUsername]=useState('');
  const [usernameError,setUsernameError]=useState('');
  
  const [name,setName]=useState('');
  const [nameError,setNameError]=useState('');
  
  const [password,setPassword]=useState('');
  const [passwordError,setPasswordError]=useState('');
  
  const [email,setEmail]=useState('');
  const [emailError,setEmailError]=useState('');
  
  const [governorate,setGovernorate]=useState('');
  const [govError,setGovError]=useState('');
  
  const [age, setAge]=useState('');
  const [ageError,setAgeError]=useState('');
  
  const [address,setAddress]=useState('');
  const [addressError,setAddressError]=useState('');
  
 



  useEffect(()=>{async()=>{
    if(Platform.OS !=='web')
    {
      const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if(status !=='granted')
      {
        alert('Permission denied!')
      }
    }
  }
  },[])

  const PickImage = async ()=>{
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing:true,
      aspect:[4,3],
      quality:1
    })

    console.log(result)
    if(!result.cancelled)
    {
      setChangeImage(true)
      setImage(result.uri)
    }
  }

  const sumbit=()=>
  {
      if(name===""){
        setNameError("Name filed  can not be empty")
      } else{
        setNameError('')
      }
      if(password==="") {
        setPassword("Password filed can not be empty")
      }else {
        setPassword('')
      }
      if(username===""){
        setUsernameError("Username filed  can not be empty")
      }else{
        setUsernameError('')
      }
      if(email===""){
        setEmailError("Email address filed can not be empty")
      }else{
        setEmailError('') 
      }
      if(governorate===""){
        setGovError("Governorate filed  can not be empty")
      } else{
        setGovError('')
      }
      if(age==="") {
        setDescriptionError("Description filed  can not be empty")
      }else  {
        setAgeError('')
      }
      if(address===""){
        setAddressError("Address filed can not be empty")
      }
     

      if(name!=="" && password!=="" && username!=="" && email!=="" && governorate!=="" &&
      age!=="" && address!=="")
      {
        navigation.navigate('pendingPage',{
          Image: image, UserName: username, Name: name, Email:email, Password:password, Address:address,
          Governorate:governorate, Age:age
        })
      }
      
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={globalStyles.columnAlginStyle}>
          <View style={styles.imageborderStyle}>
          <TouchableOpacity onPress={PickImage}>
              {changeImage &&
                  <Image 
                  style={styles.uploadedImageStyle}
                  source={{uri:image}}
                />
              }
              {!changeImage &&
                  <Image 
                  style={globalStyles.headerImageStyle}
                  source={require('../images/CampaignImage.png')}
                />
              }
              <Text style={styles.textStyle}>Change Profile Picutre</Text>

            </TouchableOpacity>
            </View>

            <View style={globalStyles.rowAlginStyle}> 
                <Text style={styles.requiredStyle}>* Required</Text>
            </View>

            <TextInputCard value={" Username                          *" } onChange={value=> setUsername(value)} allow_pass={false} allow_multi={false}/>
           
            <View style={globalStyles.rowAlginStyle}>
              <Text style={globalStyles.errorStyle}>{usernameError}</Text>
            </View>
            
            <TextInputCard value={" Name                                 *"} onChange={value=> setName(value) } allow_pass={false} allow_multi={true}/>

            <View style={globalStyles.rowAlginStyle}>
            <Text style={globalStyles.errorStyle}>{nameError}</Text>
            </View>

            <TextInputCard value={" Password                          *"} onChange={value=> setPassword(value)} allow_pass={true} allow_multi={false}/>
      
            <View style={globalStyles.rowAlginStyle}>
               <Text style={globalStyles.errorStyle}>{passwordError}</Text>
            </View>

            <TextInputCard value={"  Email Address                 *"} onChange={value=> setEmail(value)} allow_pass={false} allow_multi={true}/>

            <View style={globalStyles.rowAlginStyle}>
              <Text style={globalStyles.errorStyle}>{emailError}</Text>
            </View>

           <GovernoratePicker onChange={value=> setGovernorate(value)}/>

            <View style={globalStyles.rowAlginStyle}>
               <Text style={globalStyles.errorStyle}>{govError}</Text>
            </View>
            
            <TextInputCard value={" Age                                        *"} onChange={value=> setAge(value)} allow_pass={false} allow_multi={true}/>

            <View style={globalStyles.rowAlginStyle}>
              <Text style={globalStyles.errorStyle}>{ageError}</Text>
            </View>
        
           
            <TextInputCard value={" Address                            *"} onChange={value=> setAddress(value)} allow_pass={false} allow_multi={true}/>

            <View style={globalStyles.rowAlginStyle}>
              <Text style={globalStyles.errorStyle}>{addressError}</Text>
            </View>

             
            <View style={styles.buttonAlignStyle}>
              <TouchableOpacity style={styles.buttonStyle} onPress={sumbit}> 
              <Text style={globalStyles.textStyle}>Sumbit</Text>
              </TouchableOpacity>
            </View>
           
           

        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius:8,
    borderWidth:2,
    borderColor:'#64CA80',
    justifyContent:"flex-start",
    paddingTop:20
  },
  textStyle:{
    fontSize:20,
    fontWeight:"bold",
    paddingBottom:20,
    paddingLeft:5,
    paddingRight:20,
    paddingTop:10,
   // color:'#06A9F0',
    alignSelf:'center',
    color:'#000'
    
  },
  imageborderStyle:
  {
    borderRadius:50,
    borderWidth:2,
    borderColor:'#06A9F0',
    paddingBottom:10,
    paddingTop:10
  },
  uploadedImageStyle:
  {
    width: 230,
    height: 230,
    alignSelf:'center',
    borderRadius:100,
  },
  dataStyle:{
    fontSize:25,
    fontWeight:"bold",
    color:'#000',
    backgroundColor:'lightgrey',
   // borderBottomWidth:1,
    margin:15,
    height:'65%',
    width:'80%',
    marginBottom:30,
    borderColor:"#64CA80",
    borderWidth:1
  },
  headerStyle:{
    fontSize:25,
    fontWeight:"bold",
    paddingBottom:10,
    paddingLeft:5,
    paddingRight:20,
    paddingTop:15,
    color:'#000'
  },
  
  socailStyle:{
    paddingLeft:22
  },
  mandatoryStyle:{
    color:"red",
    backgroundColor:'lightgrey',
    margin:15,
    marginLeft:0.1,
    fontSize:25,
  },
  buttonStyle:{
   width: '60%',
   height: 50,
   elevation: 8,
   backgroundColor: "#64CA80",
   borderRadius: 10,
   paddingVertical: 10,
  marginBottom:30,
  marginLeft:80,
  marginTop:20
    
  },
   buttonAlignStyle:{
    paddingRight:10,
    paddingLeft:10,
    paddingBottom:60,
},
requiredStyle:{
  color:"lightslategrey",
  fontSize:20,
  marginLeft:20,
  height:'90%',
  width:'80%',
  fontWeight:"bold",
  paddingTop:20
}
});

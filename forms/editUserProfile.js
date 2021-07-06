import { StatusBar } from 'expo-status-bar';
import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity , ScrollView} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { globalStyles } from './../shared/globalStyles';
import TextInputCard from './../shared/textInputCard';
import GovernoratePicker from '../shared/governorateDropDown';
import OrgTypePicker from '../shared/orgTypeDropDown';
import CategoryPicker from '../shared/categoryDropDown';



export default function App({navigation}) {
  const [changeImage,setChangeImage]=useState(false);
  const [image,setImage]=useState(null);
  const [username,setUsername]=useState( navigation.dangerouslyGetParent().getParam('User_Username'));
  const [usernameError,setUsernameError]=useState('');
  const [name,setName]=useState(navigation.getParam('name'));
  const [password,setPassword]=useState(navigation.getParam('password'));
  const [email,setEmail]=useState(navigation.getParam('email'));
  const [governorate,setGovernorate]=useState(navigation.getParam('Governorate'));
  const [address,setAddress]=useState(navigation.getParam('address'));
  const [country,setCountry]=useState(navigation.getParam('country'));
  const [age,setAge]=useState(navigation.getParam('age'));
  const [birthday,setBirthday]=useState(navigation.getParam('birthday'));
 
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

  const saveChanged=()=>{
    console.log(age)
    fetch("http://10.0.2.2:8080/userUpdateProfile/"+username, {
      method:"post",
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        name,    
        password,
        country,
        Governorate:governorate,
        email,
        age,
        address,
        birthday  
    })
  })
  .then(res=>res.json())
  .then(json => {
    if(json==true)
        {
          navigation.navigate('UserProfile');
        }
  })
  .catch((error) => {
      console.error(error);
  });
    
  }

  return (
  
    <ScrollView>
      <View style={globalStyles.columnAlginStyle}>
        <View style={styles.imageborderStyle}>
        
              {changeImage &&
                  <Image 
                  style={styles.profileImageStyle}
                  source={{uri:image}}
                />
              }
              {!changeImage &&
                  <Image 
                  style={globalStyles.headerImageStyle}
                  source={require('../images/CampaignImage.png')}
                />
              }
         
         </View>
         <TouchableOpacity onPress={PickImage}>
         <Text style={styles.textStyle} >Change Profile Picture</Text>
         </TouchableOpacity>
         <View style={styles.textAlignStyle}> 
         
         
            <Text style={styles.titleStyle}>Username</Text>
             <TextInputCard value={username} onChange={value=> setUsername(value)} allow_pass={false} allow_multi={true} allow_edit={true}/>

           <Text style={styles.titleStyle}>Name</Text>
           <TextInputCard value={name} onChange={value=> setName(value)} allow_pass={false} allow_multi={true} allow_edit={false}/>

           <Text style={styles.titleStyle}>Password</Text> 
           <TextInputCard value={"*****"} onChange={value=> setPassword(value)} allow_pass={true} allow_multi={false} allow_edit={true}/>

           <Text style={styles.titleStyle}>Email Address</Text>
           <TextInputCard value={email} onChange={value=> setEmail(value)} allow_pass={false} allow_multi={true} allow_edit={true}/>

           <Text style={styles.titleStyle}>Age</Text>
           <TextInputCard value={age.toString()} onChange={value=> setAge(value)} allow_pass={false} allow_multi={true} allow_edit={true}/>

           <Text style={globalStyles.profileTitleStyle}>Birthday</Text>
           <TextInputCard value={birthday.toString().substring(0,10)} onChange={value=> setBirthday(value)} allow_pass={false} allow_multi={true} allow_edit={true}/>

           <Text style={styles.titleStyle}>Choose Governorate</Text> 
           <GovernoratePicker 
            onChange={value=> setGovernorate(value)}
            value={governorate}
            />

          <Text style={styles.titleStyle}>Address</Text>
          <TextInputCard value={address} onChange={value=>setAddress(value)} allow_pass={false} allow_multi={true} allow_edit={true}/>
           
            <View style={styles.buttonstyle}>
                <TouchableOpacity style={globalStyles.blueButtonStyle} onPress={saveChanged}> 
                  <Text style={globalStyles.textStyle} > Save </Text>
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
    padding:20,
  },
  profileImageStyle:
  {
    width:190,
    height:190,
    alignSelf:"center",
    borderWidth:3,
    borderRadius:100,
    //  marginTop:20,
    // paddingBottom:20,
    // paddingTop:10
    marginBottom:10
    
    
  },
  imageborderStyle:
  {
    borderRadius:100,
    borderWidth:3,
    borderColor:'#AACCDD',
    alignSelf:"center",
    width:210,
    height:200,
    paddingBottom:10,
     paddingTop:2
  },
  textStyle:
  {
    fontSize:25,
    fontWeight:"bold",
    alignSelf:"center",
    paddingTop:'5%',
    color:"#3CB371",
    marginBottom:'2%'
    
  },
  titleStyle:{
    fontSize:15,
    color:'#000',
    paddingBottom:6,
    marginLeft:15,
    fontWeight:"bold",
    paddingTop:'2%'
    
    
    },
    socailStyle:{
      paddingLeft:22,
      marginBottom:"30%"
    },
    textAlignStyle:
  {
    paddingTop:20
  },
  headerStyle:{
    fontSize:25,
    fontWeight:"bold",
    paddingBottom:20,
    paddingLeft:5,
    paddingRight:20,
    paddingTop:15,
    color:'#000'
  },
  buttonstyle:
  {
    
    width:"150%",
    marginLeft:"25%",
    marginTop:"5%"
  }

});

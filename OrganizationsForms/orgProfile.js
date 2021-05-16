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
         <Text style={styles.textStyle} >Change Profile Photo</Text>
         </TouchableOpacity>
         <View style={styles.textAlignStyle}> 

           <Text style={styles.titleStyle}>Username</Text>
           <TextInputCard value={navigation.getParam('username') } allow_pass={false} allow_multi={true}/>

           <Text style={styles.titleStyle}>Name</Text>
           <TextInputCard value={"bla bla"} allow_pass={false} allow_multi={true}/>

           <Text style={styles.titleStyle}>Password</Text>
           <TextInputCard value={navigation.getParam('password')} allow_pass={true} allow_multi={false}/>

           <Text style={styles.titleStyle}>Email Address</Text>
           <TextInputCard value={"bla bla"} allow_pass={false} allow_multi={true}/>

           <Text style={styles.titleStyle}>Choose Governorate</Text>

           <GovernoratePicker/> 
           {/* onChange={value=> setGovernorate(value)}/> */}
           
           <Text style={styles.titleStyle}>Description</Text>
           <TextInputCard value={"bla bla"} allow_pass={false} allow_multi={true}/>

           <Text style={styles.titleStyle}>Purpose</Text>
           <TextInputCard value={"bla bla"} allow_pass={false} allow_multi={true}/>

           <Text style={styles.titleStyle}>Address</Text>
           <TextInputCard value={"bla bla"} allow_pass={false} allow_multi={true}/>

           <Text style={styles.titleStyle}>Organization Type</Text>
           <OrgTypePicker />

           <Text style={styles.titleStyle}>Category</Text>
           <CategoryPicker />
           <Text style={styles.titleStyle}>Website</Text>
           <TextInputCard value={"bla bla"} allow_pass={false} allow_multi={true}/>

           <Text style={styles.titleStyle}>Hotline</Text>
           <TextInputCard value={"bla bla"} allow_pass={false} allow_multi={true}/>

           <Text style={styles.headerStyle}>  Socail Media: </Text>

          <View style={styles.socailStyle}>
              <Text style={styles.titleStyle}>Facebook</Text>
              <TextInputCard value={"bla bla"} allow_pass={false} allow_multi={true}/>

              <Text style={styles.titleStyle}>Instagram</Text>
              <TextInputCard value={"bla bla"} allow_pass={false} allow_multi={true}/>

              <Text style={styles.titleStyle}>Twitter</Text>
              <TextInputCard value={"bla bla"} allow_pass={false} allow_multi={true}/>
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
    fontSize:20,
    fontWeight:"bold",
    alignSelf:"center",
    paddingTop:'5%',
    color:"#000",
    marginBottom:'15%'
    
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
      paddingLeft:22
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

});

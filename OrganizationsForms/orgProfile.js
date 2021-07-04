import { StatusBar } from 'expo-status-bar';
import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity , ScrollView} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { globalStyles } from './../shared/globalStyles';
import TextInputCard from './../shared/textInputCard';
import { useIsFocused } from '@react-navigation/native';
import GovernoratePicker from '../shared/governorateDropDown';
import OrgTypePicker from '../shared/orgTypeDropDown';
import CategoryPicker from '../shared/categoryDropDown';



export default function App({navigation}) {
  const [changeImage,setChangeImage]=useState(false);
  const [image,setImage]=useState(null);
  const [username,setUsername]=useState( navigation.dangerouslyGetParent().getParam('OrgUsername'));
  const [usernameEdit,setUsernameEdit]=useState(null);
  const [data,setData]=useState(null);
  const [found,setFound]=useState(false);
  
  async function getDetails() {
    const configs = {
        methods: 'GET',
        // mode: 'cors',
        // headers: {'Content-Type': 'application/json'},
        // body: JSON.stringify({
        //     'country': country
        // })
    };
    const response = await fetch("http://10.0.2.2:8080/OrgProfile/"+username, configs)
    const data = await response.json();
    setData(data)
    setFound(true);
}

  useEffect(() => {
    getDetails();
    //   fetch("http://10.0.2.2:8080/OrgProfile/"+username, {
    //     method: 'GET',
    // })
    // .then(res=>res.json())
    // .then(json => {
    //   setData(json)
    //   setFound(true);
    // })
    // .catch((error) => {
    //     console.error(error);
    // });
  }, []);
  return (
    <ScrollView>
      <View style={globalStyles.columnAlginStyle}>
        <View style={styles.imageborderStyle}>
          <Image 
          style={globalStyles.headerImageStyle}
          source={require('../images/CampaignImage.png')}
           />
         </View>
         <TouchableOpacity onPress={()=>{navigation.navigate('editOrgProfile',data)}}>
         <Text style={styles.textStyle} >Edit Profile</Text>
         </TouchableOpacity>
         {found &&
         <View style={styles.textAlignStyle}> 
         
         
            <Text style={styles.titleStyle}>Username</Text>
           <TextInputCard value={username} allow_pass={false} allow_multi={true} allow_edit={false}/>

           <Text style={styles.titleStyle}>Name</Text>
           <TextInputCard value={data.name} allow_pass={false} allow_multi={true} allow_edit={false}/>

           <Text style={styles.titleStyle}>Email Address</Text>
           <TextInputCard value={data.email} allow_pass={false} allow_multi={true} allow_edit={false}/>

           <Text style={styles.titleStyle}>Phone Number</Text>
           <TextInputCard value={data.phoneNumber.toString()} allow_pass={false} allow_multi={true} allow_edit={false}/>

           {/* <Text style={styles.titleStyle}>Choose Governorate</Text> */}

           {/* <GovernoratePicker/>  */}
           {/* onChange={value=> setGovernorate(value)}/> */}
           <Text style={styles.titleStyle}> Governorate</Text>
           <TextInputCard value={data.Governorate} allow_pass={false} allow_multi={true} allow_edit={false}/>
           
           <Text style={styles.titleStyle}>Description</Text>
           <TextInputCard value={data.description} allow_pass={false} allow_multi={true} allow_edit={false}/>

           <Text style={styles.titleStyle}>Purpose</Text>
           <TextInputCard value={data.purpose} allow_pass={false} allow_multi={true} allow_edit={false}/>

           <Text style={styles.titleStyle}>Address</Text>
           {
             data.location.map(address=><TextInputCard value={address} allow_pass={false} allow_multi={true} allow_edit={false}/>)
           } 
           

           <Text style={styles.titleStyle}>Organization Type</Text>
           <TextInputCard value={data.organizationType} allow_pass={false} allow_multi={true} allow_edit={false}/>
           {/* <OrgTypePicker /> */}

           <Text style={styles.titleStyle}>Category</Text>
           <TextInputCard value={data.category} allow_pass={false} allow_multi={true} allow_edit={false}/>

           <Text style={styles.titleStyle}>SubCategory</Text>
           <TextInputCard value={data.Subcategory} allow_pass={false} allow_multi={true} allow_edit={false}/>
           {/* <CategoryPicker /> */}
           <Text style={styles.titleStyle}>Website</Text>
           <TextInputCard value={data.website} allow_pass={false} allow_multi={true} allow_edit={false}/>

           <Text style={styles.titleStyle}>Hotline</Text>
           <TextInputCard value={data.hotline.toString()} allow_pass={false} allow_multi={true} allow_edit={false}/>

           <Text style={styles.headerStyle}>  Socail Media: </Text>

          <View style={styles.socailStyle}>
          {
             data.socialMedia.map(links=><TextInputCard value={links} allow_pass={false} allow_multi={true} allow_edit={false}/>)
           }
            
              {/* <Text style={styles.titleStyle}>Facebook</Text>
              <TextInputCard value={"bla bla"} allow_pass={false} allow_multi={true} allow_edit={false}/>

              <Text style={styles.titleStyle}>Instagram</Text>
              <TextInputCard value={"bla bla"} allow_pass={false} allow_multi={true} allow_edit={false}/>

              <Text style={styles.titleStyle}>Twitter</Text>
              <TextInputCard value={"bla bla"} allow_pass={false} allow_multi={true} allow_edit={false}/> */}
           </View>

            
         


         </View>
         
}
       

        
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
      marginBottom:70
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

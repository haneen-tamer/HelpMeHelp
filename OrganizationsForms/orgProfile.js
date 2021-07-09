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
  const [showHotline,setShowHotline]=useState(true);
  const [showWebsite,setShowWebsite]=useState(true);
  const [showLinks,setShowLinks]=useState(true);
  
//   async function getDetails() {
//     const configs = {
//         methods: 'GET',
//     };
//     const response = await fetch("http://10.0.2.2:8080/OrgProfile/"+username, configs)
//     const data = await response.json();
//     setData(data)
//     setFound(true);
// }

  useEffect(() => {
    //getDetails();
   
      fetch("http://10.0.2.2:8080/OrgProfile/"+username, {
        method: 'GET',
    })
    .then(res=>res.json())
    .then(json => {
      setData(json)
      setFound(true);
      console.log(data.hotline)
      if(data.hotline=="NA")
        {
          setShowHotline(false)
        }
        if(data.website=="NA")
        {
          setShowWebsite(false)
        }
        if(data.socialMedia.length==0)
        {
          console.log(data.socialMedia.length)
          setShowLinks(false)
        }
        
      
    })
    .catch((error) => {
        console.error(error);
    });
  }, []);
  return (
    <ScrollView>
      <View style={globalStyles.columnAlginStyle}>
        <View style={globalStyles.profileImageborderStyle}>
          <Image 
          style={globalStyles.headerImageStyle}
          source={require('../images/CampaignImage.png')}
           />
         </View>
         <TouchableOpacity onPress={()=>{navigation.navigate('editOrgProfile',data)}}>
         <Text style={globalStyles.profileTextStyle} >Edit Profile</Text>
         </TouchableOpacity>
         {found &&
         <View style={styles.textAlignStyle}> 
         
         
            <Text style={globalStyles.profileTitleStyle}>Username</Text>
           <TextInputCard value={username} allow_pass={false} allow_multi={true} allow_edit={false}/>

           <Text style={globalStyles.profileTitleStyle}>Name</Text>
           <TextInputCard value={data.name} allow_pass={false} allow_multi={true} allow_edit={false}/>

           <Text style={globalStyles.profileTitleStyle}>Email Address</Text>
           <TextInputCard value={data.email} allow_pass={false} allow_multi={true} allow_edit={false}/>

           <Text style={globalStyles.profileTitleStyle}> Governorate</Text>
           <TextInputCard value={data.Governorate} allow_pass={false} allow_multi={true} allow_edit={false}/>

           <Text style={globalStyles.profileTitleStyle}>Description</Text>
           <TextInputCard value={data.description} allow_pass={false} allow_multi={true} allow_edit={false}/>

           <Text style={globalStyles.profileTitleStyle}>Purpose</Text>
           <TextInputCard value={data.purpose} allow_pass={false} allow_multi={true} allow_edit={false}/>


           <Text style={globalStyles.profileTitleStyle}>Organization Type</Text>
           <TextInputCard value={data.organizationType} allow_pass={false} allow_multi={true} allow_edit={false}/>
           {/* <OrgTypePicker /> */}

           <Text style={globalStyles.profileTitleStyle}>Category</Text>
           <TextInputCard value={data.category} allow_pass={false} allow_multi={true} allow_edit={false}/>

           <Text style={globalStyles.profileTitleStyle}>SubCategory</Text>
           <TextInputCard value={data.subCategory} allow_pass={false} allow_multi={true} allow_edit={false}/>
            {showWebsite &&
           <Text style={globalStyles.profileTitleStyle}>Website</Text>
            }
            {showWebsite &&
           <TextInputCard value={data.website} allow_pass={false} allow_multi={true} allow_edit={false}/>
            }
           <Text style={globalStyles.profileTitleStyle}>Phone Number</Text>
           <TextInputCard value={data.phoneNumber.toString()} allow_pass={false} allow_multi={true} allow_edit={false}/>

           <Text style={globalStyles.profileTitleStyle}>Address</Text>
           {
             data.location.map(address=><TextInputCard value={address} allow_pass={false} allow_multi={true} allow_edit={false}/>)
           } 

           {showHotline &&
           <Text style={globalStyles.profileTitleStyle}>Hotline Number</Text>
            }
            {showHotline &&
           <TextInputCard value={data.hotline[0].toString()} allow_pass={false} allow_multi={true} allow_edit={false}/>
            }
            {showHotline &&
           <Text style={globalStyles.profileTitleStyle}>Hotline Description</Text>
            }
            {showHotline &&
           <TextInputCard value={data.hotline[1].toString()} allow_pass={false} allow_multi={true} allow_edit={false}/>
            }
            {showLinks &&
           <Text style={styles.headerStyle}>  Socail Media: </Text>
            }
          {showLinks &&
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
}

            
         


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

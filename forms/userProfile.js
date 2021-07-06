import { StatusBar } from 'expo-status-bar';
import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity , ScrollView} from 'react-native';
import { globalStyles } from './../shared/globalStyles';
import TextInputCard from './../shared/textInputCard';

export default function App({navigation}) {
  const [changeImage,setChangeImage]=useState(false);
  const [image,setImage]=useState(null);
  const [username,setUsername]=useState( navigation.dangerouslyGetParent().getParam('User_Username'));
  const [data,setData]=useState(null);
  const [found,setFound]=useState(false);
  //console.log(username)
  useEffect(() => {
    fetch("http://10.0.2.2:8080/userProfile/"+username, {
      method: 'GET',
    })
    .then(res=>res.json())
    .then(json => {
      setData(json)
      setFound(true);
    })
    .catch((error) => {
        console.error(error);
    });
  }, []);

  return (
    <ScrollView>
     {found &&
      <View style={globalStyles.columnAlginStyle}>
          <View style={globalStyles.profileImageborderStyle}>
          <Image 
          style={globalStyles.headerImageStyle}
          source={require('../images/CampaignImage.png')}
           />
         </View>
         <TouchableOpacity onPress={()=>{navigation.navigate('editUserProfile',data)}}>
         <Text style={globalStyles.profileTextStyle} >Edit Profile</Text>
         </TouchableOpacity>
         
           <Text style={globalStyles.profileTitleStyle}>Username</Text>
           <TextInputCard value={username} allow_pass={false} allow_multi={true} allow_edit={false}/>

           <Text style={globalStyles.profileTitleStyle}>Name</Text>
           <TextInputCard value={data.name} allow_pass={false} allow_multi={true} allow_edit={false}/>

           <Text style={globalStyles.profileTitleStyle}>Email Address</Text>
           <TextInputCard value={data.email} allow_pass={false} allow_multi={true} allow_edit={false}/>

           <Text style={globalStyles.profileTitleStyle}>Age</Text>
           <TextInputCard value={data.age.toString()} allow_pass={false} allow_multi={true} allow_edit={false}/>

           <Text style={globalStyles.profileTitleStyle}>Birthday</Text>
           <TextInputCard value={data.birthday.toString().substring(0,10)} allow_pass={false} allow_multi={true} allow_edit={false}/>

          <Text style={globalStyles.profileTitleStyle}> Governorate</Text>
           <TextInputCard value={data.Governorate} allow_pass={false} allow_multi={true} allow_edit={false}/>
         
           <Text style={globalStyles.profileTitleStyle}>Address</Text>
           <TextInputCard value={data.address} allow_pass={false} allow_multi={true} allow_edit={false}/>

         </View>
}
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
});

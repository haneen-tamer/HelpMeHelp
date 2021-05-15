import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity , ScrollView} from 'react-native';
import ProfileCard from './../shared/profileCard';

export default function App({navigation}) {

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.imageborderStyle}>
      <Image
        style={styles.profileImageStyle}
        source={require('../images/user.png')}
        />
        </View>
        <View style={styles.textAlignStyle}>

        <ProfileCard title={'Full Name'} value={navigation.getParam('name')}/>

        <ProfileCard title={'Username'} value={navigation.getParam('username')}/>

        <ProfileCard title={'Email Address'} value={navigation.getParam('email')}/>

        <ProfileCard title={'Age'} value={navigation.getParam('age')}/>

        <ProfileCard title={'Governorate'} value={navigation.getParam('governorate')}/>

        <ProfileCard title={'Contribution'} value={navigation.getParam('contribution')}/>
        
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
    width:100,
    height:100,
    alignSelf:"center",
    // borderColor:'#AACCDD',
    borderWidth:3,
    borderRadius:50,
    margin:20,
    
    
  },
  imageborderStyle:
  {
    borderRadius:100,
    borderWidth:3,
    borderColor:'#AACCDD',
    alignSelf:"center",
    width:150,
    height:150,
    paddingBottom:10,
    paddingTop:10
  },
  

  
  textAlignStyle:
  {
    paddingTop:20
  }

 

});

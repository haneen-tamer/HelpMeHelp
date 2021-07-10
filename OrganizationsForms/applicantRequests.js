import { StatusBar } from 'expo-status-bar';
import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity , ScrollView} from 'react-native';
import ApplicantCard from './applicantCard';



export default function App({navigation}) {

  const [item,setItem]=useState(navigation.getParam('item'))
  const [user, setUser] = useState(null)
  const [found,setFound]=useState(false);
  const [noApplicants,setNoApplicants]=useState(false);
  const [username,setUsername]=useState(item.orgUsername)
  console.log(item.U_username)
  useEffect(() => {
    if(username!=null){
    setFound(true);
      fetch("http://10.0.2.2:8080/orgApplicants/"+item.ID, {
        method: 'GET',
    })
    .then(res=>res.json())
    .then(json => {
      
        setUser(json)
        console.log(user)
      
      
    })
    .catch((error) => {
        console.error(error);
    });
  }
  else
  {
    setFound(true);
    fetch("http://10.0.2.2:8080/AllDonationPendings/"+item.ID, {
      method: 'GET',
  })
  .then(res=>res.json())
  .then(json => {
    
      setUser(json)
      console.log(user)
    
    
  })
  .catch((error) => {
      console.error(error);
  });
  }
  }, []);
  console.log(user)
  // if(user==null)
  // {
  //   setNoApplicants(true);
  // }
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.cardStyle}>
          {found &&
          <FlatList
          keyExtractor={(item) => item.id} 
          data={user} 
          renderItem={({ item }) => ( 
            
              <ApplicantCard item={item} navigation={navigation} ID={item.ID}/>
              
          )}
          
          />
          }


        </View>

      </View>
    
      
      </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
   
  },
  

});

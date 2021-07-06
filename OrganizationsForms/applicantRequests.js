import { StatusBar } from 'expo-status-bar';
import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity , ScrollView} from 'react-native';
import ApplicantCard from './applicantCard';



export default function App({navigation}) {

  const [ID,setID]=useState(navigation.getParam('ID'))
  const [user, setUser] = useState(null)
  const [found,setFound]=useState(false);
  const [noApplicants,setNoApplicants]=useState(false);
  useEffect(() => {
    setFound(true);
      fetch("http://10.0.2.2:8080/orgApplicants/"+ID, {
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
            
              <ApplicantCard item={item} navigation={navigation} ID={ID}/>
              
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

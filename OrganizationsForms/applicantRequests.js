import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity , ScrollView} from 'react-native';
import ApplicantCard from './applicantCard';



export default function App({navigation}) {

  const [user, setUser] = useState([
    {name:'Yomna Yasser',age:'22',userStatus:'Pending',id:'1'},
    {name:'Haneen',age:'21',userStatus:'Pending',id:'2'},
    {name:'Assem',age:'23',userStatus:'Pending',id:'3'},
    {name:'Sara',age:'21',userStatus:'Pending',id:'4'},
    {name:'Raghda',age:'22',userStatus:'Pending',id:'5'},
    {name:'Hager',age:'21',userStatus:'Pending',id:'6'},
  ])

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.cardStyle}>
          <FlatList
          keyExtractor={(item) => item.id} 
          data={user} 
          renderItem={({ item }) => ( 
            
              <ApplicantCard item={item} navigation={navigation}/>
              
          )}
          
          />
         

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

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity , ScrollView} from 'react-native';
import ApplicantCard from './applicantCard';



export default function App({navigation}) {

  const [user, setUser] = useState([
    {name:'Yomna Yasser',age:'22',userStatus:'Pending',id:'1',email:'yomna@gmail.com', governorate:'Cairo',contribution:'1',username:'YY'},
    {name:'Haneen',age:'21',userStatus:'Pending',id:'2',email:'sssss', governorate:'ddd',username:'HT'},
    {name:'Assem',age:'23',userStatus:'Pending',id:'3',email:'sssss', governorate:'ddd',username:'AM'},
    {name:'Sara',age:'21',userStatus:'Pending',id:'4',email:'sssss', governorate:'ddd',username:'SF'},
    {name:'Raghda',age:'22',userStatus:'Pending',id:'5',email:'sssss', governorate:'ddd',username:'RM'},
    {name:'Hager',age:'21',userStatus:'Pending',id:'6',email:'sssss', governorate:'ddd',username:'HM'},
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

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
  ]);

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




// import React,{ useState }  from 'react';
// import {StyleSheet,TouchableOpacity,View,Text,Image} from 'react-native';
// import * as Progress from 'react-native-progress';
// import {globalStyles} from './globalStyles';
// import Button from './button';
// // import { useNavigation } from '@react-navigation/native';
// // import { withNavigation} from 'react-navigation';




// export default function CampaignItem({navigation,item}){

//     return(
       
//         <View style={styles.container}>
//             <View style={styles.horizontalSection}>
//                 <Text style={styles.item}>{item.name}</Text>
//                 <View style={{right: '%', position: 'absolute'}}>
//                     <TouchableOpacity style={styles.b_view}>
//                         <Text style={styles.bText} > View Profile </Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//             <View style={styles.horiztontalLine}>
//                 <View style={styles.inLine} />
//             </View>
            
//             <View style={styles.horizontalSection}>
//                 <TouchableOpacity style={styles.b_accept}>
//                     <Text style={styles.bText} > Accept </Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.b_reject}>
//                     <Text style={styles.bText} > Reject </Text>
//                 </TouchableOpacity>
//             </View>
//         </View>

        
        
// );
// }

// const styles = StyleSheet.create({
//     container:{
//         flexDirection:'column',
//         padding:10,
//         marginBottom:10,
//         borderRadius:8,
//         borderWidth:2,
//         borderColor:'#1e90ff',
//     },
//     item:{
//         padding: 0,
//         fontSize:25,
//         color:'#000',
//         width: '50%',
//         fontWeight: 'bold',
//     },
//     horizontalSection:{
//         flexDirection: 'row',
//         flex: 1,
//         padding: 5,
//         margin: 10, 
//     },
//     inLine: {
//     flex: 1,
//     height: 1,
//     backgroundColor: 'black',
//     },
    
//     b_view:{
//         width: '100%',
//         backgroundColor: 'lightgrey',
//         padding: 4,
//         borderRadius: 4,
//         borderColor: '#2f4f4f',
//         borderWidth: 1
//     },
//     b_accept:{
//         width: '40%',
//         backgroundColor: '#3cb371',
//         padding: 4,
//         borderRadius: 4,
//         borderColor: '#2f4f4f',
//         borderWidth: 1
//     },
//     b_reject:{
//         width: '40%',
//         backgroundColor: '#ff0000',
//         padding: 4,
//         borderRadius: 4,
//         borderColor: '#2f4f4f',
//         borderWidth: 1,
//         left: '100%'
//     },

//     bText:{
//         fontSize: 20,
//         color: 'black',
//         padding: 5,
        
//         justifyContent: 'center',
//         textAlign: 'center',
//     },


//     horiztontalLine: {
//     flexDirection: 'row',
//     marginTop: 45,
//     alignItems: 'center',
//     paddingBottom: 1
//   },
// });
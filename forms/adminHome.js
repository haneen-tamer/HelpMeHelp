import { StatusBar } from 'expo-status-bar';
import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity , ScrollView,BackHandler} from 'react-native';
import OrgRequest from '../OrganizationsForms/orgRequest';
import CampaignItem from '../shared/CampaignItem';
import Header from '../shared/header';
import { SearchBar } from 'react-native-elements';
import OrgRequestCard from '../OrganizationsForms/orgRequestCard';




export default function App({navigation}) {

  const [entry, setEntry] = useState("");
  const [orgs, setOrgs] = useState(null);
  const [found,setFound]=useState(false);
  
  // useEffect(() => {
  //   BackHandler.addEventListener('hardwareBackPress', () => true);
  // }, []);

  useEffect(() => {
    fetch("http://10.0.2.2:8080/admin/AllPendingOrganizations", {
      method: 'GET',
  })
  .then(res=>res.json())
  .then(json => {
    setOrgs(json)
    setFound(true);
  })
  .catch((error) => {
      console.error(error);
  });
}, []);

 

  return (
    
    <View style={styles.container_temp} >
      <View style={styles.head} > 
          <Text style={styles.headText}> Organizations requests </Text> 
      </View>

      <ScrollView style={styles.container}>
        
        {found &&
        <View style={styles.flatListStyle}>
          <FlatList
          keyExtractor={(item) => item.id} 
          data={orgs} 
          renderItem={({ item }) => (   
              <OrgRequestCard navigation={navigation} item={item}/>
            )}
          />
        </View>   
}     
      </ScrollView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15
  },
  container_temp: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    // margin:5,
    padding:10,
    fontWeight:'bold'
  },
  search: {
    marginTop: 20,
    height: 30,
    left: 20,
    width: 330,
  },
  flatListStyle:{
    justifyContent:'flex-start',
    flex:2,
    padding:5
  },
  flatListContainer:{
    borderColor:'#1e90ff',
    borderWidth:2,
    borderRadius:8,
    marginBottom:10,
    padding: 3
  },
  campaignListHeading:{
    flexDirection:'row',
    flex:1,
    alignItems:'flex-start',
    justifyContent:'space-between'
  },
  head:{
      width: '100%',
      height: '7%',
      fontSize:20,
      // backgroundColor: 'lightgrey',
      justifyContent: 'center',
      borderBottomWidth: 1,
      borderBottomColor: 'lightgrey'
    },
    headText:{
      fontSize: 15,
      fontWeight: 'bold',
      marginLeft: 14,
      marginTop: 15,
    }
});

// import { StatusBar } from 'expo-status-bar';
// import React, { useState } from 'react';
// import { StyleSheet, Text, View, Button, ScrollView, FlatList, Alert, Modal } from 'react-native';
// import Header from '../shared/header';
// import { SearchBar } from 'react-native-elements';
// import drawNav from '../navigations/drawerNavigation';
// import Start from './start';





// export default function App() {

//   const [orgs, setOrgs] = useState([
//     { name: 'abcd', key: '1' },
//     { name: 'efgh', key: '2' },
//     { name: 'ijkl', key: '3' },
//     { name: 'mnop', key: '4' },
//     { name: 'qrst', key: '5' },
//     { name: 'uvwxyz', key: '6' },
//   ]);

//   return (
    
    
//     <ScrollView style={styles.contain}>
    
      

//       <FlatList 
//         keyExtractor={(item) => item.key}
//         data={orgs}
//         renderItem={({ item }) => (
//           <View style={styles.box} >
//             <Text>{item.name}</Text>
//           </View>
//         ) }
//       />    

      

//     </ScrollView>
//     // <ScrollView>
//     //   <View style={styles.contain} >
//     //     <View style={styles.box} >
//     //       <View style={styles.inner} >
//     //         <Text> hey </Text>
//     //       </View>
//     //     </View>

//     //   </View>

//     // </ScrollView>
   
    
    
//   );
// }

// const styles = StyleSheet.create({

//   contain:{
//     flex: 1,
//     // width: '100%',
//     // height: '30%', 
//      padding: 10,
//     // flexDirection: 'column',
//     //flexWrap: 'wrap'
//   },
//   box:{
//     width: '100%',
//     //height: '60%', 
//     padding: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderWidth: 2,
//     borderColor: 'blue',
//     backgroundColor: 'lightgrey',
//   },
//   inner:{
//     // flex: 1,
//     // backgroundColor: 'red',
//     // alignItems: 'center',
//     // justifyContent: 'center'
//   },

//   container:{
//     // flexDirection:'column',
//     padding:15,
//     margin:20,
//     borderRadius:8,
//     borderWidth:2,
//     borderColor:'#454545' ,
//     // backgroundColor:'lightgrey',
//   },

//   nameTextStyle:{
//     // backgroundColor: '#AACCDD',
//     backgroundColor:'lightgrey',
//     borderRadius: 10,
//     paddingVertical: 7,
//     paddingHorizontal: 12,
//     fontSize: 22,
//     color: "#000",
//     fontWeight:"bold", 
//   },

//   ageTextStyle:{
//     fontSize:23,
//     paddingLeft:5,
//     paddingTop:2,
//     color:"#000"
//   },

//   userImageStyle:{
//     width:50,
//     height:50,
//     marginLeft:30
//   },

//   textAlign:{
//     flex:1
//   },

//   ageStyle:{
//     fontSize:25,
//     fontWeight:"bold",
//     color:'#000'
//   }, 
// });
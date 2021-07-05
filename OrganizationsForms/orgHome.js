import { StatusBar } from 'expo-status-bar';
import React ,{ useState,useEffect } from 'react';
import { StyleSheet, Text, View,Button,FlatList,TouchableOpacity,ScrollView,SafeAreaView} from 'react-native';
import CampaignItem from '../shared/CampaignItem'
import {globalStyles} from '../shared/globalStyles'
import CreateCampaignBtn from '../shared/CreateCampaignBtn';
export default function App({navigation}) {
  const [username,setUsername]=useState( navigation.dangerouslyGetParent().getParam('OrgUsername'));
  const [campgin, setCampagin] = useState(null)
  const [filters,setFilter]=useState(null)
 
  const [found,setFound]=useState(false);
  var data = new Array();

useEffect(() => {
  setFound(true);
  console.log("here")
    fetch("http://10.0.2.2:8080/orgCamp/"+username, {
      method: 'GET',
  })
  .then(res=>res.json())
  .then(json => {
    setCampagin(json)
    if(found)
    {
      setCampagin(json)
      setFilter(campgin)
     // console.log(campgin)
    }
    
  })
  .catch((error) => {
      console.error(error);
  });
}, []);

// console.log(campgin)

// console.log("++")
// console.log(filters)

  const ongoingFilter=()=>{
    setFilter(prevF=>
      {return campgin.filter(c => 
      c.status==='completed')});  
  }
  const completedFilter=()=>{
    setFilter(prevF=>
      {return campgin.filter(c => 
      c.status==='ongoing')});

  }
  const allFilter=()=>{
    setFilter(campgin)
  }

  
  return (

  
<View style={styles.container}>
<ScrollView>
    <View style={globalStyles.buttonstyle}>


      <TouchableOpacity style={globalStyles.blackButtonStyle} onPress={allFilter}> 
          <Text style={globalStyles.textStyle}> All </Text>
      </TouchableOpacity>

      
      <TouchableOpacity style={globalStyles.greenButtonStyle} onPress={ongoingFilter}> 
          <Text style={globalStyles.textStyle} > Ongoing </Text>
      </TouchableOpacity>


      
      <TouchableOpacity style={globalStyles.blueButtonStyle} onPress={completedFilter}> 
          <Text style={globalStyles.textStyle}> Completed </Text>
      </TouchableOpacity>


      </View>
      
{found &&
      <View style={styles.flatListStyle}>
        <FlatList
        keyExtractor={(item) => item.id} 
        data={filters} 
        renderItem={({ item }) => ( 
          <TouchableOpacity onPress={()=>navigation.navigate('applicantRequests')}>
         <CampaignItem item={item} addUser={true} navigation={navigation}/>
         </TouchableOpacity>
        )}
        />
        
    </View>
}
    </ScrollView>
    <CreateCampaignBtn navigation={navigation}/>
    
    
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection:'column',
    // paddingTop:"2%"
  },
  flatListStyle:{
    justifyContent:'flex-start',
    flex:2,
    padding:20

  },
 
});


  //console.log(username);
//   async function getDetails() {
//     const configs = {
//         methods: 'GET',
//     };
//     const response = await fetch("http://10.0.2.2:8080/orgCamp/"+username, configs)
//     const data = await response.json();
//    console.log(data)
//     setCampagin(data)
//     console.log("+++++++++")
//     console.log(campgin)
//     setFound(true);
// }

//   useEffect(() => {
//     getDetails();
//   }, []);



  //const [show,notShow]=useState(false);
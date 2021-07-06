import { StatusBar } from 'expo-status-bar';
import React ,{ useState,useEffect } from 'react';
import { StyleSheet, Text, View,Button,FlatList,TouchableOpacity,ScrollView,SafeAreaView} from 'react-native';
import CampaignItem from '../shared/CampaignItem'
import {globalStyles} from '../shared/globalStyles'


export default function App({navigation}) {
  const [campgin, setCampagin] = useState(null)
  const [filters,setFilter]=useState(null)
  const [found,setFound]=useState(false);
  const [username,setUsername]=useState( navigation.dangerouslyGetParent().getParam('User_Username'));
console.log(username)
  useEffect(() => {
    fetch("http://10.0.2.2:8080/userCamaginsJoined/"+username, {
      method: 'GET',
  })
  .then(res=>res.json())
  .then(json => {
     setCampagin(json)
     setFilter(campgin)  
     setFound(true); 
  })
  .catch((error) => {
      console.error(error);
  });
}, []);
console.log(campgin)
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

    <ScrollView>
<View style={styles.container}>

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
        //keyExtractor={(item) => item.id} 
        data={filters} 
        renderItem={({ item }) => ( 
          <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate('userCampaignDetails',item)}>
            <CampaignItem item={item} addUser={false} navigation={navigation} />
         </TouchableOpacity>
        )}
        />
    </View>
}
    
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection:'column',
    paddingTop: 40,
  },
  flatListStyle:{
    justifyContent:'flex-start',
    flex:2,
    padding:20

  },
 
});

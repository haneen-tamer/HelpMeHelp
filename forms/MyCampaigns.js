import React ,{ useState, useEffect } from 'react';
import { StyleSheet, View,FlatList,TouchableOpacity} from 'react-native';
import CampaignItem from '../shared/CampaignItem'
import CreateCampaignBtn from '../shared/CreateCampaignBtn';
import {globalStyles} from '../shared/globalStyles'
import { FloatingAction } from "react-native-floating-action";
// import { FloatingAction } from "react-native-floating-action";

export default function MyCampaigns({navigation}) {
    // const [campaign,setCampaign] = useState([
    //   {name:'Ramdan Iftar',organizationName:'Resala',startDate:'8/4/2021',endDate:'10/4/2021',class:'A',subClass:['dd','dddd'],progress:7,target:7,status:'completed',id:'1',month:'April',adress:'fhifhoiojfoije',descreption:'kskskskksks',donationType:'clothes',userStatus:'Approved'},
    //   // {name:'qqq',organizationName:'ggg',startDate:'8/4/2021',endDate:'10/4/2021',class:'B',subClass:['dd','dddd'],progress:1,target:7,status:'ongoing',id:'2',month:'April',adress:'fhifhoiojfoije',descreption:'kskskskksks',donationType:'clothes',userStatus:'Approved'},
    //   // {name:'qqq',organizationName:'ggg',startDate:'8/4/2021',endDate:'10/4/2021',class:'B',subClass:['dd','dddd'],progress:3,target:7,status:'completed',id:'3',month:'April',adress:'fhifhoiojfoije',descreption:'kskskskksks',donationType:'clothes',userStatus:'Approved'},
    //   // {name:'qqq',organizationName:'ggg',startDate:'8/4/2021',endDate:'10/4/2021',class:'B',subClass:['dd','dddd'],progress:4,target:7,status:'ongoing',id:'4',month:'April',adress:'fhifhoiojfoije',descreption:'kskskskksks',donationType:'clothes',userStatus:'Approved'},
    //   // {name:'qqq',organizationName:'ggg',startDate:'8/4/2021',endDate:'10/4/2021',class:'B',subClass:['dd','dddd'],progress:5,target:7,status:'completed',id:'5',month:'April',adress:'fhifhoiojfoije',descreption:'kskskskksks',donationType:'clothes',userStatus:'Approved'},
    // ])
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
  const actions = [{
    key:"1",
    text: "Create Donation Campaign",
    icon: require("../images/plus.png"),
    name: "bt_donationCampaign",
    position: 1
},];
    return(
        <View style={styles.container}>
        {found &&
          <View style={styles.flatListStyle}>
            <FlatList
            //keyExtractor={(item) => item.id} 
            data={filters} 
            renderItem={({ item }) => ( 
              <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate('userCampaignDetails',item)}>
                <CampaignItem item={item} addUser={false} navigation={navigation} />
             </TouchableOpacity>
            )} />
            </View>
        }
        <FloatingAction
        actions={actions}
        onPressItem={(name) => {
            console.log(`here: ${name}`);
            navigation.navigate('CreateDonationCampaign',{Username:username});
        }}
        overrideWithAction='true'
        color='#92E3A9'
        // color='#454545'
        iconHeight={40}
        iconWidth={40}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      flexDirection:'column',
      
    },
    flatListStyle:{
      justifyContent:'flex-start',
      flex:2,
      padding:20
    },
  });
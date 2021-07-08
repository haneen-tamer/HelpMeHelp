import React ,{ useState,useEffect }from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity , ScrollView} from 'react-native';
import ProfileCard from './../shared/profileCard';

export default function App({navigation}) {
  const [gov,setGov]=useState(null);
  const [contributioNumber,setContributioNumber]=useState(0);
  const [userData,setUserDat]=useState(navigation.getParam('data'))
  const [found,setFound]=useState(false);
  const [found2,setFound2]=useState(false);
  const [govID,setGovID]=useState(userData.Governorate)
  let user_username=userData.userName;
  var userPage =userData.Governorate;
  //console.log(userPage)
  
  useEffect(() => {
    if(typeof userPage==='string')
  {
 
    setGov(userData.Governorate);
    setFound(true);
  }
   else
    {
    setFound(true);
      fetch("http://10.0.2.2:8080/userGov/"+govID, {
        method: 'GET',
    })
    .then(res=>res.json())
    .then(json => {
      //console.log(json.gov)   
      setGov(json.gov)
    
    })
    .catch((error) => {
        console.error(error);
    });
    }
  }, []);
  
  useEffect(() => {
    setFound2(true);
      fetch("http://10.0.2.2:8080/userCampagins/"+user_username, {
        method: 'GET',
    })
    .then(res=>res.json())
    .then(json => {   
      //console.log(json.ids[0])
      //console.log(json.ids.length)
      if(json.ids[0]==0)
      {
        console.log("jere")
        setContributioNumber(0)
      }
      else
      {
        setContributioNumber(json.ids.length)
      }
      
      
      
    })
    .catch((error) => {
        console.error(error);
    });
  }, []);
  //console.log(contributioNumber)
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.imageborderStyle}>
      <Image
        style={styles.profileImageStyle}
        source={require('../images/user.png')}
        />
        </View>
        { found && found2 &&
        <View style={styles.textAlignStyle}>
        

        <ProfileCard title={'Full Name'} value={userData.name}/>

        <ProfileCard title={'Username'} value={userData.userName}/>

        <ProfileCard title={'Email Address'} value={userData.email}/>

        <ProfileCard title={'Age'} value={userData.age}/>

        <ProfileCard title={'Governorate'} value={gov}/>

        <ProfileCard title={'Contribution'} value={contributioNumber}/>
          
        
        </View>
}
    
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

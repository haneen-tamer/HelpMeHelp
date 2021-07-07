import { StatusBar } from 'expo-status-bar';
import React ,{ useState,useEffect } from 'react';
import { StyleSheet, Text, View,Button,FlatList,TouchableOpacity,ScrollView,SafeAreaView,Image} from 'react-native';
import CampaignItem from '../shared/CampaignItem'
import * as Progress from 'react-native-progress';
import { globalStyles } from './../shared/globalStyles';
import { set } from 'react-native-reanimated';


export default function App({navigation}) {
   
    const [orgOwner,setOrgOwner]=useState(navigation.getParam('orgUsername'));
    const [username,setUsername]=useState( navigation.dangerouslyGetParent().getParam('User_Username'));
    const [userData,setUserData]=useState(null)
    const [ownerProfile,setOwnerProfile]=useState("org");
    let ID=navigation.getParam('ID');
    const [userCampStatus,setUserCampStatus]=useState(null);
    if(orgOwner==null)
    {
        setOrgOwner(navigation.getParam('U_username'));
        console.log(orgOwner)
        // if(orgOwner==null)
        // {
        //     setOrgOwner(username);
        // }
        setOwnerProfile("user");
    }

    
        useEffect(() => {
            if(ownerProfile=="user")
            {
            fetch("http://10.0.2.2:8080/userProfile/"+orgOwner, {
              method: 'GET',
          })
          .then(res=>res.json())
          .then(json => {
            setUserData(json)
          })
          .catch((error) => {
              console.error(error);
          });
        }
        }, []);
    //console.log(userData)

    useEffect(() => {
        fetch("http://10.0.2.2:8080/userCheckCampaginStatus/"+orgOwner+"/"+ID, {
          method: 'GET',
      })
      .then(res=>res.json())
      .then(json => {
        setUserCampStatus(json.status)
      })
      .catch((error) => {
          console.error(error);
      });
    }, []);

    const goToPage=()=>
    {
        if(ownerProfile=="org")
        {
           return navigation.navigate('userOrganizationProfile',{orgOwner})
        }
        else
        {
            return  navigation.navigate('orgUserProfile',{data:userData})
        }
    }
    return (
        
        <ScrollView>

       
        <View style={styles.container}>

        <View style={globalStyles.columnAlginStyle}>
       
            <View style={globalStyles.imageAlginStyle}>

            <TouchableOpacity
            onPress={()=>navigation.navigate('chat',{username:'haneen'})}>
                    <Image
                    style={globalStyles.topIconsStyle}
                    source={require('../images/chat.png')}/>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                    style={globalStyles.topIconsStyle}
                    source={require('../images/share.png')}/>
                </TouchableOpacity>

                </View>

                <Image
                    style={globalStyles.headerImageStyle}
                    source={require('../images/CampaignImage.png')}
                    />

                </View>
 
        <View style={globalStyles.rowAlginStyle}>

           <View style={globalStyles.columnAlginStyle}>
            <Text style={globalStyles.headerStyle}>{navigation.getParam('name')}  </Text> 

            <TouchableOpacity  onPress={goToPage}>
            <Text style={styles.OrganizationStyles}>{orgOwner}</Text>
            </TouchableOpacity >

            <View style={globalStyles.lineStyle}></View>
            </View>
           
            {/* <Text style={styles.circuleStyle}>   {navigation.getParam('month')} {'\n'}    {navigation.getParam('start')}</Text> */}
            <Text style={styles.circuleStyle}>   {navigation.getParam('startDate').substring(8,10)} {"/"}{navigation.getParam('startDate').substring(5,7)} {'\n'}     {navigation.getParam('startDate').substring(0,4)}</Text>
            
        </View>
     
        <View style={globalStyles.columnAlginStyle}>

            <View style={globalStyles.iconTextStyle}>
            <Image
            style={globalStyles.bottomiconsStyle}
            source={require('../images/address.png')}
            />
          <Text style={globalStyles.smalllHeaderStyle}> Address </Text>
        
        </View>
        <Text style={globalStyles.smallTextStyle}>{navigation.getParam('address')}</Text>

        <View style={globalStyles.iconTextStyle}>
            <Image
            style={globalStyles.bottomiconsStyle}
            source={require('../images/deadline.png')}
            />
           <Text style={globalStyles.smalllHeaderStyle}> End Date </Text>
        
        </View>
        
        <Text style={globalStyles.smallTextStyle}>{navigation.getParam('endDate').substring(0,10)}</Text>

        <View style={globalStyles.iconTextStyle}>
            <Image
            style={globalStyles.bottomiconsStyle2}
            source={require('../images/idea.png')}
            />
           <Text style={globalStyles.smalllHeaderStyle}>Descreption</Text>
        
        </View>
        
        <Text style={globalStyles.smallTextStyle}>{navigation.getParam('description')}</Text>

        <View style={globalStyles.iconTextStyle}>
            <Image
            style={globalStyles.bottomiconsStyle3}
            source={require('../images/goal.png')}
            />
            <Text style={globalStyles.smalllHeaderStyle}> Progress</Text>
        
        </View>
       
        <View style={styles.progressBarStyle}>
            <Progress.Bar progress={navigation.getParam('progress')/navigation.getParam('target')}
            width={300} 
            height={15} 
            color={'#92E3A9'}
            borderColor={'#64CA80'}
            borderRadius={8}  />
        </View>

        {/* <View style={globalStyles.iconTextStyle}>
            <Image
            style={globalStyles.bottomiconsStyle}
            source={require('../images/information.png')}
            />
           <Text style={globalStyles.smalllHeaderStyle}> Tags</Text>
        
        </View> */}
        
        {/* <View style={globalStyles.rowAlginStyle}>
            <Text style={globalStyles.campaignClassStyle}>{navigation.getParam('class')}</Text>
            <Text style={globalStyles.campaignClassStyle}>{navigation.getParam('subClass')}</Text>
            <Text style={globalStyles.campaignClassStyle}>{navigation.getParam('donationType')}</Text>
        </View> */}

        </View>
        
        
        {
            userCampStatus==='null' &&
            <View style={globalStyles.buttonAlignStyle}>
            <TouchableOpacity style={globalStyles.greenButtonStyle}> 
            <Text style={globalStyles.textStyle}>Join</Text>
            </TouchableOpacity>

            <TouchableOpacity style={globalStyles.blueButtonStyle}> 
            <Text style={globalStyles.textStyle}>Donate Now</Text>
            </TouchableOpacity>
          
        </View>
        }
         {
            userCampStatus==='Pending' &&
            <View style={globalStyles.buttonAlignStyle}>
            <Text style={globalStyles.profileTextStyle}>Your request to join is pending</Text>
          
        </View>
        }
    
        
           
        </View>
        </ScrollView>
    )};

    const styles = StyleSheet.create({
        container: {
            borderRadius:8,
            borderWidth:2,
            borderColor:'#64CA80',
            justifyContent:"flex-start"
          },
        campaignImage:{
            width: 230,
            height: 230,
            alignSelf:'center'
        },
        OrganizationStyles:{
            fontSize: 20,
            color: "#000",
            fontWeight: "bold",
            padding:5,
        },  
        circuleStyle:{

        borderColor:'#06A9F0',
        backgroundColor:'#AACCDD',
        borderWidth:2,
        borderRadius: 150/2,
        width:130,
        height:130,
        paddingHorizontal: 25,
        paddingTop:30,
        paddingRight:27,
        marginLeft:55,
        margin:15,
        fontSize: 18,
        color: '#000',
        textTransform: "uppercase",
        fontWeight: "bold",
        elevation:30
        },
        progressBarStyle:{
            alignSelf:'center',
            paddingBottom:15
        },
       
       
      
    flatListStyle:{
        justifyContent:'flex-start',
        flex:2,
        padding:20
    
      },
     
   
});
      
import { StatusBar } from 'expo-status-bar';
import React ,{ useState } from 'react';
import { StyleSheet, Text, View,Button,FlatList,TouchableOpacity,ScrollView,SafeAreaView,Image} from 'react-native';
import CampaignItem from '../shared/CampaignItem'
import {globalStyles} from '../shared/globalStyles'
import * as Progress from 'react-native-progress';


export default function App({route,navigation}) {
//const [shouldShow,setShouldShow]=useState(true);
//const {show}=route.params;
//let shouldShow=false;
    return (
        
        <ScrollView>

        
        <View style={styles.container}>

        <View style={styles.columnAlginStyle}>
       
            <View style={styles.imageAlginStyle}>

            <TouchableOpacity>
                    <Image
                    style={styles.topIconsStyle}
                    source={require('../images/chat.png')}/>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                    style={styles.topIconsStyle}
                    source={require('../images/share.png')}/>
                </TouchableOpacity>

                </View>

                <Image
                    style={styles.campaignImage}
                    source={require('../images/CampaignImage.png')}
                    />

                </View>
 
        <View style={styles.rowAlginStyle}>

           <View style={styles.columnAlginStyle}>
            <Text style={styles.Campaginstyle}>{navigation.getParam('name')}  </Text> 
            <Text style={styles.OrganizationStyles}>{navigation.getParam('organizationName')}</Text>
            <View style={styles.lineStyle}></View>
            </View>
           
            <Text style={styles.circuleStyle}>   {navigation.getParam('month')} {'\n'}    {navigation.getParam('start')}</Text>
            
        </View>
     
        <View style={styles.columnAlginStyle}>

            <View style={styles.iconTextStyle}>
            <Image
            style={styles.bottomiconsStyle}
            source={require('../images/address.png')}
            />
          <Text style={styles.headerStyle}> Address </Text>
        
        </View>
        <Text style={styles.textStyle}>{navigation.getParam('adress')}</Text>

        <View style={styles.iconTextStyle}>
            <Image
            style={styles.bottomiconsStyle}
            source={require('../images/deadline.png')}
            />
           <Text style={styles.headerStyle}> End Date </Text>
        
        </View>
        
        <Text style={styles.textStyle}>{navigation.getParam('end')}</Text>

        <View style={styles.iconTextStyle}>
            <Image
            style={styles.bottomiconsStyle2}
            source={require('../images/idea.png')}
            />
           <Text style={styles.headerStyle}>Descreption</Text>
        
        </View>
        
        <Text style={styles.textStyle}>{navigation.getParam('descreption')}</Text>

        <View style={styles.iconTextStyle}>
            <Image
            style={styles.bottomiconsStyle3}
            source={require('../images/goal.png')}
            />
            <Text style={styles.headerStyle}> Progress</Text>
        
        </View>
       
        <View style={styles.progressBarStyle}>
            <Progress.Bar progress={navigation.getParam('progress')/navigation.getParam('target')}
            width={300} 
            height={15} 
            color={'#92E3A9'}
            borderColor={'#64CA80'}
            borderRadius={8}  />
        </View>

        <View style={styles.iconTextStyle}>
            <Image
            style={styles.bottomiconsStyle}
            source={require('../images/information.png')}
            />
           <Text style={styles.headerStyle}> Tags</Text>
        
        </View>
        
        <View style={styles.rowAlginStyle}>
            <Text style={globalStyles.campaignClassStyle}>{navigation.getParam('class')}</Text>
            <Text style={globalStyles.campaignClassStyle}>{navigation.getParam('subClass')}</Text>
            <Text style={globalStyles.campaignClassStyle}>{navigation.getParam('donationType')}</Text>
        </View>

        </View>
        
        
        {
            navigation.getParam('userStatus')!=='Approved' &&
            <View style={styles.buttonAlignStyle}>
            <TouchableOpacity style={globalStyles.greenButtonStyle}> 
            <Text style={globalStyles.textStyle}>Join</Text>
            </TouchableOpacity>

            <TouchableOpacity style={globalStyles.blueButtonStyle}> 
            <Text style={globalStyles.textStyle}>Donate Now</Text>
            </TouchableOpacity>
          
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
        Campaginstyle:{
            fontSize: 30,
            color: "#000",
            fontWeight: "bold",
            padding:5,
        },
        OrganizationStyles:{
            fontSize: 20,
            color: "#000",
            fontWeight: "bold",
            padding:5,
        },  
        rowAlginStyle:{
            flexDirection:'row',
            alignContent:"space-between",
            
        },
        columnAlginStyle:{
            flexDirection:'column',
            padding:13,
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

        lineStyle:{
            borderBottomColor: '#06A9F0',
            borderBottomWidth:3
        },

        topIconsStyle:{
            width:50,
            height:50,
            margin:10,
           alignSelf:'center',
           padding:20
        },
        bottomiconsStyle:{
            width:30,
            height:30,
          
        },
        headerStyle:{
            fontSize:25,
            fontWeight:"bold",
            paddingBottom:10,
            paddingLeft:5,
            color:'#000'
        },
        textStyle:{
            fontSize:20,
            paddingBottom:20,
            marginLeft:40,
            color:'#000'
        },
        progressBarStyle:{
            alignSelf:'center',
            paddingBottom:15
        },
       buttonAlignStyle:{
            paddingRight:10,
            paddingLeft:10,
            paddingBottom:10,
            alignItems:'center',
            flexDirection: 'row',
            justifyContent: 'space-around',
       },
       
       imageAlginStyle:{
            flex:1,
            flexDirection:'row',
            paddingBottom:5,
            justifyContent:"flex-end",
            alignContent:"space-between",
        
    },
    iconTextStyle:{
        flexDirection:'row',
        paddingBottom:5,
        justifyContent:"flex-start",
    },
    bottomiconsStyle2:{
        width:37,
        height:37,
    },
    bottomiconsStyle3:{
        width:35,
        height:35,
    }
});
      
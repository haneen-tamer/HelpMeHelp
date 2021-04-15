import { StatusBar } from 'expo-status-bar';
import React ,{ useState,useEffect } from 'react';
import { StyleSheet, Text, View,Button,FlatList,TouchableOpacity,ScrollView,SafeAreaView,Image} from 'react-native';
import CampaignItem from '../shared/CampaignItem'
import {globalStyles} from '../shared/globalStyles'
import * as Progress from 'react-native-progress';


export default function App({navigation}) {
    const [organization, setOrganization] = useState([
         {Name:'Resala',class:'A',subClass:['dd','dddd'],purpose:'ffffff',id:'1',month:'April',adress:'fhifhoiojfoije',descreption:'kskskskksks',organizationType:'clothes',userStatus:'Approved',website:'ddd',hotline:'001221',facebook:'ss',instagram:'dd',twitter:'dddd'},
         {Name:'ddddd',class:'A',subClass:['dd','dddd'],purpose:'ffffff',id:'2',month:'April',adress:'fhifhoiojfoije',descreption:'kskskskksks',organizationType:'clothes',userStatus:'Approved',website:'ddd',hotline:'001221',facebook:'ss',instagram:'dd',twitter:'dddd'},
         {Name:'sssss',class:'A',subClass:['dd','dddd'],purpose:'ffffff',id:'1',month:'April',adress:'fhifhoiojfoije',descreption:'kskskskksks',organizationType:'clothes',userStatus:'Approved',website:'ddd',hotline:'001221',facebook:'ss',instagram:'dd',twitter:'dddd'},
         {Name:'ddddd',class:'A',subClass:['dd','dddd'],purpose:'ffffff',id:'2',month:'April',adress:'fhifhoiojfoije',descreption:'kskskskksks',organizationType:'clothes',userStatus:'Approved',website:'ddd',hotline:'001221',facebook:'ss',instagram:'dd',twitter:'dddd'},
         {Name:'Redddsala',class:'A',subClass:['dd','dddd'],purpose:'ffffff',id:'1',month:'April',adress:'fhifhoiojfoije',descreption:'kskskskksks',organizationType:'clothes',userStatus:'Approved',website:'ddd',hotline:'001221',facebook:'ss',instagram:'dd',twitter:'dddd'},
         {Name:'ddddd',class:'A',subClass:['dd','dddd'],purpose:'ffffff',id:'2',month:'April',adress:'fhifhoiojfoije',descreption:'kskskskksks',organizationType:'clothes',userStatus:'Approved',website:'ddd',hotline:'001221',facebook:'ss',instagram:'dd',twitter:'dddd'},
        
   ])
      
    return (
        
        <ScrollView>

       
        <View style={styles.container}>

        <View style={globalStyles.columnAlginStyle}>
       
            <View style={globalStyles.imageAlginStyle}>

            <TouchableOpacity>
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
            {
                <FlatList
                    keyExtractor={(item) => item.id} 
                    data={organization} 
                    renderItem={({ item }) => ( 
                     navigation.getParam('organizationName')===item.Name &&
                    <TouchableOpacity  onPress={()=>{navigation.navigate('userOrganizationProfile',item);}}>
                    <Text style={styles.OrganizationStyles}>{navigation.getParam('organizationName')}</Text>
                    </TouchableOpacity >
                        
                    )}
            />
            }
        

            <View style={globalStyles.lineStyle}></View>
            </View>
           
            <Text style={styles.circuleStyle}>   {navigation.getParam('month')} {'\n'}    {navigation.getParam('start')}</Text>
            
        </View>
     
        <View style={globalStyles.columnAlginStyle}>

            <View style={globalStyles.iconTextStyle}>
            <Image
            style={globalStyles.bottomiconsStyle}
            source={require('../images/address.png')}
            />
          <Text style={globalStyles.smalllHeaderStyle}> Address </Text>
        
        </View>
        <Text style={globalStyles.smallTextStyle}>{navigation.getParam('adress')}</Text>

        <View style={globalStyles.iconTextStyle}>
            <Image
            style={globalStyles.bottomiconsStyle}
            source={require('../images/deadline.png')}
            />
           <Text style={globalStyles.smalllHeaderStyle}> End Date </Text>
        
        </View>
        
        <Text style={globalStyles.smallTextStyle}>{navigation.getParam('end')}</Text>

        <View style={globalStyles.iconTextStyle}>
            <Image
            style={globalStyles.bottomiconsStyle2}
            source={require('../images/idea.png')}
            />
           <Text style={globalStyles.smalllHeaderStyle}>Descreption</Text>
        
        </View>
        
        <Text style={globalStyles.smallTextStyle}>{navigation.getParam('descreption')}</Text>

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

        <View style={globalStyles.iconTextStyle}>
            <Image
            style={globalStyles.bottomiconsStyle}
            source={require('../images/information.png')}
            />
           <Text style={globalStyles.smalllHeaderStyle}> Tags</Text>
        
        </View>
        
        <View style={globalStyles.rowAlginStyle}>
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
       buttonAlignStyle:{
            paddingRight:10,
            paddingLeft:10,
            paddingBottom:10,
            alignItems:'center',
            flexDirection: 'row',
            justifyContent: 'space-around',
       },
       
      
    flatListStyle:{
        justifyContent:'flex-start',
        flex:2,
        padding:20
    
      },
     
   
});
      
import React,{ useState }  from 'react';
import {StyleSheet,TouchableOpacity,View,Text,Image} from 'react-native';
import * as Progress from 'react-native-progress';
import {globalStyles} from './globalStyles'
// import { useNavigation } from '@react-navigation/native';
// import { withNavigation} from 'react-navigation';




export default function CampaignItem({navigation,item,addUser}){

    // const navigation = useNavigation(); 
    let col;
    if(item.status==='completed'){
        col=styles.greenStatus;
    }
    else{
        col=styles.blueStatus;
    }
    
    return(
       
<View style={styles.container}>
        
        { addUser &&
         <TouchableOpacity onPress={()=>navigation.navigate('applicantRequests')}>
            <Image
            style={styles.addImageStyle}
            source={require('../images/add-group.png')}
            />
         </TouchableOpacity>
        }
        
        <Image
        style={styles.campaignImage}
        source={require('../images/CampaignImage.png')}
        />

        <Text style={col} >{item.name}</Text>
        
        <Text style={styles.item}>{item.organizationName}</Text>
       

        <View style={styles.startEndStyle}>
        <Text style={styles.item}>Start</Text>
        <Text style={styles.item}>{item.start}</Text>
        <Text style={styles.item}>End</Text>
        <Text style={styles.item}>{item.end}</Text>

        
        </View>

        <View style={styles.classSubclassStyle}>
        <Text style={globalStyles.campaignClassStyle}>{item.class}</Text>
        <Text style={globalStyles.campaignClassStyle}>{item.subClass}</Text>
        </View>

        <View style={styles.progressBarStyle}>
        <Progress.Bar progress={item.progress/item.target}
         width={300} 
         height={15} 
         color={'#92E3A9'}
        borderColor={'#64CA80'}
         borderRadius={8}  />
        </View>

        </View>
        
);
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        padding:15,
        marginBottom:10,
        borderRadius:8,
        borderWidth:2,
        borderColor:'#64CA80',
    },

    startEndStyle:{
        flexDirection:'row',
        paddingRight:5,
        justifyContent:'space-between'
    },
    classSubclassStyle:{
        flexDirection:'row',
        justifyContent:'flex-start'
    },
    item:{
        padding:10,
        fontSize:18,
        color:'#000'
    },
    progressBarStyle:{
        alignSelf:'center'
    },
    campaignImage:{
        width: 230,
        height: 230,
        alignSelf:'center'
    },
    greenStatus:{
       backgroundColor:'#64CA80',
       padding:10,
       fontSize:18,
       color:'#000'
    },
    blueStatus:{
        backgroundColor:'#AACCDD',
        color:'#000',
          padding:10,
       fontSize:18,
    },
    addImageStyle:{
        // marginTop:"1%",
        width:50,
        height:50,
        alignSelf:"flex-end"
      },

    
});
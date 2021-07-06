import React,{ useState }  from 'react';
import {StyleSheet,TouchableOpacity,View,Text,Image} from 'react-native';
import {globalStyles} from './globalStyles';

export default function OrgSearchCard({org}){

    return(
        <View style={styles.container}>
        <Image
            style={styles.imageStyle}
            source={require('../images/CampaignImage.png')}
        />
        <View style={styles.col}>
        <Text style={styles.descText}>{org.Name}</Text>
        <View style={globalStyles.rowAlginStyle}>
            <Text style={styles.campaignClassStyle}>{org.class}</Text>
            <Text style={styles.campaignClassStyle}>{org.subClass}</Text>
        </View>
        </View>
        
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        padding:5,
        marginBottom:10,
        borderRadius:8,
        borderWidth:2,
        borderColor:'#AACCDD',
        justifyContent:'center',
        alignContent:'center'
    },
    col:{
        // flexDirection:'column',
        paddingRight:5,
        justifyContent:'space-between',
        // flex:3
    },
    descText:{
        fontSize:18,
        paddingBottom:5,
        marginStart:5,
        color:'#000'
    },
    imageStyle:{
        // flex:2,
        width:40,
        height:40,
        alignSelf:'flex-start',
      },
      campaignClassStyle: {
        // elevation: 8,
        backgroundColor: "#454545",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        fontSize: 14,
        color: "#fff",
        //fontWeight: "bold",
        alignSelf: "center",
        margin:5,
        textTransform: "uppercase",
        paddingBottom:5
      },

});
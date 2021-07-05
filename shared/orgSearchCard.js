import React,{ useState }  from 'react';
import {StyleSheet,TouchableOpacity,View,Text,Image} from 'react-native';
import {globalStyles} from './globalStyles';

export default function orgSearchCard({org}){

    return(
        <View style={styles.container}>
        <Image
            style={globalStyles.headerImageStyle}
            source={require('../images/CampaignImage.png')}
        />
        <View style={styles.col}>
        <Text style={globalStyles.textStyle}>{org.name}</Text>
        <View style={globalStyles.rowAlginStyle}>
            <Text style={globalStyles.campaignClassStyle}>{org.class}</Text>
            <Text style={globalStyles.campaignClassStyle}>{org.subclass}</Text>
        </View>
        </View>
        
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        padding:15,
        marginBottom:10,
        borderRadius:8,
        borderWidth:2,
        borderColor:'#AACCDD',
    },
    col:{
        // flexDirection:'column',
        paddingRight:5,
        justifyContent:'space-between'
    },
    descText:{
        fontSize:10,
        paddingBottom:20,
        marginLeft:40,
        color:'#000'
    },

});
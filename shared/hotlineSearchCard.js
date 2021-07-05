import React,{ useState }  from 'react';
import {StyleSheet,TouchableOpacity,View,Text} from 'react-native';
import {globalStyles} from './globalStyles';

export default function hotlineSearchCard({hotline}){

    return(
        <View style={styles.container}>
        
        <View style={styles.col}>
        <Text style={globalStyles.textStyle}>{hotline.number}</Text>
        <Text style={globalStyles.smallTextStyle}>{hotline.orgName}</Text>
        </View>
        <Text style={styles.textStyle}>{hotline.description}</Text>
        
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
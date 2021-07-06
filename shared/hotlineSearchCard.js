import React,{ useState }  from 'react';
import {StyleSheet,TouchableOpacity,View,Text} from 'react-native';
import {globalStyles} from './globalStyles';

export default function HotlineSearchCard({hotline}){

    return(
        <View style={styles.container}>
        
        <View style={styles.row}>
        <Text style={globalStyles.smalllHeaderStyle}>{hotline.number}</Text>
        {(hotline.orgName!=null)&&(<Text style={styles.descText}>{hotline.orgName}</Text>)}
        </View>
        <Text style={styles.descText}>{hotline.description}</Text>
        
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        // flexDirection:'column',
        padding:15,
        marginBottom:10,
        marginTop:10,
        borderRadius:8,
        borderWidth:2,
        borderColor:'#AACCDD',
    },
    row:{
        flexDirection:'row',
        paddingRight:5,
        justifyContent:'space-between'
    },
    descText:{
        fontSize:18,
        paddingBottom:5,
        color:'#000',
    },

});
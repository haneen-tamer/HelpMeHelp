import React,{ useState }  from 'react';
import {StyleSheet,TouchableOpacity,View,Text,Image, Alert} from 'react-native';
import { globalStyles } from './../shared/globalStyles';





export default function ApplicantCard({item,navigation}){
    
    return(
        
        
        <TouchableOpacity style={styles.container} onPress={() => Alert.alert("All")}>

            <View style={styles.horizontalSection}>
                    <Text style={styles.item} >{item.name}</Text>
                
            </View>
            
            <View style={globalStyles.buttonstyle}>
                <TouchableOpacity style={globalStyles.greenButtonStyle} onPress={() => Alert.alert("Accepetd")}> 
                    <Text style={globalStyles.textStyle} > Accept </Text>
                </TouchableOpacity>

                <TouchableOpacity style={globalStyles.blackButtonStyle} onPress={() => Alert.alert("Rejected")} > 
                    <Text style={globalStyles.textStyle}> Reject </Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>  
    );}

const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        padding:10,
        marginBottom:10,
        borderRadius:8,
        borderWidth:2,
        marginBottom: 25,
        borderColor:'#454545',
    },
    item:{
        fontSize:25,
        color:'#000',
        width: '50%',
        fontWeight: 'bold',
    },
    horizontalSection:{
        flexDirection: 'row',
        flex: 1,
        margin: 1, 
        paddingLeft: 10,
    },
    nameTextStyle:{
        borderRadius: 10,
        paddingVertical: 7,
        paddingHorizontal: 12,
        fontSize: 22,
        color: "#000",
        fontWeight:"bold",
    },   
    greyButtonStyle:{
        width: '30%',
        height: 50,
        right: '%',
        position: 'absolute',
        width: '50%',
        elevation: 8,
        backgroundColor: 'darkgrey',
        borderRadius: 10,
        paddingVertical: 10,
        margin:1
    },
});
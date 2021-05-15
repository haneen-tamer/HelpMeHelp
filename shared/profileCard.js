import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity , ScrollView} from 'react-native';

export default function ProfileCard({title,value}){
    return(

        <View>
            <Text style={styles.titleStyle}>{title}</Text>
        <Text style={styles.textStyle}>{value}</Text>

        <Text style={styles.lineStyle}></Text>
        </View>
    )}

const styles = StyleSheet.create({
titleStyle:{
    fontSize:15,
    color:'lightslategrey',
    paddingBottom:6
    
    },
    textStyle:
  {
    fontSize:25,
    color:"#000",
    fontWeight:"bold"
  },
  lineStyle:
  {
    borderBottomWidth:1,
    borderBottomColor:'#AACCDD',
    marginBottom:10
   
    
  },

});
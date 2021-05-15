import React,{ useState }  from 'react';
import {StyleSheet,TouchableOpacity,View,Text,Image} from 'react-native';
import { globalStyles } from './../shared/globalStyles';





export default function ApplicantCard({item,navigation}){
    
    return(
       
<View style={styles.container}>
        
       
        <View style={globalStyles.rowAlginStyle}>
            <View style={styles.textAlign}>
                <Text style={styles.nameTextStyle} >{item.name}</Text>
            </View>
                <TouchableOpacity onPress={()=>navigation.navigate('orgUserProfile')}>
                    <Image 
                    style={styles.userImageStyle}
                    source={require("../images/user.png")}
                    />
                </TouchableOpacity>
           
       
        </View>
        
       
        <View style={globalStyles.buttonstyle}>

        <TouchableOpacity style={globalStyles.greenButtonStyle} > 
            <Text style={globalStyles.textStyle} > Accept </Text>
        </TouchableOpacity>

        <TouchableOpacity style={globalStyles.blackButtonStyle} > 
            <Text style={globalStyles.textStyle}> Decline </Text>
        </TouchableOpacity>

      
     

      </View>
        </View>

        
        
);
}

const styles = StyleSheet.create({
    container:{
        // flexDirection:'column',
        padding:15,
        margin:20,
        borderRadius:8,
        borderWidth:2,
        borderColor:'#454545' ,
        // backgroundColor:'lightgrey',
    },
    nameTextStyle:{
        // backgroundColor: '#AACCDD',
        backgroundColor:'lightgrey',
        borderRadius: 10,
        paddingVertical: 7,
        paddingHorizontal: 12,
        fontSize: 22,
        color: "#000",
        fontWeight:"bold",
        
       
       
    },
    ageTextStyle:{
        fontSize:23,
        paddingLeft:5,
        paddingTop:2,
        color:"#000"
       

    },
    userImageStyle:
  {
    width:50,
    height:50,
    marginLeft:30
  },
  textAlign:{
        flex:1
  },
  ageStyle:{
      fontSize:25,
      fontWeight:"bold",
      color:'#000'
  },

 

    
});
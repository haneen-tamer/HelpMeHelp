import React,{ useState }  from 'react';
import {StyleSheet,TouchableOpacity,View,Text,Image, Alert} from 'react-native';
import { globalStyles } from './../shared/globalStyles';





export default function ApplicantCard({item,navigation}){
    
    return(
       
        <TouchableOpacity style={styles.container}  onPress={() => Alert.alert("All")}>
            
        
            <View style={styles.horizontalSection}>
                <View style={styles.textAlign}>
                    <Text style={styles.nameTextStyle} >{item.name}</Text>
                </View>
                        <Image 
                        style={styles.userImageStyle}
                        source={require("../images/user.png")}
                        />
            </View>
            
        
            <View style={globalStyles.buttonstyle}>
                
                <TouchableOpacity style={styles.blackButtonStyle} onPress={() => Alert.alert("Completed")} > 
                    <Text style={globalStyles.textStyle} > Make admin </Text>
                </TouchableOpacity>

            </View>
        </TouchableOpacity>

        
        
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
    blackButtonStyle:{
        width: '50%',
        height: 50,
        elevation: 5,
        backgroundColor: '#454545',
        borderRadius: 10,
        left: '270%',
        paddingVertical: 13,
        margin:1
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
    horizontalSection:{
        flexDirection: 'row',
        flex: 1,
        margin: 1, 
        paddingBottom: 4,
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
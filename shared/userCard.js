import React,{ useState,useEffect }  from 'react';
import {StyleSheet,TouchableOpacity,View,Text,Image, Alert} from 'react-native';
import { globalStyles } from './../shared/globalStyles';





export default function ApplicantCard({item,navigation}){
    const [hide,setHide]=useState(false);

const makeAdmin=()=>
    {
        console.log(item.userName)
        setHide(true)
        fetch("http://10.0.2.2:8080/admin/addAdmin", {
      method: 'Post',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({     
          username:item.userName,
    })
  })
  .then(res=>res.json())
  .then(json => {
    if(json==true)
    {
     console.log("Added")
    }
  })
  .catch((error) => {
      console.error(error);
  });
    }
  
    return(
       
        <TouchableOpacity style={styles.container}  onPress={() => navigation.navigate('orgUserProfile',{data:item})}>
            
        
            <View style={styles.horizontalSection}>
                <View style={styles.textAlign}>
                    <Text style={styles.nameTextStyle} >{item.name}</Text>
                </View>
                        <Image 
                        style={styles.userImageStyle}
                        source={require("../images/user.png")}
                        />
            </View>
            
        {!hide &&
            <View style={globalStyles.buttonstyle}>
                
                <TouchableOpacity style={styles.blackButtonStyle} onPress={makeAdmin} > 
                    <Text style={globalStyles.textStyle} > Make admin </Text>
                </TouchableOpacity>

            </View>
}
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
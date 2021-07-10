import React,{ useState }  from 'react';
import {StyleSheet,TouchableOpacity,View,Text,Image} from 'react-native';
import { globalStyles } from './../shared/globalStyles';






export default function ApplicantCard({item,navigation,ID,type}){

    console.log(type)
    //onsole.log(ID)
    const [hide,setHide]=useState(false);
    const [username,setUsername]=useState(item.orgUsername)
    console.log(item)
    const acceptApplicant=()=>
    {
        if(type.substring(0,4)=="Org_"){
        setHide(true);
        fetch("http://10.0.2.2:8080/orgAcceptApplicants/"+ID+"/"+item.userName, {
            method: 'GET',
        })
        .then(res=>res.json())
        .then(json => {
          if(json==true)
          {
           console.log("Accepted")
          }
        })
        .catch((error) => {
            console.error(error);
        });
    }
    else{
        setHide(true);
        fetch("http://10.0.2.2:8080/approveDonationRequests/"+ID+"/"+item.userName, {
            method: 'GET',
        })
        .then(res=>res.json())
        .then(json => {
          if(json==true)
          {
           console.log("Accepted")
          }
        })
        .catch((error) => {
            console.error(error);
        });
    }
    }
    const rejectApplicant=()=>
    {
        if(type.substring(0,4)=="Org_"){
        setHide(true);
        fetch("http://10.0.2.2:8080/orgRejectApplicants/"+ID+"/"+item.userName, {
            method: 'GET',
        })
        .then(res=>res.json())
        .then(json => {
          if(json==true)
          {
           console.log("Rejected")
          }
        })
        .catch((error) => {
            console.error(error);
        });
    }
    else{
        setHide(true);
        fetch("http://10.0.2.2:8080/rejectDonationRequests/"+ID+"/"+item.userName, {
            method: 'GET',
        })
        .then(res=>res.json())
        .then(json => {
          if(json==true)
          {
           console.log("Rejected")
          }
        })
        .catch((error) => {
            console.error(error);
        });
    }
    }

    return(
       
<View style={styles.container}>
        
       
        <View style={globalStyles.rowAlginStyle}>
            <View style={styles.textAlign}>
                <Text style={styles.nameTextStyle} >{item.name}</Text>
            </View>
                <TouchableOpacity onPress={()=>navigation.navigate('orgUserProfile',{data:item})}>
                    <Image 
                    style={styles.userImageStyle}
                    source={require("../images/user.png")}
                    />
                </TouchableOpacity>
           
       
        </View>
        
       {!hide &&
        <View style={globalStyles.buttonstyle}>

        <TouchableOpacity style={globalStyles.greenButtonStyle} onPress={acceptApplicant} > 
            <Text style={globalStyles.textStyle} > Accept </Text>
        </TouchableOpacity>

        <TouchableOpacity style={globalStyles.blackButtonStyle} onPress={rejectApplicant} > 
            <Text style={globalStyles.textStyle}> Reject </Text>
        </TouchableOpacity>
      </View>

       }

      
     

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
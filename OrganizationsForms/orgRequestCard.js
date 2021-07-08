import React,{ useState }  from 'react';
import {StyleSheet,TouchableOpacity,View,Text,Image, Alert} from 'react-native';
import { globalStyles } from './../shared/globalStyles';

export default function ApplicantCard({navigation,item}){
    const [orgOwner,setOrgOwner]=useState(item.userName);
    const [hide,setHide]=useState(false);
   
    const goToPage=()=>
    {  

        return navigation.navigate('userOrganizationProfile',{orgOwner})
    }

    const acceptApplicant=()=>
    {
        //console.log(orgOwner)
        setHide(true);
        fetch("http://10.0.2.2:8080/admin/handleRequest", {
            method:"post",
            headers:{
              'Content-Type': 'application/json'
            },
            body:JSON.stringify({     
                username:orgOwner,
          })
        })
        .then(res=>res.json())
        .then(json => {
            console.log(json)
          if(json==true)
          {
           console.log("Accepted")
          }
        })
        .catch((error) => {
            console.error(error);
        });
    }
    const rejectApplicant=()=>
    {
        setHide(true);
        fetch("http://10.0.2.2:8080/admin/removeOrganization/"+orgOwner, {
            method: 'DELETE',
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
    
    return(
        
        
        <TouchableOpacity style={styles.container} onPress={goToPage}>

            <View style={styles.horizontalSection}>
                    <Text style={styles.item} >{item.name}</Text>
                
            </View>
            {!hide &&
            <View style={globalStyles.buttonstyle}>
                <TouchableOpacity style={globalStyles.greenButtonStyle} onPress={acceptApplicant}> 
                    <Text style={globalStyles.textStyle} > Accept </Text>
                </TouchableOpacity>

                <TouchableOpacity style={globalStyles.blackButtonStyle} onPress={rejectApplicant} > 
                    <Text style={globalStyles.textStyle}> Reject </Text>
                </TouchableOpacity>
            </View>
            }
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
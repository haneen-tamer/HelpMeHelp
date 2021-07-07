import React ,{ useState,useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Button,Image,Platform,ScrollView,TextInput,FlatList} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { globalStyles } from '../shared/globalStyles';
import TextInputCard from './../shared/textInputCard';
import DonationTypeDropdown from '../shared/DonationTypeDropdown';


export default function App(){
    const [changeImage,setChangeImage]=useState(false);
    const [image,setImage]=useState(null);
    const [campName,setCampName]=useState('');
    const [campNameError,setCampNameError]=useState('');
    const [donationType,setDonationType]=useState('');

    useEffect(()=>{async()=>{
        if(Platform.OS !=='web')
        {
          const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
          if(status !=='granted')
          {
            alert('Permission denied!')
          }
        }
      }
      },[])
    
      const PickImage = async ()=>{
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing:true,
          aspect:[4,3],
          quality:1
        })
    
        console.log(result)
        if(!result.cancelled)
        {
          setChangeImage(true)
          setImage(result.uri)
        }
      }

      return(
          <ScrollView>
          <View style={styles.container}>
          <View style={styles.imageborderStyle}>
            <TouchableOpacity onPress={PickImage}>
                {changeImage &&
                    <Image 
                    style={styles.uploadedImageStyle}
                    source={{uri:image}}
                    />
                }
                {!changeImage &&
                    <Image 
                    style={globalStyles.headerImageStyle}
                    source={require('../images/CampaignImage.png')}
                    />
                }
                <Text style={styles.textStyle}>Change Profile Picutre</Text>

                </TouchableOpacity>
            </View>
            
            <View style={globalStyles.rowAlginStyle}> 
                <Text style={styles.requiredStyle}>* Required</Text>
            </View>

            {/*Basic Data Section */}
            <TextInputCard value={"Campain Title\t\t*" } onChange={value=> setCampName(value)} allow_pass={false} allow_multi={false}/>
            <DonationTypeDropdown onChange={id=> setDonationType(id)}/>
            <View style={globalStyles.rowAlginStyle}>
              <Text style={globalStyles.errorStyle}>{campNameError}</Text>
            </View>
                {/*Time Section */}
                {/*Essay Section */}
                {/*Target Section */}
                {/*Buttons Section */}
          </View>
          </ScrollView>
      )
}

const styles = StyleSheet.create({
    container: {
        borderRadius:8,
        borderWidth:2,
        borderColor:'#64CA80',
        justifyContent:"flex-start",
        padding:10
    },
    imageborderStyle:{
    borderRadius:20,
    borderWidth:2,
    borderColor:'#06A9F0',
    paddingBottom:10,
    paddingTop:10,
    marginBottom:10
    },
    uploadedImageStyle:{
    width: 230,
    height: 230,
    alignSelf:'center',
    borderRadius:100,
  },
  textStyle:{
    fontSize:20,
    fontWeight:"bold",
    paddingBottom:20,
    paddingLeft:5,
    paddingRight:20,
    paddingTop:10,
   // color:'#06A9F0',
    alignSelf:'center',
    color:'#000'
    
  },
})
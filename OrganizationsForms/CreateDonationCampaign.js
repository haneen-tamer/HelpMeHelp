import React ,{ useState,useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Button,Image,Platform, Keyboard, KeyboardAvoidingView,
 ScrollView,TextInput, CheckBox, Alert, FlatList} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { globalStyles } from '../shared/globalStyles';
import TextInputCard from './../shared/textInputCard';
import NumberInputCard from './../shared/numberInputCard';
import DonationTypeDropdown from '../shared/DonationTypeDropdown';


export default function App(){
    const [changeImage,setChangeImage]=useState(false);
    
    const [image,setImage]=useState(null);
    
    const [campName,setCampName]=useState('');
    const [campNameError,setCampNameError]=useState('');
    
    const [donationType,setDonationType]=useState('');

    const [startDate,setStartDate]=useState('');
    const [startDateError,setStartDateError]=useState('');
    
    const [endDate,setEndDate]=useState('');
    const [endDateError,setEndDateError]=useState('');
    
    const [target,setTarget]=useState('');
    const [targetError,setTargetError]=useState('');
    
    const [address,setAddress]=useState('');
    const [addressError,setAddressError]=useState('');
    
    const [processDesc,setProcessDesc]=useState('');
    const [processDescError,setProcessDescError]=useState('');
    
    const [description,setDescription]=useState('');
    const [descriptionError,setDescriptionError]=useState('');



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

      checkboxClicked = (key) => {
        this.setState({ [key]: !this.state[key] })
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
            <TextInputCard value={"Start date \t\t\t\t*"} onChange={value=> setStartDate(value) } allow_pass={false} allow_multi={true} allow_edit={true}/>

            <View style={globalStyles.rowAlginStyle}>
            <Text style={globalStyles.errorStyle}>{startDateError}</Text>
            </View>

            <TextInputCard value={"End date \t\t\t\t*"} onChange={value=> setEndDateDate(value) } allow_pass={false} allow_multi={true} allow_edit={true}/>

            <View style={globalStyles.rowAlginStyle}>
            <Text style={globalStyles.errorStyle}>{endDateError}</Text>
            </View>

            <View style={{flexDirection: 'row',  marginBottom: 20}}>
            <CheckBox style={styles.checkbox} value= {false} onPress={() => checkboxClicked()} />
            <Text style={styles.textStyle}>On going campaign</Text>

            </View>

            {/*Essay Section */}

            <TextInputCard value={"Description \t\t\t\t*"} onChange={value=> setDescription(value) } allow_pass={false} allow_multi={true} allow_edit={true}/>

            <View style={globalStyles.rowAlginStyle}>
            <Text style={globalStyles.errorStyle}>{descriptionError}</Text>
            </View>


            <Text style={{fontSize: 20, fontWeight: 'bold', 
              marginLeft: 15, marginTop: 25}}>
                Donation Process
            </Text>

            <TextInputCard value={"Description \t\t\t\t*"} onChange={value=> setProcessDesc(value) } allow_pass={false} allow_multi={true} allow_edit={true}/>

            <View style={globalStyles.rowAlginStyle}>
            <Text style={globalStyles.errorStyle}>{processDescError}</Text>
            </View>

            {/*Target Section */}

            <Text style={{fontSize: 20, fontWeight: 'bold', 
              marginLeft: 15, marginTop: 25}}>
                Goal (in number) your are trying to reach
            </Text>

            <NumberInputCard value={"Target \t\t\t\t*"} onChange={value=> setTarget(value) } allow_pass={false} allow_multi={true} allow_edit={true}/>

            <View style={globalStyles.rowAlginStyle}>
            <Text style={globalStyles.errorStyle}>{targetError}</Text>
            </View>

            <TextInputCard value={"Address"} onChange={value=> setAddress(value) } allow_pass={false} allow_multi={true} allow_edit={true}/>

            <View style={globalStyles.rowAlginStyle}>
            <Text style={globalStyles.errorStyle}>{addressError}</Text>
            </View>

            {/*Buttons Section */}

            <View style={globalStyles.buttonAlignStyle}>
              <TouchableOpacity style={globalStyles.greenButtonStyle} onPress={() => Alert.alert('Launched!')}> 
              <Text style={globalStyles.textStyle}>Launch</Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>

      );
}

const styles = StyleSheet.create({
    container: {
        borderRadius:8,
        borderWidth:2,
        borderColor:'#64CA80',
        justifyContent:"flex-start",
        padding:10
    },
    checkbox:{
      width: 25,
      height: 25,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 15,
      marginTop: 10,
      borderColor: 'black',
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
    paddingBottom:4,
    paddingLeft:5,
    paddingRight:20,
    paddingTop:10,
    alignSelf:'center',
    marginLeft: 10,
  },
})
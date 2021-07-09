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

    const [quizLinkDesc,setQuizLink]=useState('');
    const [quizLinkError,setQuizLinkError]=useState('');
    
    const [description,setDescription]=useState('');
    const [descriptionError,setDescriptionError]=useState('');
    const [checkBoxSelection,setCheckBoxSelection]=useState(false)


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
            <TextInputCard value={"campaign Title                  *" } onChange={value=> setCampName(value)} allow_pass={false} allow_multi={false}/>
            
            
            
            <View style={globalStyles.rowAlginStyle}>
              <Text style={globalStyles.errorStyle}>{campNameError}</Text>
            </View>

            {!checkBoxSelection &&
            <TextInputCard value={"Start date                          *"} onChange={value=> setStartDate(value) } allow_pass={false} allow_multi={true} allow_edit={true}/>
            }
            <View style={globalStyles.rowAlginStyle}>
            <Text style={globalStyles.errorStyle}>{startDateError}</Text>
            </View>
            {!checkBoxSelection &&
            <TextInputCard value={"End date                             *"} onChange={value=> setEndDate(value) } allow_pass={false} allow_multi={true} allow_edit={true}/>
            }
            <View style={globalStyles.rowAlginStyle}>
            <Text style={globalStyles.errorStyle}>{endDateError}</Text>
            </View>

            <View style={{flexDirection: 'row',  marginBottom: 20}}>
            <CheckBox style={styles.checkbox} value= {checkBoxSelection} onValueChange={setCheckBoxSelection} />
          
            <Text style={styles.textStyle}>On going campaign</Text>

            </View>

            {/*Essay Section */}

            <TextInputCard value={"Description                        *"} onChange={value=> setDescription(value) } allow_pass={false} allow_multi={true} allow_edit={true}/>

            <View style={globalStyles.rowAlginStyle}>
            <Text style={globalStyles.errorStyle}>{descriptionError}</Text>
            </View>

            <TextInputCard value={"Donation Process             *"} onChange={value=> setProcessDesc(value) } allow_pass={false} allow_multi={true} allow_edit={true}/>
            <Text style={{fontSize: 17, fontWeight: 'bold', 
              marginLeft: 20, marginTop: 10,color:"#000"}}>
                Describe all the ways a person can {'\n'}donate
                to this campaign
            </Text>
            <View style={globalStyles.rowAlginStyle}>
            <Text style={globalStyles.errorStyle}>{processDescError}</Text>
            </View>

            {/*Target Section */}

            <NumberInputCard value={"Goal                                     *"} onChange={value=> setTarget(value) } allow_pass={false} allow_multi={true} allow_edit={true}/>

            <Text style={{fontSize: 17, fontWeight: 'bold', 
              marginLeft: 20, marginTop: 10,color:"#000"}}>
              Goal (in number) you are trying to reach
            </Text>
            <View style={globalStyles.rowAlginStyle}>
            <Text style={globalStyles.errorStyle}>{targetError}</Text>
            </View>


            <NumberInputCard value={"Form Link                          "} onChange={value=> setQuizLink(value) } allow_pass={false} allow_multi={true} allow_edit={true}/>

            <Text style={{fontSize: 17, fontWeight: 'bold', 
              marginLeft: 20, marginTop: 10,color:"#000"}}>
                Add a Quiz link for candidates to fill out
            </Text>

            <View style={globalStyles.rowAlginStyle}>
            <Text style={globalStyles.errorStyle}>{quizLinkError}</Text>
            </View>

           

            <TextInputCard value={"Address"} onChange={value=> setAddress(value) } allow_pass={false} allow_multi={true} allow_edit={true}/>

            <Text style={{fontSize: 17, fontWeight: 'bold', 
              marginLeft: 20, marginTop: 10,color:"#000"}}>
              Add an address relevant to this campaign
            </Text>
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
  requiredStyle:{
    color:"lightslategrey",
    fontSize:20,
    marginLeft:20,
    height:'90%',
    width:'80%',
    fontWeight:"bold",
    marginBottom:'3%',
    paddingTop:10
    
  },
})
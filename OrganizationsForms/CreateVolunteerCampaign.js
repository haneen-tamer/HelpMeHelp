import React ,{ useState,useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Button,Image,Platform, Keyboard, KeyboardAvoidingView,
 ScrollView,TextInput, CheckBox, Alert, FlatList} from 'react-native';
 import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';
import { globalStyles } from '../shared/globalStyles';
import TextInputCard from './../shared/textInputCard';
import NumberInputCard from './../shared/numberInputCard';
import DonationTypeDropdown from '../shared/DonationTypeDropdown';


export default function App({navigation}){
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
    const [isPickerShow, setIsPickerShow] = useState(false);
    const [isPickerShow2, setIsPickerShow2] = useState(false);
    const [date, setDate] = useState(new Date(Date.now()));
    const [date2, setDate2] = useState(new Date(Date.now()));
    const [Orgusername,setOrgUsername]=useState(navigation.getParam('Orgusername'));

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
      const launch=()=>
      {
        if(checkBoxSelection)
        {
          setEndDate(null)
        }
       
        fetch("http://10.0.2.2:8080/orgAddCampaign/"+Orgusername, {
          method:"post",
          headers:{
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({     
            name:campName,
            address,
            description,
            process:processDesc,
            StartDate:startDate,
            EndDate:endDate,
            target,
            image,
            DonationType:"none",
            QuizLink:quizLinkDesc
        })
      })
      .then(res=>res.json())
      .then(json => {
        
         if(json=='Done')
         {
             console.log("Done")  
         }
          
        
      })
      .catch((error) => {
          console.error(error);
      });
      navigation.navigate('orgHome');
    }
    const onChange = (event, value) => {
      setDate(value);
      setStartDate(date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate())
      if (Platform.OS === 'android') {
        setIsPickerShow(false);
      }
    };
    const showPicker = () => {
      setIsPickerShow(true);
    };
    const onChange2 = (event, value) => {
      setDate2(value);
      setEndDate(date2.getFullYear() + "-" + (date2.getMonth() + 1) + "-" + date2.getDate())
      if (Platform.OS === 'android') {
        setIsPickerShow2(false);
      }
    };
    const showPicker2 = () => {
      setIsPickerShow2(true);
    };
    

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

            {/* {!checkBoxSelection &&
            <TextInputCard value={"Start date                          *"} onChange={value=> setStartDate(value) } allow_pass={false} allow_multi={true} allow_edit={true}/>
            } */}

<View style={styles.pickedDateContainer}>
                  <Text style={styles.pickedDate}>{date.toUTCString()}  </Text>
                </View>

                {!isPickerShow && (
                  <View style={styles.buttonAlignStyle}>
                     <TouchableOpacity style={styles.bluebuttonStyle} onPress={showPicker}> 
                    <Text style={globalStyles.textStyle}>Choose Start Date</Text>
                    </TouchableOpacity>
                  </View>
                )}

                {isPickerShow && (
                  <DateTimePicker
                    value={date}
                    mode={'date'}
                    display={Platform.OS === 'ios' ? 'spinner' : 'spinner'}
                    onChange={onChange}
                    style={globalStyles.RegitserdataStyle}
                  />
                )}

            <View style={globalStyles.rowAlginStyle}>
            <Text style={globalStyles.errorStyle}>{startDateError}</Text>
            </View>
            {/* {!checkBoxSelection &&
            <TextInputCard value={"End date                             *"} onChange={value=> setEndDate(value) } allow_pass={false} allow_multi={true} allow_edit={true}/>
            } */}


          {!checkBoxSelection &&
            <View style={styles.pickedDateContainer}>
                  <Text style={styles.pickedDate}>{date2.toUTCString()}  </Text>
                </View>
              }
                {!isPickerShow2 && !checkBoxSelection &&(
                  <View style={styles.buttonAlignStyle}>
                     <TouchableOpacity style={styles.bluebuttonStyle} onPress={showPicker2}> 
                    <Text style={globalStyles.textStyle}>Choose End Date</Text>
                    </TouchableOpacity>
                  </View>
                )}

                {isPickerShow2 &&  (
                  <DateTimePicker
                    value={date2}
                    mode={'date'}
                    display={Platform.OS === 'ios' ? 'spinner' : 'spinner'}
                    onChange={onChange2}
                    style={globalStyles.RegitserdataStyle}
                  />
                )}
            <View style={globalStyles.rowAlginStyle}>
            <Text style={globalStyles.errorStyle}>{endDateError}</Text>
            </View>

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


            <TextInputCard value={"Form Link                          "} onChange={value=> setQuizLink(value) } allow_pass={false} allow_multi={true} allow_edit={true}/>

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
              <TouchableOpacity style={globalStyles.greenButtonStyle} onPress={launch}> 
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
  pickedDateContainer:{
    fontSize:25,
    fontWeight:"bold",
    color:'#000',
    backgroundColor:'lightgrey',
   // borderBottomWidth:1,
    margin:15,
    height:'3.5%',
    width:'80%',
    marginBottom:30,
    borderColor:"#64CA80",
    borderWidth:1
},
bluebuttonStyle:{
  width: '60%',
  height: 50,
  elevation: 8,
  backgroundColor: "#AACCDD",
  borderRadius: 10,
  paddingVertical: 10,
 marginBottom:1,
 marginLeft:70,
 marginTop:2
},
pickedDate:
{
  fontSize:25,
  fontWeight:"bold",
  color:'lightslategrey',
  backgroundColor:'lightgrey',
 // borderBottomWidth:1,
  margin:15,
  height:'65%',
  width:'80%',
  //marginBottom:30,
}
})
import { StatusBar } from 'expo-status-bar';
import React ,{ useState,useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Button,Image,Platform,ScrollView,TextInput,FlatList} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import Header from '../shared/header';
import { globalStyles } from '../shared/globalStyles';
import GovernoratePicker from '../shared/governorateDropDown';
import OrgTypePicker from '../shared/orgTypeDropDown';
import CategoryPicker from '../shared/categoryDropDown';
import SubCategoryPicker from '../shared/subCategoryDropDown'
import TextInputCard from './../shared/textInputCard';
import { onChange } from 'react-native-reanimated';
import { Facebook } from 'expo';

export default function App({navigation}) {
  const [changeImage,setChangeImage]=useState(false);
  const [image,setImage]=useState("No Image");
  const [username,setUsername]=useState('');
  const [usernameError,setUsernameError]=useState('');
  const [name,setName]=useState('');
  const [nameError,setNameError]=useState('');
  const [password,setPassword]=useState('');
  const [passwordError,setPasswordError]=useState('');
  const [email,setEmail]=useState('');
  const [emailError,setEmailError]=useState('');
  const [governorate,setGovernorate]=useState('');
  const [govError,setGovError]=useState('');
  const [description,setDescription]=useState('');
  const [descriptionError,setDescriptionError]=useState('');
  const [purpose,setPurpose]=useState('');
  const [purposeError,setPurposeError]=useState('');
  const [firstAddress,setFirstAddress]=useState('');
  const [secondAddress,setSecondAddress]=useState('');
  const [thirdAddress,setThirdAddress]=useState('');
  const [addressError,setAddressError]=useState('');
  const [orgType,setOrgType]=useState('');
  const [orgTypeError,setOrgTypeError]=useState('');
  const [category,setCategory]=useState('');
  const [subcategory,setSubcategory]=useState('');
  const [categoryError,setCategoryError]=useState('');
  const [website,setWebsite]=useState('');
  const [hotlineNumber,setHotlineNumber]=useState(0);
  const [hotlineDesc,setHotlineDesc]=useState('');
  const [facebook,setFacebook]=useState('');
  const [instagram,setInstagram]=useState('');
  const [twitter,setTwitter]=useState('');
  const [phoneNumber,setPhoneNumber]=useState(0);
  var addressArr = new Array(); var linksArr = new Array();


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

  const sumbit=()=>
  {
      if(name===""){
        setNameError("Name filed  can not be empty")
      } else{
        setNameError('')
      }
      if(password==="") {
        setPasswordError("Password filed can not be empty")
      }else {
        setPassword('')
      }
      if(username===""){
        setUsernameError("Username filed  can not be empty")
      }else{
        setUsernameError('')
      }
      if(email===""){
        setEmailError("Email address filed can not be empty")
      }else{
        setEmailError('') 
      }
      if(governorate===""){
        setGovError("Governorate filed  can not be empty")
      } else{
        setGovError('')
      }
      if(description==="") {
        setDescriptionError("Description filed  can not be empty")
      }else  {
        setDescriptionError('')
      }
      if(purpose===""){
        setPurposeError("Purpose filed  can not be empty")
      }else{
        setPurposeError('')
      }
      if(orgType==="") {
        setOrgTypeError("Organization Type filed  can not be empty")
      }else {
        setOrgTypeError('')
      }
      if(firstAddress===""){
        setAddressError("Address filed can not be empty")
      }
      if(subcategory===""){
        setAddressError("Category filed can not be empty")
      }

      if(name!=="" && password!=="" && username!=="" && email!=="" && governorate!=="" &&
      description!=="" && purpose!=="" && orgType!=="" && firstAddress!=="")
      {
        if(facebook!='')
        {
          linksArr.push(facebook)
        }
        if(twitter!='')
        {
          linksArr.push(twitter)
        }
        if(instagram!='')
        {
          linksArr.push(instagram)
        }
        addressArr.push(firstAddress)
        if(secondAddress!='')
        {
          addressArr.push(secondAddress)
        }
        if(thirdAddress!='')
        {
          addressArr.push(thirdAddress)
        }
        console.log(linksArr)
        console.log(addressArr)

        fetch("http://10.0.2.2:8080/OrgSignUp",{
          method:"post",
          headers:{
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({     
            name,
            userName:username,
            password,
            governorate,
            email,
            category,
            subCategory:subcategory,
            organizationType:orgType,
            description,
            purpose,
            website,
            socialMedia:linksArr,
            hotlineNumber,
            hotlineDesc,
            logo:image,
            location:addressArr,
            phoneNumber
           })
          })
        .then(res=>res.json())
        .then(json =>{
          if(json==true)
            {
              navigation.navigate('pendingPage',{OrgUsername:username});
            }
            else
            {
              setUsernameError("Username is already taken, Please try again")
            }
          
        })
        //navigation.navigate('pendingPage',{})
      }
      
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={globalStyles.columnAlginStyle}>
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
              <Text style={styles.textStyle}>Change Profile Picture</Text>

            </TouchableOpacity>
            </View>

          
                <View style={globalStyles.rowAlginStyle}> 
                <Text style={styles.requiredStyle}>* Required</Text>
            </View>
            <TextInputCard value={" Username                          *" } onChange={value=> setUsername(value)} allow_pass={false} allow_multi={false}/>
           
            <View style={globalStyles.rowAlginStyle}>
              <Text style={globalStyles.errorStyle}>{usernameError}</Text>
            </View>
              { usernameError==='' &&
            <View style={globalStyles.rowAlginStyle}> 
                <Text style={styles.usernameRequiredStyle}>Note*  You must put "Org_" at the beginning of your Username</Text>
            </View>
            }
            
            <TextInputCard value={" Name                                 *"} onChange={value=> setName(value) } allow_pass={false} allow_multi={true}/>

            <View style={globalStyles.rowAlginStyle}>
            <Text style={globalStyles.errorStyle}>{nameError}</Text>
            </View>

            <TextInputCard value={" Password                          *"} onChange={value=> setPassword(value)} allow_pass={true} allow_multi={false}/>
      
            <View style={globalStyles.rowAlginStyle}>
               <Text style={globalStyles.errorStyle}>{passwordError}</Text>
            </View>

            <TextInputCard value={"  Email Address                 *"} onChange={value=> setEmail(value)} allow_pass={false} allow_multi={true}/>

            <View style={globalStyles.rowAlginStyle}>
              <Text style={globalStyles.errorStyle}>{emailError}</Text>
            </View>

           <GovernoratePicker onChange={value=> setGovernorate(value)} value={" Governorate                *"}/>

            <View style={globalStyles.rowAlginStyle}>
               <Text style={globalStyles.errorStyle}>{govError}</Text>
            </View>
            
            <TextInputCard value={" Description                       *"} onChange={value=> setDescription(value)} allow_pass={false} allow_multi={true}/>

            <View style={globalStyles.rowAlginStyle}>
              <Text style={globalStyles.errorStyle}>{descriptionError}</Text>
            </View>
        
            <TextInputCard value={" Purpose                            *"} onChange={value=> setPurpose(value)} allow_pass={false} allow_multi={true}/>

            <View style={globalStyles.rowAlginStyle}>
              <Text style={globalStyles.errorStyle}>{purposeError}</Text>
             </View>

            {/* <TextInputCard value={" Address                            *"} onChange={value=> setAddress(value)} allow_pass={false} allow_multi={true}/> */}

             <OrgTypePicker onChange={value=> setOrgType(value)} value={"Organization Type       *"} />

            <View style={globalStyles.rowAlginStyle}>
               <Text style={globalStyles.errorStyle}>{orgTypeError}</Text>
             </View>

           
            <CategoryPicker onChangeCatgory={value=> setCategory(value)} value={"Category                       *"}/>
            <SubCategoryPicker onChangeSubCatgory={value=> setSubcategory(value)} value={"SubCategory                 *"}/>

            <View style={globalStyles.rowAlginStyle}>
              <Text style={globalStyles.errorStyle}>{categoryError}</Text>
            </View>

            <TextInputCard value={" Website"} onChange={value=> setWebsite(value)} allow_pass={false} allow_multi={true}/>
            <TextInputCard value={" Enter Phone Number"} onChange={value=> setPhoneNumber(value)} allow_pass={false} allow_multi={true}/>
            {/* <TextInputCard value={" Enter Hotline Number"} onChange={value=> setHotline(value)} allow_pass={false} allow_multi={true}/> */}
        

            <Text style={styles.headerStyle}>  Address: </Text>

            <View style={styles.socailStyle}>
              <TextInputCard value={" First Address                *"} onChange={value=> setFirstAddress(value)} allow_pass={false} allow_multi={true}/>
              <TextInputCard value={" Second Address"} onChange={value=> setSecondAddress(value)} allow_pass={false} allow_multi={true}/>
              <TextInputCard value={" Third Address "} onChange={value=> setThirdAddress(value)} allow_pass={false} allow_multi={true}/>
            </View>

            <View style={globalStyles.rowAlginStyle}>
            <Text style={globalStyles.errorStyle}>{addressError}</Text>
            </View>

            <Text style={styles.headerStyle}>  Hotline Details: </Text>
            <View style={styles.socailStyle}>
              <TextInputCard value={" Hotline Number"} onChange={value=> setHotlineNumber(value)} allow_pass={false} allow_multi={true}/>
              <TextInputCard value={" Hotline Description"} onChange={value=> setHotlineDesc(value)} allow_pass={false} allow_multi={true}/>
            </View>

            <Text style={styles.headerStyle}>  Social Media: </Text>

              <View style={styles.socailStyle}>
                <TextInputCard value={" Facebook"} onChange={value=> setFacebook(value)} allow_pass={false} allow_multi={true}/>
                <TextInputCard value={" Instagram"} onChange={value=> setInstagram(value)} allow_pass={false} allow_multi={true}/>
                <TextInputCard value={" Twitter"} onChange={value=> setTwitter(value)} allow_pass={false} allow_multi={true}/>
              </View>
             
            <View style={styles.buttonAlignStyle}>
              <TouchableOpacity style={styles.buttonStyle} onPress={sumbit}> 
              <Text style={globalStyles.textStyle}>Sumbit</Text>
              </TouchableOpacity>
            </View>
           
           

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
    paddingTop:20,
    marginBottom:'35%'
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
  imageborderStyle:
  {
    borderRadius:50,
    borderWidth:2,
    borderColor:'#06A9F0',
    paddingBottom:10,
    paddingTop:10
  },
  uploadedImageStyle:
  {
    width: 230,
    height: 230,
    alignSelf:'center',
    borderRadius:100,
  },
  dataStyle:{
    fontSize:25,
    fontWeight:"bold",
    color:'#000',
    backgroundColor:'lightgrey',
   // borderBottomWidth:1,
    margin:15,
    height:'65%',
    width:'80%',
    marginBottom:30,
    borderColor:"#64CA80",
    borderWidth:1
  },
  headerStyle:{
    fontSize:25,
    fontWeight:"bold",
    paddingBottom:10,
    paddingLeft:5,
    paddingRight:20,
    paddingTop:15,
    color:'#000'
  },
  
  socailStyle:{
    paddingLeft:22
  },
  mandatoryStyle:{
    color:"red",
    backgroundColor:'lightgrey',
    margin:15,
    marginLeft:0.1,
    fontSize:25,
  },
  buttonStyle:{
   width: '60%',
   height: 50,
   elevation: 8,
   backgroundColor: "#64CA80",
   borderRadius: 10,
   paddingVertical: 10,
  marginBottom:30,
  marginLeft:80,
  marginTop:20
    
  },
   buttonAlignStyle:{
    paddingRight:10,
    paddingLeft:10,
    paddingBottom:60,
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
usernameRequiredStyle:
{
  color:"#000",
  fontSize:17,
  marginLeft:20,
  height:'80%',
  width:'70%',
  fontWeight:"bold",
  paddingTop:15,
  marginBottom:'5%',
  paddingTop:1,
},
usernamekeyword:
{
  color:"#06A9F0",
  fontSize:20,
  height:'70%',
  width:'40%',
  fontWeight:"bold",
  marginBottom:'2%',
  paddingTop:15,
},
usernameRequiredStyle2:
{
  color:"#000",
  fontSize:18,
  marginLeft:20,
  height:'80%',
  width:'50%',
  fontWeight:"bold",
  marginBottom:'10%',
  //paddingTop:15,
},
usernamekeyword2:
{
  color:"#06A9F0",
  fontSize:20,
  height:'70%',
  width:'40%',
  fontWeight:"bold",
  marginBottom:'2%',
  //paddingTop:15,
},
});

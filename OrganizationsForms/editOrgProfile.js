import { StatusBar } from 'expo-status-bar';
import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity , ScrollView} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { globalStyles } from './../shared/globalStyles';
import TextInputCard from './../shared/textInputCard';
import GovernoratePicker from '../shared/governorateDropDown';
import OrgTypePicker from '../shared/orgTypeDropDown';
import CategoryPicker from '../shared/categoryDropDown';
import SubCategoryPicker from '../shared/subCategoryDropDown';


export default function App({navigation}) {
  const [changeImage,setChangeImage]=useState(false);
  const [image,setImage]=useState(null);
  const [username,setUsername]=useState( navigation.dangerouslyGetParent().getParam('OrgUsername'));
  const [usernameError,setUsernameError]=useState('');
  const [data,setData]=useState(null);
  const [found,setFound]=useState(false);
  const [name,setName]=useState(navigation.getParam('name'));
  const [password,setPassword]=useState(navigation.getParam('password'));
  const [email,setEmail]=useState(navigation.getParam('email'));
  const [governorate,setGovernorate]=useState(navigation.getParam('Governorate'));
  const [description,setDescription]=useState(navigation.getParam('description'));
  const [purpose,setPurpose]=useState(navigation.getParam('purpose'));
  const [address,setAddress]=useState(navigation.getParam('location'));
  const [orgType,setOrgType]=useState(navigation.getParam('organizationType'));
  const [category,setCategory]=useState(navigation.getParam('category'));
  const [subcategory,setSubcategory]=useState(navigation.getParam('Subcategory'));
  const [website,setWebsite]=useState(navigation.getParam('website'));
  const [hotline,setHotline]=useState(navigation.getParam('hotline'));
  const [links,setLinks]=useState(navigation.getParam('socialMedia'));
  const [number,setNumber]=useState(navigation.getParam('phoneNumber'));
  const [country,setCountry]=useState(navigation.getParam('country'));
  const [rating,setRating]=useState(navigation.getParam('rating'));
  const [status,setStatus]=useState(navigation.getParam('requestStatus'));
  const[updatedAddress,setUpdatedAddress]=useState('');
  const [firstAddress,setFirstAddress]=useState('');
  const [secondAddress,setSecondAddress]=useState('');
  const [thirdAddress,setThirdAddress]=useState('');
  const [facebook,setFacebook]=useState('');
  const [instagram,setInstagram]=useState('');
  const [twitter,setTwitter]=useState('');
  const [phoneNumber,setPhoneNumber]=useState(0);
  const [hotlineNumber,setHotlineNumber]=useState(0);
  const [hotlineDesc,setHotlineDesc]=useState('');
  var socailMediaLinksArray = new Array(); var locationArray = new Array();
  var socailMedia = new Array();var locations = new Array();
  // locationArray.push(value)
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

  const saveChanged=()=>{
    for(let i=1;i<locationArray.length;i++)
    {
      if(locationArray[i].length==1)
      {
        locations.push(locationArray[i-1]);
      }
    }
    locations.push(locationArray[locationArray.length-1]);

    for(let i=1;i<socailMediaLinksArray.length;i++)
    {
      if(socailMediaLinksArray[i].length<socailMediaLinksArray[i-1].length)
      {

        socailMedia.push(socailMediaLinksArray[i-1]);
      }
    }
    socailMedia.push(socailMediaLinksArray[socailMediaLinksArray.length-1]);
    console.log(socailMediaLinksArray);
    console.log(socailMedia);
    fetch("http://10.0.2.2:8080/orgUpdate/"+username, {
      method:"post",
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        name,    
        password,
        country,
        governorate,
        email,
        category,
        SubCategory:subcategory,
        orgType,
        description,
        purpose,
        rating,
        website,
        socialMedia:socailMedia,
        hotline,
        hotlineDesc,
        logo:image,
        requestStatus:status,
        phoneNumber:number,
        location:locations   
    })
  })
  .then(res=>res.json())
  .then(json => {
    if(json==true)
        {
          navigation.navigate('orgProfile');
        }
  })
  .catch((error) => {
      console.error(error);
  });
    
  }

  return (
  
    <ScrollView>
      <View style={globalStyles.columnAlginStyle}>
        <View style={styles.imageborderStyle}>
        
              {changeImage &&
                  <Image 
                  style={styles.profileImageStyle}
                  source={{uri:image}}
                />
              }
              {!changeImage &&
                  <Image 
                  style={globalStyles.headerImageStyle}
                  source={require('../images/CampaignImage.png')}
                />
              }
         
         </View>
         <TouchableOpacity onPress={PickImage}>
         <Text style={styles.textStyle} >Change Profile Picture</Text>
         </TouchableOpacity>
         <View style={styles.textAlignStyle}> 
         
         
         <Text style={styles.titleStyle}>Username</Text>
             <TextInputCard value={username} onChange={value=> setUsername(value)} allow_pass={false} allow_multi={true} allow_edit={true} text={username}/>

           <Text style={styles.titleStyle}>Name</Text>
           <TextInputCard value={name} onChange={value=> setName(value)} allow_pass={false} allow_multi={true} allow_edit={false} text={name}/>

           <Text style={styles.titleStyle}>Password</Text> 
           <TextInputCard value={"*****"} onChange={value=> setPassword(value)} allow_pass={true} allow_multi={false} allow_edit={true} text={"*****"}/>

           <Text style={styles.titleStyle}>Email Address</Text>
           <TextInputCard value={email} onChange={value=> setEmail(value)} allow_pass={false} allow_multi={true} allow_edit={true} text={email}/>

           <Text style={styles.titleStyle}>Choose Governorate</Text> 

            <GovernoratePicker 
            onChange={value=> setGovernorate(value)}
            value={governorate}
            />

           <Text style={styles.titleStyle}>Description</Text>
           <TextInputCard value={description} onChange={value=> setDescription(value)} allow_pass={false} allow_multi={true} allow_edit={true} text={description}/>

           <Text style={styles.titleStyle}>Purpose</Text>
           <TextInputCard value={purpose} onChange={value=> setPurpose(value)} allow_pass={false} allow_multi={true} allow_edit={true} text={purpose}/>


           <Text style={styles.titleStyle}>Organization Type</Text>
           <OrgTypePicker
           onChange={value=> setOrgType(value)}
           value={orgType}
           />
          
           <CategoryPicker onChangeCatgory={value=> setCategory(value)} value={category}/>
          <SubCategoryPicker onChangeSubCatgory={value=> setSubcategory(value)} value={subcategory}/>
         
           <Text style={styles.titleStyle}>Website</Text>
           <TextInputCard value={website} onChange={value=> setWebsite(value)} allow_pass={false} allow_multi={true} allow_edit={true} text={website}/>
           
           <Text style={styles.titleStyle}>Phone Number</Text>
           <TextInputCard value={number.toString()} onChange={value=> setNumber(value)} allow_pass={false} allow_multi={true} allow_edit={true} text={number.toString()}/>
           
           <Text style={styles.headerStyle}>  Address: </Text>
           <View style={styles.socailStyle}>
              <TextInputCard value={"First Address"} onChange={value=> setFirstAddress(value)} allow_pass={false} allow_multi={true} text={address[0]}/>
              <TextInputCard value={" Second Address"} onChange={value=> setSecondAddress(value)} allow_pass={false} allow_multi={true} text={address[1]}/>
              <TextInputCard value={" Third Address "} onChange={value=> setThirdAddress(value)} allow_pass={false} allow_multi={true} text={address[2]}/>
            </View>

            <Text style={styles.headerStyle}>  Hotline Details: </Text>
            <View style={styles.socailStyle}>
              <TextInputCard value={" Hotline Number"} onChange={value=> setHotlineNumber(value)} allow_pass={false} allow_multi={true}/>
              <TextInputCard value={" Hotline Description"} onChange={value=> setHotlineDesc(value)} allow_pass={false} allow_multi={true}/>
            </View>

            <Text style={styles.headerStyle}>  Social Media: </Text>
            <View style={styles.socailStyle}>
              <TextInputCard value={"Facebook"} onChange={value=> setFacebook(value)} allow_pass={false} allow_multi={true} text={links[0]}/>
              <TextInputCard value={" Instagram"} onChange={value=> setInstagram(value)} allow_pass={false} allow_multi={true} text={links[1]}/>
              <TextInputCard value={" Twitter"} onChange={value=> setTwitter(value)} allow_pass={false} allow_multi={true} text={links[2]}/>
            </View>
            

            <View style={styles.buttonstyle}>
                <TouchableOpacity style={globalStyles.blueButtonStyle} onPress={saveChanged}> 
                  <Text style={globalStyles.textStyle} > Save </Text>
              </TouchableOpacity>
            </View>
            </View>
       
      </View>
      </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    // borderRadius:8,
    // borderWidth:2,
    // borderColor:'#64CA80',
    // justifyContent:"flex-start",
    // padding:20,
    // marginBottom:'220%'
    borderRadius:8,
    borderWidth:2,
    borderColor:'#64CA80',
    justifyContent:"flex-start",
    paddingTop:20,
    marginBottom:'100%'
  },
  profileImageStyle:
  {
    width:190,
    height:190,
    alignSelf:"center",
    borderWidth:3,
    borderRadius:100,
    //  marginTop:20,
    // paddingBottom:20,
    // paddingTop:10
    marginBottom:10
    
    
  },
  imageborderStyle:
  {
    borderRadius:100,
    borderWidth:3,
    borderColor:'#AACCDD',
    alignSelf:"center",
    width:210,
    height:200,
    paddingBottom:10,
     paddingTop:2
  },
  textStyle:
  {
    fontSize:25,
    fontWeight:"bold",
    alignSelf:"center",
    paddingTop:'5%',
    color:"#3CB371",
    marginBottom:'2%'
    
  },
  titleStyle:{
    fontSize:15,
    color:'#000',
    paddingBottom:6,
    marginLeft:15,
    fontWeight:"bold",
    paddingTop:'2%'
    
    
    },
    socailStyle:{
      paddingLeft:22,
      marginBottom:"5%"
    },
    textAlignStyle:
  {
    paddingTop:20
  },
  headerStyle:{
    fontSize:25,
    fontWeight:"bold",
    paddingBottom:20,
    paddingLeft:5,
    paddingRight:20,
    paddingTop:15,
    color:'#000'
  },
  buttonstyle:
  {
    
    width:"150%",
    marginLeft:"25%",
    //marginTop:"5%"
    //width: '60%',
    //height: 50,
    
  
   marginBottom:'80%',
   
  }

});

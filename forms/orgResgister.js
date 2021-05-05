import { StatusBar } from 'expo-status-bar';
import React ,{ useState,useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Button,Image,Platform,ScrollView,TextInput,FlatList} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import Header from '../shared/header';
import { globalStyles } from './../shared/globalStyles';
import DropDownPicker from 'react-native-dropdown-picker';
import Username from './../shared/username';

export default function App() {
  const [changeImage,setChangeImage]=useState(false);
  const [image,setImage]=useState(null);
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
  const [address,setAddress]=useState('');
  const [addressError,setAddressError]=useState('');
  const [orgType,setOrgType]=useState('');
  const [orgTypeError,setOrgTypeError]=useState('');
  const [category,setCategory]=useState('');
  const [subcategory,setSubcategory]=useState('');
  const [categoryError,setCategoryError]=useState('');
  const [website,setWebsite]=useState('');
  const [hotline,setHotline]=useState('');

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
        setPassword("Password filed can not be empty")
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
              <Text style={styles.textStyle}>Change Profile Picutre</Text>

            </TouchableOpacity>
            </View>

            <View style={globalStyles.rowAlginStyle}> 
                <Text style={styles.requiredStyle}>* Required</Text>
            </View>
            <View style={globalStyles.rowAlginStyle}>

              <TextInput style={styles.dataStyle}
                placeholderTextColor="lightslategrey"
                placeholder=" Username                          *"
                underlineColorAndroid="transparent"
                paddingLeft='3%'
                textContentType="username"
                onChangeText={(text)=>{setUsername(text)}}
                />
            </View>
            
            <View style={globalStyles.rowAlginStyle}>
            
            
              <Text style={styles.errorStyle}>{usernameError}</Text>
            
              
            </View>
          
            

            <View style={globalStyles.rowAlginStyle}>

              <TextInput style={styles.dataStyle}
                placeholderTextColor="lightslategrey"
                placeholder=" Name                                 *"
                textContentType="name"
                underlineColorAndroid="transparent"
                paddingLeft='3%'
                onChangeText={(text)=>{setName(text)}}
                />
            </View>

            <View style={globalStyles.rowAlginStyle}>
            
            <Text style={styles.errorStyle}>{nameError}</Text>
            </View>

            <View style={globalStyles.rowAlginStyle}>

              <TextInput style={styles.dataStyle}
                placeholderTextColor="lightslategrey"
                placeholder=" Password                          *"
                underlineColorAndroid="transparent"
                textContentType="password"
                secureTextEntry={true}
                paddingLeft='3%'
                onChangeText={(text)=>{setPassword(text)}}
                />
            </View>
            

            <View style={globalStyles.rowAlginStyle}>
            
            <Text style={styles.errorStyle}>{passwordError}</Text>
            
          </View>

            <View style={globalStyles.rowAlginStyle}>

              <TextInput style={styles.dataStyle}
                placeholderTextColor="lightslategrey"
                placeholder="  Email Address                 *"
                underlineColorAndroid="transparent"
                paddingLeft='3%'
                onChangeText={(text)=>{setEmail(text)}}
                />
            </View>
            <View style={globalStyles.rowAlginStyle}>
            
            <Text style={styles.errorStyle}>{emailError}</Text>
            
          </View>

            <View style={styles.DDstyle}>
                <DropDownPicker
                  items={[
                      {label: 'Cairo', value: 'Cairo'}, {label: 'Alexandria', value: 'Alexandria'}, {label: 'Giza', value: 'Giza'},
                      {label: 'Aswan', value: 'Aswan'}, {label: 'Asyut', value: 'Asyut'}, {label: 'Beheira', value: 'Beheira'},
                      {label: 'Bein Suef', value: 'Bein Suef'}, {label: 'Dakahlia', value: 'Dakahlia'}, {label: 'Damietta', value: 'Damietta'},
                      {label: 'Faiyum', value: 'Faiyum'}, {label: 'Ghariba', value: 'Ghariba'}, {label: 'Ismailia', value: 'Ismailia'},
                      {label: 'Kafr El Sheikh', value: 'Kafr El Sheikh'}, {label: 'Luxor', value: 'Luxor'}, {label: 'Matruh', value: 'Matruh'},
                      {label: 'Minya', value: 'Minya'}, {label: 'Qalyubia', value: 'Qalyubia'}, {label: 'Qena', value: 'Qena'},
                      {label: 'Red Sea', value: 'Red Sea'}, {label: 'Sharqia', value: 'Sharqia'}, {label: 'Sohag', value: 'Sohag'},
                      {label: 'South Sinai', value: 'South Sinai'},{label: 'Suez', value: 'Suez'}
                  ]}
                  containerStyle={{height: '4.5%',width:'84%',paddingLeft:15,paddingTop:10}}
                  style={{backgroundColor: 'lightgrey', borderColor:"#64CA80",
                  borderWidth:1.5}}
                  itemStyle={{
                      justifyContent: 'flex-start',
                  }}
                  labelStyle={{fontSize:20,color:"#000"}}
                  dropDownStyle={{backgroundColor: '#fafafa'}}
                  onChangeItem={item => setGovernorate(item.label)}
                  placeholder="Choose Governorate    *"
                  placeholderStyle={{fontWeight:"bold",fontSize:25,color:"lightslategrey"}}
                  selectedLabelStyle={{fontWeight:"bold",fontSize:25,color:"#000"}}
                  arrowSize={20}
              />
            </View>

            <View style={globalStyles.rowAlginStyle}>
            
            <Text style={styles.errorStyle}>{govError}</Text>
            
          </View>
              
            <View style={globalStyles.rowAlginStyle}>

              <TextInput style={styles.dataStyle}
                placeholderTextColor="lightslategrey"
                placeholder=" Description                       *"
                underlineColorAndroid="transparent"
                multiline={true}
                paddingLeft='3%'
                onChangeText={(text)=>{setDescription(text)}}
                />
            </View>

            <View style={globalStyles.rowAlginStyle}>
            
            <Text style={styles.errorStyle}>{descriptionError}</Text>
            
          </View>
            
            <View style={globalStyles.rowAlginStyle}>

              <TextInput style={styles.dataStyle}
                placeholderTextColor="lightslategrey"
                placeholder=" Purpose                            *"
                underlineColorAndroid="transparent"
                multiline={true}
                paddingLeft='3%'
                onChangeText={(text)=>{setPurpose(text)}}
                />
            </View>

            <View style={globalStyles.rowAlginStyle}>
            
            <Text style={styles.errorStyle}>{purposeError}</Text>
            
          </View>

            <View style={globalStyles.rowAlginStyle}>

              <TextInput style={styles.dataStyle}
                placeholderTextColor="lightslategrey"
                placeholder=" Address                            *"
                underlineColorAndroid="transparent"
                multiline={true}
                paddingLeft='3%'
                onChangeText={(text)=>{setAddress(text)}}
                />
            </View>

            <View style={globalStyles.rowAlginStyle}>
            
            <Text style={styles.errorStyle}>{addressError}</Text>
            
          </View>

          <View style={styles.DDstyle}>
            <DropDownPicker
                    items={[
                        {label: 'Company(Other)', value: 'Company'}, {label: 'Company Limitied by Guaran', value: 'CLBG'}, {label: 'Friendly Society', value: 'FS'},
                        {label: 'Political Party', value: 'PP'}, {label: 'Primay School', value: 'PS'}, {label: 'Private Charitable Trust', value: 'PCT'},
                        {label: 'Secondary School', value: 'SS'}, {label: 'Sport Body', value: 'SB'}, {label: 'Statutory or Charter Body', value: 'SORB'},
                        {label: 'Third-level Education Institution', value: 'TLEI'}, {label: 'Trade Union', value: 'TU'}, {label: 'Trust', value: 'Trust'},
                        {label: 'Unincorporated Association', value: 'UA'}
                    ]}
                    containerStyle={{height: '4.5%',width:'84%',paddingLeft:15,paddingTop:10}}
                    style={{backgroundColor: 'lightgrey', borderColor:"#64CA80",
                    borderWidth:1.5}}
                    itemStyle={{
                        justifyContent: 'flex-start',
                    }}
                    labelStyle={{fontSize:20,color:"#000"}}
                    dropDownStyle={{backgroundColor: '#fafafa'}}
                    onChangeItem={item => setOrgType(item.label)}
                    placeholder="Organisation Type       *"
                    placeholderStyle={{fontWeight:"bold",fontSize:25,color:"lightslategrey"}}
                    selectedLabelStyle={{fontWeight:"bold",fontSize:25,color:"#000", multiline:true}}
                    arrowSize={20}
                />
            </View>

            <View style={globalStyles.rowAlginStyle}>
            
            <Text style={styles.errorStyle}>{orgTypeError}</Text>
            
          </View>

            <View style={styles.DDstyle}>
              <DropDownPicker
                    items={[
                        {label: 'Advocacy,Law,Politics', value: 'Law',untouchable:true}, {label: 'Health', value: 'Health',untouchable:true,parent:'na'}, {label: 'Arts, Culture, Media', value: 'Art',untouchable:true},
                        {label: 'International', value: 'International',untouchable:true}, {label: 'Professional, Vocational', value: 'Professional',untouchable:true}, {label: 'Recreation, Sports', value: 'Sports',untouchable:true},
                        {label: 'Religion', value: 'Religion',untouchable:true}, {label: 'Education, Research', value: 'Education',untouchable:true}, {label: 'Local Development, Housing', value: 'Housing',untouchable:true},
                        {label: 'Social Services', value: 'SS',untouchable:true}, {label: 'Philanthropy, Voluntarism', value: 'Voluntarism',untouchable:true}, {label: 'Environment', value: 'Environment',untouchable:true},
                        
                        {label: 'Advocacy', value: 'Advocacy',parent:'Law'}, {label: 'Civil and human rights', value: 'HR',parent:'Law'}, {label: 'Legal services', value: 'LS',parent:'Law'}, {label: 'Politics', value: 'Politics',parent:'Law'},

                        {label: 'Arts', value: 'a',parent:'Art'}, {label: 'Heritage and visitor attractions', value: 'HAVA',parent:'Art'}, {label: 'Media, Film', value: 'Media',parent:'Art'},{label: 'Museums and libraries', value: 'Museums',parent:'Art'},

                        {label: 'Addiction Support', value: 'AS',parent:'Health'}, {label: 'Health services and health promotion', value: 'HSAHP',parent:'Health'}, {label: 'Hospices', value: 'Hospices',parent:'Health'},
                        {label: 'Hospitals', value: 'Hospitals',parent:'Health'},{label: 'Mental health services', value: 'MHS',parent:'Health'},{label: 'Residential mental health services', value: 'RMHS',parent:'Health'},{label: 'Residential care centres', value: 'RCC',parent:'Health'},

                        {label: 'International affiliation', value: 'IA',parent:'International'}, {label: 'International development', value: 'ID',parent:'International'},

                        {label: 'Chambers of commerce', value: 'COC',parent:'Professional'}, {label: 'Professional or sector representative bodies', value: 'POSR',parent:'Professional'}, {label: 'Trade unions, employer organisations', value: 'TUEO',parent:'Professional'},

                        {label: 'Agricultural fairs', value: 'AF',parent:'Sports'}, {label: 'Recreational clubs, societies', value: 'RCS',parent:'Sports'}, {label: 'Sports organisations', value: 'SO',parent:'Sports'},
                        
                        {label: 'Diocesan, parishes', value: 'DP',parent:'Religion'}, {label: 'Places of worship', value: 'POW',parent:'Religion'}, {label: 'Religious associations', value: 'RA',parent:'Religion'},

                        {label: 'Adult and continuing education', value: 'AOCE',parent:'Education'}, {label: 'Education support', value: 'ES',parent:'Education'}, {label: 'Pre-Primary education', value: 'PPE',parent:'Education'},
                        {label: 'Primary education', value: 'PE',parent:'Education'},{label: 'Research', value: 'Research',parent:'Education'},{label: 'Secondary education', value: 'SE',parent:'Education'},

                        {label: 'Job creation', value: 'JC',parent:'Housing'}, {label: 'Local development', value: 'LD',parent:'Housing'}, {label: 'Sheltered housing', value: 'Sh',parent:'Housing'},
                        {label: 'Social enterprise', value: 'SE',parent:'Housing'},{label: 'Social housing', value: 'SH',parent:'Housing'},

                        {label: 'Emergency relief services', value: 'ERS',parent:'SS'}, {label: 'Family support services', value: 'FSS',parent:'SS'}, {label: 'Homelessness services', value: 'HS',parent:'SS'},{label: 'Youth services', value: 'YS',parent:'SS'},
                        {label: 'Pre-school childcare', value: 'PC',parent:'SS'},{label: 'Services for older people', value: 'SFOP',parent:'SS'},{label: 'Services for people with disabilities', value: 'SFPWD',parent:'SS'},{label: 'Services for Travellers and ethnic minorities', value: 'SFTAEM',parent:'SS'},
                        
                        {label: 'Fund-raising', value: 'FR',parent:'Voluntarism'}, {label: 'Philanthropy', value: 'Philanthropy',parent:'Voluntarism'}, {label: 'Voluntarism', value: 'voluntarisms',parent:'Voluntarism'},

                        {label: 'Animal welfare', value: 'AW',parent:'Environment'}, {label: 'Environmental enhancement', value: 'EE',parent:'Environment'}, {label: 'Environmental sustainability', value: 'ES',parent:'Environment'}, {label: 'Group water schemes', value: 'GWS',parent:'Environment'}
                    ]}
                    containerStyle={{height: '4.5%',width:'84%',paddingLeft:15,paddingTop:10}}
                    style={{backgroundColor: 'lightgrey', borderColor:"#64CA80",
                    borderWidth:1.5}}
                    itemStyle={{
                        justifyContent: 'flex-start'
                        
                    }}
                    labelStyle={{fontSize:20,color:"#000"}}
                    dropDownStyle={{backgroundColor: '#fafafa'}}
                    onChangeItem={item =>{ setCategory(item.parent.label),setSubcategory(item.label)}}
                    placeholder="Category                       *"
                    placeholderStyle={{fontWeight:"bold",fontSize:25,color:"lightslategrey"}}
                    selectedLabelStyle={{fontWeight:"bold",fontSize:25,color:"#000"}}
                    arrowSize={20}
                />
              </View>

              <View style={globalStyles.rowAlginStyle}>
            
            <Text style={styles.errorStyle}>{categoryError}</Text>
            
          </View>

            <View style={globalStyles.rowAlginStyle}>

              <TextInput style={styles.dataStyle}
                placeholderTextColor="lightslategrey"
                placeholder=" Website"
                underlineColorAndroid="transparent"
                paddingLeft='3%'
                />
            </View>

            <View style={globalStyles.rowAlginStyle}>

              <TextInput style={styles.dataStyle}
                placeholderTextColor="lightslategrey"
                placeholder=" Enter Hotline Number"
                keyboardType="numeric"
                underlineColorAndroid="transparent"
                paddingLeft='3%'
                />
            </View>
           

            <Text style={styles.headerStyle}>  Socail Media: </Text>

              <View style={styles.socailStyle}>
                <View style={globalStyles.rowAlginStyle}>
                  <TextInput style={styles.dataStyle}
                    placeholderTextColor="lightslategrey"
                    placeholder=" Facebook"
                    underlineColorAndroid="transparent"
                    paddingLeft='3%'
                    />
                </View>

                <View style={globalStyles.rowAlginStyle}>
                  <TextInput style={styles.dataStyle}
                    placeholderTextColor="lightslategrey"
                    placeholder=" Instagram"
                    underlineColorAndroid="transparent"
                    paddingLeft='3%'
                    />
                </View>

                <View style={globalStyles.rowAlginStyle}>
                  <TextInput style={styles.dataStyle}
                    placeholderTextColor="lightslategrey"
                    placeholder=" Twitter"
                    underlineColorAndroid="transparent"
                    paddingLeft='3%'
                    />
                </View>
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
    paddingTop:20
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
  DDstyle:{
    marginBottom:2,
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
errorStyle:{
  fontSize:15,
  marginLeft:20,
  height:'90%',
  width:'80%',
  color:"red"
},
requiredStyle:{
  color:"lightslategrey",
  fontSize:20,
  marginLeft:20,
  height:'90%',
  width:'80%',
  fontWeight:"bold",
  paddingTop:20
}
});

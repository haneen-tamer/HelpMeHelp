import { StatusBar } from 'expo-status-bar';
import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View, TextInput,FlatList, TouchableOpacity, ScrollView, ActivityIndicator} from 'react-native';
import { globalStyles } from '../shared/globalStyles';
import HotlineSearchCard from '../shared/HotlineSearchCard';
import CampSearchCard from '../shared/CampSearchCard';
import OrgSearchCard from '../shared/OrgSearchCard';
import { AntDesign } from '@expo/vector-icons';

const hotlineData = [
    { id: '1', number: '1989', orgName:'Resala', description:'text to describe hotline'},
    { id: '2', number: '1999', description:'text to describe hotline' },
    { id: '3', number: '2115', description:'text to describe hotline' },
    { id: '4', number: '6656', orgName:'Resala', description:'text to describe hotline' }
    ];
const campData = [
    {name:'Ramdan Iftar',organizationName:'Resala',startDate:'8/4/2021',endDate:'10/4/2021',class:'A',subClass:['dd','dddd'],progress:7,target:7,status:'completed',id:'1',month:'April',adress:'fhifhoiojfoije',descreption:'kskskskksks',donationType:'clothes',userStatus:'NotSent'},
    { id: '2', name:'Ramdan Iftar',organizationName:'Resala',startDate:'8/4/2021',endDate:'10/4/2021',class:'A',subClass:['dd','dddd'],progress:7,target:7,status:'completed',month:'April',adress:'fhifhoiojfoije',descreption:'kskskskksks',donationType:'clothes',userStatus:'NotSent'},
    { id: '3', name:'Ramdan Iftar',organizationName:'Resala',startDate:'8/4/2021',endDate:'10/4/2021',class:'A',subClass:['dd','dddd'],progress:7,target:7,status:'completed',month:'April',adress:'fhifhoiojfoije',descreption:'kskskskksks',donationType:'clothes',userStatus:'NotSent'},
    { id: '4',  name:'Ramdan Iftar',organizationName:'Resala',startDate:'8/4/2021',endDate:'10/4/2021',class:'A',subClass:['dd','dddd'],progress:7,target:7,status:'completed',month:'April',adress:'fhifhoiojfoije',descreption:'kskskskksks',donationType:'clothes',userStatus:'NotSent'},
    ];
const orgData = [
    { id: '1', Name:'Resala',class:'A',subClass:['dd','dddd'],purpose:'ffffff',month:'April',adress:'fhifhoiojfoije',descreption:'kskskskksks',organizationType:'clothes',userStatus:'Approved',website:'ddd',hotline:'001221',facebook:'ss',instagram:'dd',twitter:'dddd'},
    { id: '2', Name:'Resala',class:'A',subClass:['dd','dddd'],purpose:'ffffff',month:'April',adress:'fhifhoiojfoije',descreption:'kskskskksks',organizationType:'clothes',userStatus:'Approved',website:'ddd',hotline:'001221',facebook:'ss',instagram:'dd',twitter:'dddd'},
    { id: '3', Name:'Resala',class:'A',subClass:['dd','dddd'],purpose:'ffffff',month:'April',adress:'fhifhoiojfoije',descreption:'kskskskksks',organizationType:'clothes',userStatus:'Approved',website:'ddd',hotline:'001221',facebook:'ss',instagram:'dd',twitter:'dddd'},
    { id: '4', Name:'Resala',class:'A',subClass:['dd','dddd'],purpose:'ffffff',month:'April',adress:'fhifhoiojfoije',descreption:'kskskskksks',organizationType:'clothes',userStatus:'Approved',website:'ddd',hotline:'001221',facebook:'ss',instagram:'dd',twitter:'dddd'},
];


    
export default function Search({navigation}){
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [name, setName] = useState();

    const renderHeader = ({title, fullData})=>{
      return (
          <View>
          <View style={styles.listHeading}>
          <Text style={globalStyles.smalllHeaderStyle}>{title}</Text>
          <TouchableOpacity onPress={()=>navigation.navigate('seeAll', fullData)}>
          <Text style={globalStyles.smallTextStyle} >see all{' >'}</Text>
          </TouchableOpacity>
          
          </View>
          
          <View style={globalStyles.lineStyle}></View>
          </View>
      );
  }


    useEffect(() => {
        setIsLoading(true);
        setTimeout(function() {
            setData({hotlines:hotlineData, camps:campData, orgs:orgData});
            setIsLoading(false);
        }, 50000);
        // fetch(API_ENDPOINT)
        //   .then(response => response.json())
        //   .then(results => {
        //     setData(results);
        //     setIsLoading(false);
        //   })
        //   .catch(err => {
        //     setIsLoading(false);
        //     setError(err);
        //   });
        
      }, []);
    
    if (isLoading) {
    return (
        <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#5500dc" />
        </View>
    );
    }

    if (error) {
        return (
          <View style={styles.centerContainer}>
            <Text style={{ fontSize: 18}}>
              Error fetching data... Check your network connection!
            </Text>
          </View>
        );
      }

    return(
        <View style={styles.container}>
        {<View style={styles.searchArea}>
        <TextInput style={styles.searchEntry} 
        placeholder='Search...'
        onChangeText={(val) => setName(val)}
        autoCorrect={false}
        autoCapitalize="none"
        />
        <AntDesign style={styles.icon} name="search1" size={24} color="black" />
      </View>}

        <ScrollView>
        <View style={styles.flatListStyle}>
          <FlatList
          ListHeaderComponent={renderHeader({title:"Hotlines", fullData:data.hotlines})}
          keyExtractor={(item) => item.id} 
          data={data.hotlines} 
          renderItem={({ item }) => ( 
              <HotlineSearchCard hotline={item}/>
          )}
          />
          </View>
          <View style={styles.flatListStyle}>
          <FlatList
          ListHeaderComponent={renderHeader({title:"Campaigns", fullData:data.camps})}
          keyExtractor={(item) => item.id} 
          data={data.camps} 
          renderItem={({ item }) => ( 
              <CampSearchCard camp={item}/>
          )}
          />
          </View>
          <View style={styles.flatListStyle}>
          <FlatList
          ListHeaderComponent={renderHeader({title:"Organizations", fullData:data.orgs})}
          keyExtractor={(item) => item.id} 
          data={data.orgs} 
          renderItem={({ item }) => ( 
              <OrgSearchCard org={item}/>
          )}
          />
          </View>
          
        
        </ScrollView>
        
        </View>
    );
}

const styles = StyleSheet.create({
    searchArea:{
        flexDirection: 'row',
        width: '90%',
        height: '10%',
        backgroundColor: 'lightgrey',
        //fontSize: 15,
        //fontWeight: 'bold',
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 5,
        borderWidth: 0.25,
        margin: 20,
    },
    container: {
      justifyContent:'flex-start',
      flex:2,
      padding:20,
      marginTop:StatusBar.length
      },
    centerContainer:{ 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    flatListStyle:{
        justifyContent:'flex-start',
        flex:2,
        padding:5
      },
      listHeading:{
        flexDirection:'row',
        flex:1,
        alignItems:'flex-start',
        justifyContent:'space-between'
      },
      searchEntry:{
        fontSize: 16,
        fontWeight: 'bold',
        width: '90%',
      },
      icon:{
        right: '5%',
        position: 'absolute',
        paddingTop: 17,
      },
});
import React ,{ useState,useEffect } from 'react';
import { StyleSheet, Text, View , Image,BackHandler} from 'react-native';
import {globalStyles} from '../shared/globalStyles'

export default function App({navigation}) {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => true);
  }, []);
   
  return (

        <View style={styles.container}>
             <Text style={styles.textStyle}>Please wait for admain approval. </Text>
             
            
             <Image
                style={styles.pendingImage}
                source={require('../images/Analyze-pana.png')}/>
           <Text style={styles.textStyle2}>For any question contact us via</Text>
            <Text style={styles.textStyle3}>HelpMeHelp2021@gmail.com</Text>
           
        </View>
  );
}

const styles = StyleSheet.create({

container: {
    borderRadius:8,
    borderWidth:2,
    borderColor:'#64CA80',
    justifyContent:"flex-start",
    padding:"4%"
  },
  pendingImage:{
    width: 400,
    height: 420,
    alignSelf:'center',
    paddingTop:"5%"
  },
  textStyle:
  {
    fontSize: 30,
    color: "#000",
    fontWeight: "bold",
    paddingTop:"10%",
    paddingLeft:"5%"
       
  },
  textStyle2:
  {
    fontSize: 25,
    color: "#000",
    fontWeight: "bold",
    paddingTop:"3%",
    paddingLeft:"5%"
       
  },
  textStyle3:
  {
    fontSize: 20,
    color: "#000",
    fontWeight: "bold",
    paddingLeft:"5%",
    color:'#64CA80',
    paddingBottom:"23%"
       
  }


})
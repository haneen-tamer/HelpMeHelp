import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, Modal } from 'react-native';
import Header from '../shared/header';
import { SearchBar } from 'react-native-elements';
import drawNav from '../navigations/drawerNavigation';
import Start from './start';



//const logoutModal = () => {
export default function App() {

  const [modal, setModal] = useState(false); 

  return (
    <Modal 
      transparent={false}
      visible={modal}
      animationType="slide"
    >
      <View style={styles.modalView}>
        
      </View>
    
    </Modal>
  );
}

//export default logoutModal;
  
/* 
export default function App() {
  const alertok = () => {
    Alert.alert("alert", "haa", [{text:"ok", onPress: () => {this.okalert()}}, {text:"cancel"}]);
  }

  const okalert = () => {
    Alert.alert('ok is pressed')
  }
  const cancelalert = () => {
    Alert.alert('cancel is pressed')
  }
  const firstalert = () => {
    Alert.alert("alert", "", [{text:"ok"}, {text:"cancel"}])
  }
  const firstAlert = () => {
    Alert.alert("ok", "cancel")
  }


  return (
    <View style={styles.container}>
      <Text style={styles.text} >ha3mell logout alert henaa</Text>
      <Button  title="show first alert" onPress={alertok} /> 
      <StatusBar style="auto" />
    </View>
  );
}
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 15,
    left:10,
    top: 10,
  },
  search: {
    marginTop: 20,
    height: 30,
    left: 20,
    width: 330,
  },
    modalView: {
    position: 'absolute',
    bottom: 1,
    height: '50%',
    width: '100%',
    opacity: 1,
    backgroundColor: 'dimgray',
    opacity: 0.9,
    //justifyContent: 'center',
  },
});

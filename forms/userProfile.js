import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Header from '../shared/header';
import { SearchBar } from 'react-native-elements';



export default function App() {

  const [entry, setEntry] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.text} >'userProfile' is under construction, ed3elna:D</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    /* alignItems: 'center',
    justifyContent: 'center' */
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
  }
});

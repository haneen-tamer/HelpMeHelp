import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity , ScrollView} from 'react-native';




export default function App({navigation}) {

  

  return (
    <ScrollView>
    <View style={styles.container}>
    <Text>Hellooo</Text>
    </View>
     
      </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
 

});

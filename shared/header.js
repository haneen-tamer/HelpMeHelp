import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import { SearchBar } from 'react-native-elements';



export default function Header({navigation}){

    const drawMenu = () => {
         navigation.openDrawer();
    }

    return (
        <View style={styles.header}>
            {/* <MaterialIcons name='menu' size={28} onPress={drawMenu} style={styles.icon}/> */}
            <MaterialCommunityIcons name="menu" size={30} style={styles.icon} color="black" onPress={drawMenu} />
            {/* <Text style={styles.headerText} Text> {title}</Text> */}
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
      icon: {
        position: 'absolute',
        left: 18,
      }
    
});
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import { SearchBar } from 'react-native-elements';



export default function Header(){

    const drawMenu = () => {
        // navigation.openDrawer();
    }

    return (
        <View style={styles.header}>
            {/* <MaterialIcons name='menu' size={28} onPress={drawMenu} style={styles.icon}/> */}
            <MaterialCommunityIcons name="menu" size={30} style={styles.icon} color="black" />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        width: '100%',
        height: '100%',
    },
    icon: {
        position: 'absolute',
        left: 15,
        bottom: 5,
    },
});
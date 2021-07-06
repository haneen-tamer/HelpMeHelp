import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Username(){

    const drawMenu = () => {
        //nav.openDrawer();
    }

    return (
        <View /* style={styles.header} */>
            <Text style={styles.name} Text>Hi, admin</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        width: '100%',
        height: '100%',
    },
    name: {
        position: 'absolute',
        right: 16,
        bottom: 10,
        fontSize: 20,
    },
});
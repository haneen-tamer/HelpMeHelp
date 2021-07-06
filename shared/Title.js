import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Title({title}){
    return (
        <View /* style={styles.header} */>
            <Text style={styles.headerText} Text> {title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        width: '100%',
        height: '100%',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
        marginLeft:"30%"
      },
});
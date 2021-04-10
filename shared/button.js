import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
 
export default function CustomButton ({ text, onPress })
{
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.btn}>
                <Text style={styles.btnText}>
                    { text }
                </Text>
            </View>
        </TouchableOpacity>

    )
}
const styles = StyleSheet.create({
    btn: {
        backgroundColor: 'silver',
        borderRadius: 4,
        paddingVertical: 13,
        margin: 15,

    },
    btnText: {
        fontSize: 17,
        fontWeight: 'bold',
        fontFamily: 'ArialMT',
        textAlign: 'center',
    },
});
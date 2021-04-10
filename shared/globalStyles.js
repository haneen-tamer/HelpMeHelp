import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({

    greenButtonStyle:{
        width: '30%',
        height: 50,
        elevation: 8,
        backgroundColor: "#64CA80",
        borderRadius: 10,
        paddingVertical: 10,
        margin:1
    },
    blueButtonStyle:{
        width: '30%',
        height: 50,
        elevation: 8,
        backgroundColor: '#AACCDD',
        borderRadius: 10,
        paddingVertical: 10,
        margin:1
    },
    blackButtonStyle:{
        width: '30%',
        height: 50,
        elevation: 8,
        backgroundColor: '#454545',
        borderRadius: 10,
        paddingVertical: 10,
        margin:1
    },
    textStyle:{
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    
      },
      campaignClassStyle: {
        // elevation: 8,
        backgroundColor: "#454545",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        fontSize: 18,
        color: "#fff",
        //fontWeight: "bold",
        alignSelf: "center",
        margin:10,
        textTransform: "uppercase"
      }
    
});
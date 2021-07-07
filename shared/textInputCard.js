import React from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity , ScrollView} from 'react-native';
import { globalStyles } from './globalStyles';
import { onChange } from 'react-native-reanimated';


export default function TextInputCard({value,onChange,allow_pass,allow_multi,allow_edit,text}){

    
    return(

        <View style={globalStyles.rowAlginStyle}>

        <TextInput style={globalStyles.RegitserdataStyle}
          placeholderTextColor="lightslategrey"
          placeholder={value}
          underlineColorAndroid="transparent"
          multiline={allow_multi}
          paddingLeft='3%'
          secureTextEntry={allow_pass}
          editable={allow_edit}
          value={text}
          onChangeText={text=>onChange(text)}
          />
      </View>
    )}

const styles = StyleSheet.create({
  
   
    
  

});
import React from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity , ScrollView} from 'react-native';
import { globalStyles } from './globalStyles';
import DropDownPicker from 'react-native-dropdown-picker';


export default function OrgTypePicker({onChange,value}){

    
    return(

        <View style={styles.DDstyle}>
        <DropDownPicker
                    items={[
                        {label: 'local association', value: 'local association'}, {label: 'local institution', value: 'local institution'},
                         {label: 'central institution', value: 'central institution'},{label: 'branch', value: 'branch'} 
                    ]}
                    containerStyle={{height: '4.5%',width:'84%',paddingLeft:15,paddingTop:10}}
                    style={{backgroundColor: 'lightgrey', borderColor:"#64CA80",
                    borderWidth:1.5}}
                    itemStyle={{
                        justifyContent: 'flex-start',
                    }}
                    labelStyle={{fontSize:20,color:"#000"}}
                    dropDownStyle={{backgroundColor: '#fafafa'}}
                    onChangeItem={item => onChange(item.label)}
                    placeholder={value}
                    placeholderStyle={{fontWeight:"bold",fontSize:25,color:"lightslategrey"}}
                    selectedLabelStyle={{fontWeight:"bold",fontSize:25,color:"#000", multiline:true}}
                    arrowSize={20}
                    // "Organisation Type       *"
                />
    </View>
    )}

const styles = StyleSheet.create({
    DDstyle:{
        marginBottom:2,
      },
   
    
  

});
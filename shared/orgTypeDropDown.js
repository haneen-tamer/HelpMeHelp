import React from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity , ScrollView} from 'react-native';
import { globalStyles } from './globalStyles';
import DropDownPicker from 'react-native-dropdown-picker';


export default function OrgTypePicker({onChange}){

    
    return(

        <View style={styles.DDstyle}>
        <DropDownPicker
                    items={[
                        {label: 'Company(Other)', value: 'Company'}, {label: 'Company Limitied by Guaran', value: 'CLBG'}, {label: 'Friendly Society', value: 'FS'},
                        {label: 'Political Party', value: 'PP'}, {label: 'Primay School', value: 'PS'}, {label: 'Private Charitable Trust', value: 'PCT'},
                        {label: 'Secondary School', value: 'SS'}, {label: 'Sport Body', value: 'SB'}, {label: 'Statutory or Charter Body', value: 'SORB'},
                        {label: 'Third-level Education Institution', value: 'TLEI'}, {label: 'Trade Union', value: 'TU'}, {label: 'Trust', value: 'Trust'},
                        {label: 'Unincorporated Association', value: 'UA'}
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
                    placeholder="Organisation Type       *"
                    placeholderStyle={{fontWeight:"bold",fontSize:25,color:"lightslategrey"}}
                    selectedLabelStyle={{fontWeight:"bold",fontSize:25,color:"#000", multiline:true}}
                    arrowSize={20}
                />
    </View>
    )}

const styles = StyleSheet.create({
    DDstyle:{
        marginBottom:2,
      },
   
    
  

});
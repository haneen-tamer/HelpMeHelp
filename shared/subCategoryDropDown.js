import React from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity , ScrollView} from 'react-native';
import { globalStyles } from './globalStyles';
import DropDownPicker from 'react-native-dropdown-picker';


export default function SubCategoryPicker({onChangeSubCatgory,value}){

    
    return(

        <View style={styles.DDstyle}>
        <DropDownPicker
                    items={[
                        {label: 'support for non-arabic speaking immigrant students', value: 'support for non-arabic speaking immigrant students'},
                        {label: 'social protection', value: 'social protection'}, {label: 'administration and management', value: 'administration and management'}, 
                        {label: 'human rights awareness', value: 'human rights awareness'}, {label: 'support for development of technical skills', value: 'support for development of technical skills'}, {label: 'youth empowerment', value: 'youth empowerment'},
                        {label: 'environmentalism', value: 'environmentalism'}, {label: 'economic development', value: 'economic development'}, {label: 'family care', value: 'family care'},
                        {label: 'community development', value: 'community development'}, {label: 'social assistance', value: 'social assistance'}, {label: 'child and maternal welfare', value: 'child and maternal welfare'},
                        {label: 'cultural', value: 'cultural'}, {label: 'health activities', value: 'health activities'}, {label: 'population development', value: 'population development'},
                        {label: 'disabled Persons and Special Groups Welfare', value: 'disabled Persons and Special Groups Welfare'}, {label: 'agricultural development', value: 'agricultural development'}, {label: 'educational activities', value: 'educational activities'},   
                    ]}
                    containerStyle={{height: '4.5%',width:'84%',paddingLeft:15,paddingTop:10}}
                    style={{backgroundColor: 'lightgrey', borderColor:"#64CA80",
                    borderWidth:1.5}}
                    itemStyle={{
                        justifyContent: 'flex-start'
                        
                    }}
                    labelStyle={{fontSize:20,color:"#000"}}
                    dropDownStyle={{backgroundColor: '#fafafa'}}
                    onChangeItem={item =>{ onChangeSubCatgory(item.label)}}
                    placeholder={value}
                    placeholderStyle={{fontWeight:"bold",fontSize:25,color:"lightslategrey"}}
                    selectedLabelStyle={{fontWeight:"bold",fontSize:25,color:"#000"}}
                    arrowSize={20}
                    // "Category                       *"
                />
    </View>
    )}

const styles = StyleSheet.create({
    DDstyle:{
        marginBottom:2,
      },
   
    
  

});


import React from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity , ScrollView} from 'react-native';
import { globalStyles } from './globalStyles';
import DropDownPicker from 'react-native-dropdown-picker';


export default function GovernoratePicker({onChange,value}){

    
    return(

        <View style={styles.DDstyle}>
        <DropDownPicker
          items={[
              {label: 'Cairo', value: 'Cairo'}, {label: 'Alexandria', value: 'Alexandria'}, {label: 'Giza', value: 'Giza'},
              {label: 'Aswan', value: 'Aswan'}, {label: 'Asyut', value: 'Asyut'}, {label: 'Beheira', value: 'Beheira'},
              {label: 'Bein Suef', value: 'Bein Suef'}, {label: 'Dakahlia', value: 'Dakahlia'}, {label: 'Damietta', value: 'Damietta'},
              {label: 'Faiyum', value: 'Faiyum'}, {label: 'Ghariba', value: 'Ghariba'}, {label: 'Ismailia', value: 'Ismailia'},
              {label: 'Kafr El Sheikh', value: 'Kafr El Sheikh'}, {label: 'Luxor', value: 'Luxor'}, {label: 'Matruh', value: 'Matruh'},
              {label: 'Minya', value: 'Minya'}, {label: 'Qalyubia', value: 'Qalyubia'}, {label: 'Qena', value: 'Qena'},
              {label: 'Red Sea', value: 'Red Sea'}, {label: 'Sharqia', value: 'Sharqia'}, {label: 'Sohag', value: 'Sohag'},
              {label: 'South Sinai', value: 'South Sinai'},{label: 'Suez', value: 'Suez'}
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
          selectedLabelStyle={{fontWeight:"bold",fontSize:25,color:"#000"}}
          arrowSize={20}
        //   "Choose Governorate    *"
      />
    </View>
    )}

const styles = StyleSheet.create({
    DDstyle:{
        marginBottom:2,
      },
   
    
  

});
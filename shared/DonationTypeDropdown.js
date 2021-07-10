import React from 'react';
import { StyleSheet, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';


export default function DonationTypeDropdown({onChange,value}){

    
    return(

        <View style={styles.DDstyle}>
        <DropDownPicker
          items={[
              {label: 'Money', value: 'Money'},{label: 'Clothes', value: 'Clothes'},{label: 'Food', value: 'Money'},
              {label: 'Blood', value: 'Blood'},{label: 'Other', value: 'Other'}, 
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
      />
    </View>
    )}

const styles = StyleSheet.create({
    DDstyle:{
        marginBottom:2,
        paddingBottom: 40,
      },
   
    
  

});
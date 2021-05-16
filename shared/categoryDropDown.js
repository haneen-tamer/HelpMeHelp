import React from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity , ScrollView} from 'react-native';
import { globalStyles } from './globalStyles';
import DropDownPicker from 'react-native-dropdown-picker';


export default function CategoryPicker({onChangeCatgory,onChangeSubCatgory}){

    
    return(

        <View style={styles.DDstyle}>
        <DropDownPicker
                    items={[
                        {label: 'Advocacy,Law,Politics', value: 'Law',untouchable:true}, {label: 'Health', value: 'Health',untouchable:true,parent:'na'}, {label: 'Arts, Culture, Media', value: 'Art',untouchable:true},
                        {label: 'International', value: 'International',untouchable:true}, {label: 'Professional, Vocational', value: 'Professional',untouchable:true}, {label: 'Recreation, Sports', value: 'Sports',untouchable:true},
                        {label: 'Religion', value: 'Religion',untouchable:true}, {label: 'Education, Research', value: 'Education',untouchable:true}, {label: 'Local Development, Housing', value: 'Housing',untouchable:true},
                        {label: 'Social Services', value: 'SS',untouchable:true}, {label: 'Philanthropy, Voluntarism', value: 'Voluntarism',untouchable:true}, {label: 'Environment', value: 'Environment',untouchable:true},
                        
                        {label: 'Advocacy', value: 'Advocacy',parent:'Law'}, {label: 'Civil and human rights', value: 'HR',parent:'Law'}, {label: 'Legal services', value: 'LS',parent:'Law'}, {label: 'Politics', value: 'Politics',parent:'Law'},

                        {label: 'Arts', value: 'a',parent:'Art'}, {label: 'Heritage and visitor attractions', value: 'HAVA',parent:'Art'}, {label: 'Media, Film', value: 'Media',parent:'Art'},{label: 'Museums and libraries', value: 'Museums',parent:'Art'},

                        {label: 'Addiction Support', value: 'AS',parent:'Health'}, {label: 'Health services and health promotion', value: 'HSAHP',parent:'Health'}, {label: 'Hospices', value: 'Hospices',parent:'Health'},
                        {label: 'Hospitals', value: 'Hospitals',parent:'Health'},{label: 'Mental health services', value: 'MHS',parent:'Health'},{label: 'Residential mental health services', value: 'RMHS',parent:'Health'},{label: 'Residential care centres', value: 'RCC',parent:'Health'},

                        {label: 'International affiliation', value: 'IA',parent:'International'}, {label: 'International development', value: 'ID',parent:'International'},

                        {label: 'Chambers of commerce', value: 'COC',parent:'Professional'}, {label: 'Professional or sector representative bodies', value: 'POSR',parent:'Professional'}, {label: 'Trade unions, employer organisations', value: 'TUEO',parent:'Professional'},

                        {label: 'Agricultural fairs', value: 'AF',parent:'Sports'}, {label: 'Recreational clubs, societies', value: 'RCS',parent:'Sports'}, {label: 'Sports organisations', value: 'SO',parent:'Sports'},
                        
                        {label: 'Diocesan, parishes', value: 'DP',parent:'Religion'}, {label: 'Places of worship', value: 'POW',parent:'Religion'}, {label: 'Religious associations', value: 'RA',parent:'Religion'},

                        {label: 'Adult and continuing education', value: 'AOCE',parent:'Education'}, {label: 'Education support', value: 'ES',parent:'Education'}, {label: 'Pre-Primary education', value: 'PPE',parent:'Education'},
                        {label: 'Primary education', value: 'PE',parent:'Education'},{label: 'Research', value: 'Research',parent:'Education'},{label: 'Secondary education', value: 'SE',parent:'Education'},

                        {label: 'Job creation', value: 'JC',parent:'Housing'}, {label: 'Local development', value: 'LD',parent:'Housing'}, {label: 'Sheltered housing', value: 'Sh',parent:'Housing'},
                        {label: 'Social enterprise', value: 'SE',parent:'Housing'},{label: 'Social housing', value: 'SH',parent:'Housing'},

                        {label: 'Emergency relief services', value: 'ERS',parent:'SS'}, {label: 'Family support services', value: 'FSS',parent:'SS'}, {label: 'Homelessness services', value: 'HS',parent:'SS'},{label: 'Youth services', value: 'YS',parent:'SS'},
                        {label: 'Pre-school childcare', value: 'PC',parent:'SS'},{label: 'Services for older people', value: 'SFOP',parent:'SS'},{label: 'Services for people with disabilities', value: 'SFPWD',parent:'SS'},{label: 'Services for Travellers and ethnic minorities', value: 'SFTAEM',parent:'SS'},
                        
                        {label: 'Fund-raising', value: 'FR',parent:'Voluntarism'}, {label: 'Philanthropy', value: 'Philanthropy',parent:'Voluntarism'}, {label: 'Voluntarism', value: 'voluntarisms',parent:'Voluntarism'},

                        {label: 'Animal welfare', value: 'AW',parent:'Environment'}, {label: 'Environmental enhancement', value: 'EE',parent:'Environment'}, {label: 'Environmental sustainability', value: 'ES',parent:'Environment'}, {label: 'Group water schemes', value: 'GWS',parent:'Environment'}
                    ]}
                    containerStyle={{height: '4.5%',width:'84%',paddingLeft:15,paddingTop:10}}
                    style={{backgroundColor: 'lightgrey', borderColor:"#64CA80",
                    borderWidth:1.5}}
                    itemStyle={{
                        justifyContent: 'flex-start'
                        
                    }}
                    labelStyle={{fontSize:20,color:"#000"}}
                    dropDownStyle={{backgroundColor: '#fafafa'}}
                    onChangeItem={item =>{ onChangeCatgory(item.parent.label),onChangeSubCatgory(item.label)}}
                    placeholder="Category                       *"
                    placeholderStyle={{fontWeight:"bold",fontSize:25,color:"lightslategrey"}}
                    selectedLabelStyle={{fontWeight:"bold",fontSize:25,color:"#000"}}
                    arrowSize={20}
                />
    </View>
    )}

const styles = StyleSheet.create({
    DDstyle:{
        marginBottom:2,
      },
   
    
  

});
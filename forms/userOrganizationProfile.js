import { StatusBar } from 'expo-status-bar';
import React ,{ useState } from 'react';
import { StyleSheet, Text, View , Image, ScrollView,FlatList,TouchableOpacity} from 'react-native';
import Header from '../shared/header';
import {globalStyles} from '../shared/globalStyles'
import CampaignItem from '../shared/CampaignItem'


export default function App({navigation}) {
    const [campgin, setCampagin] = useState([
        {name:'Ramdan Iftar',organizationName:'Resala',start:'8/4/2021',end:'10/4/2021',class:'A',subClass:['dd','dddd'],progress:7,target:7,status:'completed',id:'1',month:'April',adress:'fhifhoiojfoije',descreption:'kskskskksks',donationType:'clothes',userStatus:'Approved'},
        {name:'qqq',organizationName:'ggg',start:'8/4/2021',end:'10/4/2021',class:'B',subClass:['dd','dddd'],progress:1,target:7,status:'ongoing',id:'2',month:'April',adress:'fhifhoiojfoije',descreption:'kskskskksks',donationType:'clothes',userStatus:'Approved'},
        {name:'qqq',organizationName:'ggg',start:'8/4/2021',end:'10/4/2021',class:'B',subClass:['dd','dddd'],progress:3,target:7,status:'completed',id:'3',month:'April',adress:'fhifhoiojfoije',descreption:'kskskskksks',donationType:'clothes',userStatus:'Approved'},
        {name:'qqq',organizationName:'ggg',start:'8/4/2021',end:'10/4/2021',class:'B',subClass:['dd','dddd'],progress:4,target:7,status:'ongoing',id:'4',month:'April',adress:'fhifhoiojfoije',descreption:'kskskskksks',donationType:'clothes',userStatus:'Approved'},
        {name:'qqq',organizationName:'ggg',start:'8/4/2021',end:'10/4/2021',class:'B',subClass:['dd','dddd'],progress:5,target:7,status:'completed',id:'5',month:'April',adress:'fhifhoiojfoije',descreption:'kskskskksks',donationType:'clothes',userStatus:'Approved'},
      ])
  return (
      <ScrollView>
   <View style={styles.container}>
       <View style={globalStyles.columnAlginStyle}>

       <View style={globalStyles.imageAlginStyle}>

        <TouchableOpacity>
                <Image
                style={globalStyles.topIconsStyle}
                source={require('../images/chat.png')}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <Image
                style={globalStyles.topIconsStyle}
                source={require('../images/share.png')}/>
            </TouchableOpacity>

    </View>

        <Image
            style={globalStyles.headerImageStyle}
            source={require('../images/CampaignImage.png')}
        />
        <Text style={globalStyles.headerStyle}>{navigation.getParam('Name')}</Text>
        <View style={globalStyles.lineStyle}></View>
        
        <View style={globalStyles.columnAlginStyle}>

            <View style={globalStyles.iconTextStyle}>
                <Image
                style={globalStyles.bottomiconsStyle}
                source={require('../images/information.png')}
                />
            <Text style={globalStyles.smalllHeaderStyle}>Organization Type</Text>
            
            </View>
            <Text style={globalStyles.smallTextStyle}>{navigation.getParam('organizationType')}</Text>

            <View style={globalStyles.iconTextStyle}>
                <Image
                style={globalStyles.bottomiconsStyle3}
                source={require('../images/goal.png')}
                />
            <Text style={globalStyles.smalllHeaderStyle}>Purpose</Text>
            
            </View>
            <Text style={globalStyles.smallTextStyle}>{navigation.getParam('purpose')}</Text>

            <View style={globalStyles.iconTextStyle}>
                <Image
                style={globalStyles.bottomiconsStyle2}
                source={require('../images/idea.png')}
                />
            <Text style={globalStyles.smalllHeaderStyle}>Descreption</Text>
            
            </View>
            <Text style={globalStyles.smallTextStyle}>{navigation.getParam('descreption')}</Text>

            <View style={globalStyles.iconTextStyle}>
                <Image
                style={globalStyles.bottomiconsStyle}
                source={require('../images/website.png')}
                />
            <Text style={globalStyles.smalllHeaderStyle}>Website</Text>
            
            </View>
            <Text style={globalStyles.smallTextStyle}>{navigation.getParam('website')}</Text>
            <View style={globalStyles.iconTextStyle}>
                <Image
                style={globalStyles.bottomiconsStyle}
                source={require('../images/social-media.png')}
                />
            <Text style={globalStyles.smalllHeaderStyle}>Socail Media</Text>
            
            </View>

            <View style={styles.rowAlginStyle}>

                <View style={globalStyles.iconTextStyle}>
                    <Image
                    style={globalStyles.bottomiconsStyle}
                    source={require('../images/facebook.png')}
                    />
            
            </View>
            <Text style={globalStyles.smalllHeaderStyle}>{navigation.getParam('facebook')}</Text>

            <View style={globalStyles.iconTextStyle}>
                <Image
                style={globalStyles.bottomiconsStyle}
                source={require('../images/instagram.png')}
                />
            </View>

            <Text style={globalStyles.smalllHeaderStyle}>{navigation.getParam('instagram')}</Text>

            <View style={globalStyles.iconTextStyle}>
                <Image
                style={globalStyles.bottomiconsStyle}
                source={require('../images/twitter.png')}
                />
            </View>
            <Text style={globalStyles.smalllHeaderStyle}>{navigation.getParam('twitter')}</Text>
            </View>
            <View style={globalStyles.iconTextStyle}>
                <Image
                style={globalStyles.bottomiconsStyle2}
                source={require('../images/idea.png')}
                />
            <Text style={globalStyles.smalllHeaderStyle}>Hotline</Text>
            
            </View>
            <Text style={globalStyles.smallTextStyle}>{navigation.getParam('hotline')}</Text>

            <View style={globalStyles.iconTextStyle}>
            <Image
            style={globalStyles.bottomiconsStyle}
            source={require('../images/information.png')}
            />
           <Text style={globalStyles.smalllHeaderStyle}> Tags</Text>
        
        </View>
        
        <View style={globalStyles.rowAlginStyle}>
            <Text style={globalStyles.campaignClassStyle}>{navigation.getParam('class')}</Text>
            <Text style={globalStyles.campaignClassStyle}>{navigation.getParam('subClass')}</Text>
        </View>

      
            {
            <FlatList
                keyExtractor={(item) => item.id} 
                data={campgin} 
                renderItem={({ item }) => ( 
                    navigation.getParam('Name')===item.organizationName &&
                <TouchableOpacity  onPress={()=>navigation.navigate('userCampaignDetails',item)}>
                <CampaignItem item={item}/>
                </TouchableOpacity>
                )}
            />
                }
        
        </View>
   </View>
   </View>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius:8,
    borderWidth:2,
    borderColor:'#64CA80',
    justifyContent:"flex-start"
  },
  rowAlginStyle:{
    flexDirection:'row',
    alignContent:"space-between",
    margin:10,
    paddingLeft:10
  }
});

import { StatusBar } from 'expo-status-bar';
import React ,{ useState,useEffect } from 'react';
import { StyleSheet, Text, View , Image, ScrollView,FlatList,TouchableOpacity} from 'react-native';
import Header from '../shared/header';
import {globalStyles} from '../shared/globalStyles'
import CampaignItem from '../shared/CampaignItem'


export default function App({navigation}) {
    const [campgin, setCampagin] = useState(null);
    const [data,setData]=useState(null);
    const [found,setFound]=useState(false);
    const [found2,setFound2]=useState(false);
    const [website,setWebsite]=useState(true)
    const [hotline,setHotline]=useState(true)
    const [links,setLinks]=useState(true)
    let username=navigation.getParam('orgOwner');

    useEffect(() => {
        //getDetails();
       
          fetch("http://10.0.2.2:8080/OrgProfile/"+username, {
            method: 'GET',
        })
        .then(res=>res.json())
        .then(json => {
          setData(json)
          setFound(true);
        })
        .catch((error) => {
            console.error(error);
        });
        
      }, []);

      useEffect(() => {
        setFound2(true);
       // console.log("here")
          fetch("http://10.0.2.2:8080/orgCamp/"+username, {
            method: 'GET',
        })
        .then(res=>res.json())
        .then(json => {
          setCampagin(json)  
        })
        .catch((error) => {
            console.error(error);
        });
      }, []);
  return (
<ScrollView>
   <View style={styles.container}>
   {found &&
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
        
        <Text style={globalStyles.headerStyle}>{data.name}</Text>
        <View style={globalStyles.lineStyle}></View>
        
        <View style={globalStyles.columnAlginStyle}>

            <View style={globalStyles.iconTextStyle}>
                <Image
                style={globalStyles.bottomiconsStyle}
                source={require('../images/information.png')}
                />
            <Text style={globalStyles.smalllHeaderStyle}>Organization Type</Text>
            
            </View>
            <Text style={globalStyles.smallTextStyle}>{data.organizationType}</Text>

            <View style={globalStyles.iconTextStyle}>
                <Image
                style={globalStyles.bottomiconsStyle3}
                source={require('../images/goal.png')}
                />
            <Text style={globalStyles.smalllHeaderStyle}>Purpose</Text>
            
            </View>
            <Text style={globalStyles.smallTextStyle}>{data.purpose}</Text>

            <View style={globalStyles.iconTextStyle}>
                <Image
                style={globalStyles.bottomiconsStyle2}
                source={require('../images/idea.png')}
                />
            <Text style={globalStyles.smalllHeaderStyle}>Descreption</Text>
            
            </View>
            <Text style={globalStyles.smallTextStyle}>{data.description}</Text>

            {website &&
          
            <View style={globalStyles.iconTextStyle}>
                <Image
                style={globalStyles.bottomiconsStyle}
                source={require('../images/website.png')}
                />
            <Text style={globalStyles.smalllHeaderStyle}>Website</Text>
            </View>
}
            {website &&
            <Text style={globalStyles.smallTextStyle}>{data.website}</Text>
           }

            <View style={globalStyles.iconTextStyle}>
                <Image
                style={globalStyles.bottomiconsStyle}
                source={require('../images/social-media.png')}
                />
            <Text style={globalStyles.smalllHeaderStyle}>Socail Media</Text>
            
            </View>
            {/* <View style={styles.socailStyle}>
          {
             data.socialMedia.map(links=><TextInputCard value={links} allow_pass={false} allow_multi={true} allow_edit={false}/>)
           } */}
             </View>
            {/* <View style={styles.rowAlginStyle}>

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
           
            
            </View> */}
            {hotline &&
              <View style={globalStyles.iconTextStyle}>
                  <Image
                  style={globalStyles.bottomiconsStyle2}
                  source={require('../images/idea.png')}
                  />
              <Text style={globalStyles.smalllHeaderStyle}>Hotline</Text>
              </View>
            }
            {hotline &&
            <Text style={globalStyles.smallTextStyle}>{data.hotline.toString()}</Text>
            }
            <View style={globalStyles.iconTextStyle}>
            <Image
            style={globalStyles.bottomiconsStyle}
            source={require('../images/information.png')}
            />
           <Text style={globalStyles.smalllHeaderStyle}> Tags</Text>
        
        </View>
        
        <View style={globalStyles.rowAlginStyle}>
            <Text style={globalStyles.campaignClassStyle}>{data.category}</Text>
            <Text style={globalStyles.campaignClassStyle}>{data.subCategory}</Text>
        </View>


            {found2 &&
            // <FlatList
            // // keyExtractor={(item) => item.id} 
            // data={donationCampaigns} 
            // horizontal={true}
            // renderItem={({ item }) => ( 
            //     <TouchableOpacity style={styles.container} 
            //     onPress={()=>navigation.navigate('userCampaignDetails',item)}>
            //     <CampaignItem item={item}/>
            //     </TouchableOpacity>
            // )}
            // />
            <FlatList
                keyExtractor={(item) => item.id} 
                data={campgin} 
                renderItem={({ item }) => (
                <TouchableOpacity  onPress={()=>navigation.navigate('userCampaignDetails',item)}>
               <CampaignItem item={item} addUser={false} navigation={navigation}/>
                </TouchableOpacity>
                )}
            />
            
                }
        
        </View>
//    </View>
}
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
  },
  socailStyle:{
    paddingLeft:22,
    marginBottom:70
  },
});

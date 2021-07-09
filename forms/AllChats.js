import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import ChatItem from '../shared/ChatItem';
import Header from '../shared/header';

export default function chat({navigation}) {
    let [chatInput, setChatInput] = useState("");
    const [username,setUsername]=useState( navigation.dangerouslyGetParent().getParam('User_Username'));
    let [chatItemList, setChatItemList] = useState([]);//useState<chatItem[]>([]);
    let[refresh,setRefresh]=useState(false);
    //let username = navigation.getParam('username');
    const get_allchats=()=>{
      console.log(username);
      fetch("http://10.0.2.2:8080/allchats/"+username,{
          method:"get"
      })
        .then(res=>res.json())
        .then(json =>{
          for(let i=0;i<json.length;i++)
          {
            chatItemList.push(
            {
              id: Math.random().toString(36).substring(7),
              with: json[i].Username1,
              text: "haha"
            });
          }
          //console.log(chatItemList);
          setRefresh(true);
        })
    }

    useEffect(()=>{
      get_allchats();
    }, []);
    return (
    <View style={Styles.container}>
      {
        refresh &&
      <FlatList
      style={Styles.flatListStyle}
      keyExtractor={(item) => item.id} 
      data={chatItemList}//.sort((a, b) => b.timeStamp - a.timeStamp)} 
      renderItem={({ item }) => (
          <TouchableOpacity 
          onPress={()=>navigation.navigate('chat',{username:{username},orgOwner:item.with})}>
          <View style={Styles.chatContainer}>
          <Text style={Styles.boldText}>{item.with}</Text>
          <Text style={Styles.smallItalicText}>{item.text}</Text>
          </View>
          </TouchableOpacity> 
      )}
      />}
    </View>
    );
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        backgroundColor: '#fff',
        // paddingTop:15,
        // alignItems:'flex-start'
      },
      chatContainer:{
          flex:1,
        borderColor: '#AACCDD',
        borderWidth:1,
        padding: 5,
        paddingStart:10,
        paddingBottom: 7,
        marginTop:7,
      },
      flatListStyle:{
        // justifyContent:'flex-start',
        // flex:7,
        top:2,
        padding:10
      },
      boldText: {
        fontSize: 18,
        fontWeight:'bold'
      },
      smallItalicText: {
        fontSize: 14,
        fontStyle: "italic",
      },
});
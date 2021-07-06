import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import ChatItem from '../shared/ChatItem';
import Header from '../shared/header';

export default function chat({navigation}) {
    let [chatInput, setChatInput] = useState("");
    let [chatItemList, setChatItemList] = useState([
        {id:'1', text:'hi', with:'raghda'},
        {id:'2', text:'lay lay', with:'hagar'},
        {id:'3', text:'bye', with:'yomna'},
        {id:'4', text:'bye', with:'sara'}
    ]);//useState<chatItem[]>([]);
    let username = navigation.getParam('username');
    return (
    <View style={Styles.container}>
      
      <FlatList
      style={Styles.flatListStyle}
      keyExtractor={(item) => item.id} 
      data={chatItemList.sort((a, b) => b.timeStamp - a.timeStamp)} 
      renderItem={({ item }) => (
          <TouchableOpacity 
          onPress={()=>navigation.navigate('chat',{username:{username}})}>
          <View style={Styles.chatContainer}>
          <Text style={Styles.boldText}>{item.with}</Text>
          <Text style={Styles.smallItalicText}>{item.text}</Text>
          </View>
          </TouchableOpacity> 
      )}
      />
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
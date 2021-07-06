import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, FlatList} from 'react-native';
import ChatItem from '../shared/ChatItem';
import {globalStyles} from '../shared/globalStyles';

export default function chat({navigation}) {
    let [chatInput, setChatInput] = useState("");
    let [chatItemList, setChatItemList] = useState([
        {id:'1', text:'hi', timeStamp:new Date('July 6, 2021 01:10:00'), by:'haneen'},
        {id:'2', text:'lay lay', timeStamp:new Date('July 6, 2021 01:11:00'), by:'hagar'},
        {id:'3', text:'bye', timeStamp:new Date('July 6, 2021 01:12:00'), by:'haneen'},
        {id:'4', text:'bye', timeStamp:new Date('July 6, 2021 01:13:00'), by:'hagar'}
    ]);//useState<chatItem[]>([]);
    let username = navigation.getParam('username');
    return (
    <View style={Styles.container}>
      
      <FlatList
      style={Styles.flatListStyle}
      inverted
      keyExtractor={(item) => item.id} 
      data={chatItemList.sort((a, b) => b.timeStamp - a.timeStamp)} 
      renderItem={({ item }) => ( 
        <ChatItem item= {item} username={username}/>
      )}
      />
      <View style={Styles.sendSection}>
        <TextInput
          style={Styles.chatTextInput}
          value={chatInput}
          onChangeText={(text) => setChatInput(text)}
        ></TextInput>
        <Button
          title="Send"
          onPress={() => {
            setChatItemList([
              ...chatItemList,
              {
                id: Math.random().toString(36).substring(7),
                text: chatInput,
                timeStamp: Date.now(),
                by: username,
              },
            ]);
            setChatInput("");
          }}
        ></Button>
      </View>
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
      flatListStyle:{
        // justifyContent:'flex-start',
        // flex:7,
        top:0,
        padding:10,
        margin:10
      },
    sendSection: {
        // flex:1,
        flexDirection: "row",
        margin: 15,
        bottom: 0
      },
      chatTextInput: {
        marginRight: 5,
        borderColor: "rgba(52, 52, 52, 0.8)",
        borderWidth: 1,
        borderRadius: 4,
        flexGrow: 1,
        fontSize: 18,
      },
});
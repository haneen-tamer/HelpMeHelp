import React, { useState ,useEffect} from 'react';
import { StyleSheet, ScrollView, TextInput, View, Button, FlatList} from 'react-native';
import io from "socket.io-client";
import ChatItem from '../shared/ChatItem';
import Header from '../shared/header';

export default function chat({navigation}) {
    let [chatInput, setChatInput] = useState("");
    let [chatItemList, setChatItemList] = useState([
        {id:'1', text:'hi', timeStamp:new Date('July 6, 2021 01:10:00'), by:'haneen'},
        {id:'2', text:'lay lay', timeStamp:new Date('July 6, 2021 01:11:00'), by:'hagar'},
        {id:'3', text:'bye', timeStamp:new Date('July 6, 2021 01:12:00'), by:'haneen'},
        {id:'4', text:'bye', timeStamp:new Date('July 6, 2021 01:13:00'), by:'hagar'}
    ]);//useState<chatItem[]>([]);
    let username = navigation.getParam('username');
    let [state,setState]=useState({chatMessage: "",chatMessages: []});
    const socket = io("http://192.168.100.98:8080");
    const connect=()=>{
      socket.on("chat message", msg => {
        setState({ chatMessages: [...state.chatMessages, msg] });
      });
    }
    connect();

     const submitChatMessage=()=> {
      socket.emit("chat message", state.chatMessage);
      
    }
    // componentDidMount() 
    // { 
    //   this.socket = io("http://192.168.1.13:3000");
    // }
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
          value={state.chatMessage}
          onSubmitEditing={() => submitChatMessage()}
          onChangeText={chatMessage => {
            setState({ chatMessage });
          }}
        ></TextInput>
        <Button
          title="Send"
          onPress={() => {
            setChatItemList([
              ...chatItemList,
              {
                id: Math.random().toString(36).substring(7),
                text: state.chatMessage,
                timeStamp: Date.now(),
                by: username,
              },
            ]);
            //setChatInput("");
            setState({ chatMessage: "" });
            //state.chatMessage="";
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
        paddingTop:25,
        // alignItems:'flex-start'
      },

      flatListStyle:{
        // justifyContent:'flex-start',
        // flex:7,
        top:2,
        padding:10
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
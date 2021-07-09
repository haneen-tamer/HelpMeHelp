import React, { useState ,useEffect} from 'react';
import { StyleSheet, ScrollView, TextInput, View, Button, FlatList} from 'react-native';
import io from "socket.io-client";
import ChatItem from '../shared/ChatItem';
import Header from '../shared/header';

export default function chat({navigation}) {
    let [chatInput, setChatInput] = useState("");
    let [chatItemList, setChatItemList] = useState([]);
        /*{id:'1', text:'hi', timeStamp:new Date('July 6, 2021 01:10:00'), by:'haneen'},
        {id:'2', text:'lay lay', timeStamp:new Date('July 6, 2021 01:11:00'), by:'hagar'},
        {id:'3', text:'bye', timeStamp:new Date('July 6, 2021 01:12:00'), by:'haneen'},
        {id:'4', text:'bye', timeStamp:new Date('July 6, 2021 01:13:00'), by:'hagar'}*/
    //useState<chatItem[]>([]);
    //let username = navigation.getParam('username');
    const [username,setUsername]=useState( navigation.dangerouslyGetParent().getParam('User_Username'));
    const [orgOwner,setOrgOwner]=useState(navigation.getParam('orgOwner'));
    let [refresh, setRefresh] = useState(false);
    let [refresh1, setRefresh1] = useState(false);
    let [global_socket,set_global_Socket]=useState(null);
    //const socket = io("http://192.168.100.98:8080");
    let [chatID, setchatID] = useState(null);
    let [chatType, setchatType] = useState(null);

    const connect=()=>{
      let socket= io("http://192.168.100.98:8080");
      set_global_Socket(socket);
      socket.on("chat message", msg => {
        
        chatItemList.push(
          {
            id: Math.random().toString(36).substring(7),
            text: msg,
            timeStamp: Date.now(),
            by: 'yoyo',
          }
        );
        //console.log(chatItemList);
        //console.log(msg+"recieve");
      });
    }
    const submitChatMessage=()=> {
      global_socket.emit("chat message", chatInput);
      setChatInput("");
    }

    const set_chatType=()=>{
      if(orgOwner.substring(0,4)=="Org_")
      {
        setchatType("OU");
        //setRefresh1(true);
      }
      else{
        setchatType("UU");
        //setRefresh1(true);
      }
      
    }
    const get_chatID=()=>{
      return fetch("http://10.0.2.2:8080/getChatID/"+username+"/"+orgOwner+"/"+chatType,{
          method:"get"
      })
        /*.then(res=>res.json())
        .then(json =>{
          setchatID(json.Chat_ID);
          //setRefresh(true);  
        })*/
          
    }
    const get_messages=()=>{
      console.log("mm"+chatID);
      console.log("kkkk"+chatType);
      return fetch("http://10.0.2.2:8080/oldChat/"+chatID+"/"+chatType,{
          method:"get"
      })
        /*.then(res=>res.json())
        .then(json =>{
          //console.log("da5l1"+json.length);
          console.log("mm"+chatID);
          console.log("kkkk"+chatType);
          for(let i=0;i<json.length;i++)
          {
            console.log("da5l");
            chatItemList.push(
              {
                id: Math.random().toString(36).substring(7),
                text: json[i].Text,
                timeStamp: json[i].Timestamp,
                by: json[i].Sender_username,
              });
          }
          //setRefresh1(true);
        })*/
    }
    async function order() {
      const res=await get_chatID();
      const json=await res.json();
      //console.log(json);
      setchatID(json.Chat_ID);
      const messages= await get_messages();
      //console.log(messages);
      const json2= await messages.json();
      //console.log(json2);
      for(let i=0;i<json2.length;i++)
      {
        console.log("da5l");
        chatItemList.push(
          {
            id: Math.random().toString(36).substring(7),
            text: json2[i].Text,
            timeStamp: json2[i].Timestamp,
            by: json2[i].Sender_username,
          });
       // if(i==json2.length)
       // {
         // setRefresh(true);
       // }
      }
      setRefresh1(true);
    }
    /*async function call_all(){
      let first= await set_chatType();
      console.log(chatType);
      let second= await get_chatID();
      console.log(chatID);
      let third=await get_messages();
      console.log(chatItemList);
    }*/
    
    
    /*useEffect(()=>{
      connect();
      //call_all().then(console.log);
      set_chatType();
      console.log(chatType);
      if(refresh1){get_chatID()};
      console.log(chatID);
      if(refresh){get_messages();}
      console.log(chatItemList);
      //get_messages();
    },[]);*/
    /*function handleSubmit(event) {
      event.preventDefault();
    }*/

    useEffect(()=>{
      connect();
      set_chatType();
      order();
    },[]);

    return (
    <View style={Styles.container}>
      {
        refresh1 && //refresh && //refresh2 &&
      console.log(chatItemList),
      //console.log(chatType),
      //console.log(chatID),
      //console.log(chatType),
      <FlatList
      style={Styles.flatListStyle}
      inverted
      keyExtractor={(item) => item.id} 
      data={chatItemList}//.sort((a, b) => b.timeStamp - a.timeStamp)} 
      renderItem={({ item }) => ( 
        <ChatItem item= {item} username={username}/>
      )}
      />}
      <View style={Styles.sendSection}>
        <TextInput
          style={Styles.chatTextInput}
          value={chatInput}
          onChangeText={text => {setChatInput(text);
        }}
        ></TextInput>
        <Button
          title="Send"
          onPress={() => {
            chatItemList.push(
              {
                id: Math.random().toString(36).substring(7),
                text: chatInput,
                timeStamp: Date.now(),
                by: username,
              },
            );
            //setRefresh(true);
            //console.log(chatItemList);
            //console.log(chatInput+"sent");
            
            submitChatMessage();
            
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
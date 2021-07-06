import React,{ useState, useEffect }  from 'react';
import {StyleSheet,View,Text, Animated} from 'react-native';


export default function ChatItem({item, username}){
//     let [animatedValue] = useState(new Animated.Value(0));
//   useEffect(() => {
//     Animated.timing(animatedValue, {
//       toValue: 1,
//       duration: 400,
//       easing: (number) => Easing.ease(number),
//       useNativeDriver: true,
//     }).start();
//   });
return(
    <View
      style={[
        Styles.flatListItem,
        { borderColor: username == item.by ? '#64CA80' : '#AACCDD' },
        { alignSelf: username == item.by ? 'flex-end' : 'flex-start' },
        // { opacity: animatedValue },
        // { transform: [{ scale: animatedValue }] },
      ]}
    >
      <View style={Styles.chatItemHeader}>
        <Text style={Styles.smallItalicText}>
          {item.by} at {new Date(item.timeStamp).toLocaleTimeString()}
        </Text>
      </View>
      <Text style={Styles.chatText}>{item.text}</Text>
    </View>
);
};

const Styles = StyleSheet.create({
    flatListItem: {
        borderRadius: 10,
        borderWidth: 1,
        padding: 5,
        paddingBottom: 7,
        marginBottom: 7,
        marginLeft: 16,
        marginRight: 16,
        borderColor: '#64CA80',
      },
      smallItalicText: {
        fontSize: 14,
        fontStyle: "italic",
        alignSelf: "center",
      },
      chatText: {
        fontSize: 18,
      },

});
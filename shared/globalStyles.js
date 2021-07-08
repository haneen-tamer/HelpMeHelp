import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({

    greenButtonStyle:{
        width: '30%',
        height: 50,
        elevation: 8,
        backgroundColor: "#64CA80",
        borderRadius: 10,
        paddingVertical: 10,
        margin:1
    },
    blueButtonStyle:{
        width: '30%',
        height: 50,
        elevation: 8,
        backgroundColor: '#AACCDD',
        borderRadius: 10,
        paddingVertical: 10,
        margin:1
    },
    blackButtonStyle:{
        width: '30%',
        height: 50,
        elevation: 8,
        backgroundColor: '#454545',
        borderRadius: 10,
        paddingVertical: 10,
        margin:1
    },
    textStyle:{
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
        paddingTop: 5,
      },
      campaignClassStyle: {
        // elevation: 8,
        backgroundColor: "#454545",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        fontSize: 18,
        color: "#fff",
        //fontWeight: "bold",
        alignSelf: "center",
        margin:20,
        textTransform: "uppercase",
        paddingBottom:5
      },
      campaignClassStyleBorder: {
        // elevation: 8,
        borderColor: "#454545",
        borderWidth:3,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        fontSize: 18,
        
        color: "#000",
        fontWeight: "bold",
        alignSelf: "center",
        margin:5,
        textTransform: "uppercase",
        paddingBottom:10
      },
      buttonstyle:{
        paddingRight:10,
        paddingLeft:10,
        alignItems:'center',
       flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop:40,
      },
      headerImageStyle:{
        width: 190,
        height: 190,
        alignSelf:'center',
      },
      headerStyle:{
        fontSize: 30,
        color: "#000",
        fontWeight: "bold",
        padding:5,
     //   paddingBottom:7
    },
    mediumHeaderStyle:{
      fontSize:27,
      fontWeight:"bold",
      paddingBottom:10,
      paddingLeft:5,
     // paddingTop:5,
      color:'#000'
  },
  smalllHeaderStyle:{
    fontSize:25,
    fontWeight:"bold",
    paddingBottom:10,
    paddingLeft:5,
    paddingRight:20,
   // paddingTop:5,
    color:'#000'
},
columnAlginStyle:{
  flexDirection:'column',
  padding:13,
},
lineStyle:{
  borderBottomColor: '#06A9F0',
  borderBottomWidth:3,
  paddingBottom:10
},
iconTextStyle:{
  flexDirection:'row',
  paddingBottom:5,
  justifyContent:"flex-start",
},
bottomiconsStyle:{
  width:30,
  height:30,
},
smallTextStyle:{
  fontSize:20,
  paddingBottom:20,
  marginLeft:40,
  color:'#000'
},
rowAlginStyle:{
  flexDirection:'row',
  alignContent:"space-between",
  //padding: 2,
},
bottomiconsStyle2:{
  width:37,
  height:37,
},
bottomiconsStyle3:{
  width:35,
  height:35,
},
 imageAlginStyle:{
  flex:1,
  flexDirection:'row',
  paddingBottom:5,
  justifyContent:"flex-end",
  alignContent:"space-between",

},
topIconsStyle:{
  width:50,
  height:50,
  margin:10,
 alignSelf:'center',
 padding:20
},
buttonAlignStyle:{
  paddingRight:10,
  paddingLeft:10,
  paddingBottom:10,
  alignItems:'center',
  flexDirection: 'row',
  justifyContent: 'space-around',
},
errorStyle:{
  fontSize:15,
  marginLeft:20,
  height:'95%',
  width:'85%',
  color:"red"
},
profileTextStyle:
{
  fontSize:25,
  fontWeight:"bold",
  alignSelf:"center",
  paddingTop:'5%',
  color:"#3CB371",
  marginBottom:'2%'
  
},
profileTitleStyle:{
  fontSize:15,
  color:'#000',
  paddingBottom:6,
  marginLeft:15,
  fontWeight:"bold",
  paddingTop:'2%'
  
  
  },
  profileImageborderStyle:
  {
    borderRadius:100,
    borderWidth:3,
    borderColor:'#AACCDD',
    alignSelf:"center",
    width:210,
    height:200,
    paddingBottom:10,
     paddingTop:2
  },
  RegitserdataStyle:{
    fontSize:25,
    fontWeight:"bold",
    color:'#000',
    backgroundColor:'lightgrey',
   // borderBottomWidth:1,
    margin:15,
    height:'65%',
    width:'80%',
    marginBottom:30,
    borderColor:"#64CA80",
    borderWidth:1
  },
});
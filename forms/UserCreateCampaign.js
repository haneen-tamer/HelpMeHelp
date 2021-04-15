import React ,{ useState } from 'react';
import { StyleSheet, View,Text,FlatList,TouchableOpacity} from 'react-native';
import CampaignItem from '../shared/CampaignItem'
import {globalStyles} from '../shared/globalStyles'

export default function UserCreateCampaign({navigation}){
    return(
        <View style={styles.container}>
            <Text style={globalStyles.textStyle}>Hello</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      flexDirection:'column',
    },
  });
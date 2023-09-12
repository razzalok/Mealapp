import React from 'react'
import { View,Text, StyleSheet } from 'react-native'

const Subtitle = ({children}) => {
  return (
    <View style={styles.subtitlecontainer}>
    <Text style={styles.subtitle}>{children}</Text>
  </View>
  )
}

export default Subtitle


const styles = StyleSheet.create({
    subtitle:{
      color:'#e2b497',
      fontSize:18,
      fontWeight:'bold',
      textAlign:'center'
    },
    subtitlecontainer:{
      padding:6,
      marginHorizontal:24,
      marginVertical:4,
      borderBottomColor:'#e2b497',
      borderBottomWidth:2,
    }
  });
  
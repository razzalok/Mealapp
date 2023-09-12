import React from 'react'
import { View,Text,StyleSheet } from 'react-native'

const List = ({data}) => {
  return (
    data.map((datapoint) => (
        <View key={datapoint} style={styles.listitem}>
            <Text style={styles.itemText}>{datapoint}</Text>
        </View>
      ))
  )
}

export default List


const styles=StyleSheet.create({
    listitem:{
        borderRadius:6,
        paddingHorizontal:8,
        paddingVertical:4,
        marginVertical:4,
        marginHorizontal:12,
        backgroundColor:'#e2b497',

    },
    itemText:{
        color:'#351401',
        textAlign:'center'
    }
})
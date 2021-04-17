import React from 'react'
import {View,Button, Text, StyleSheet, Image, Alert, TouchableOpacity} from 'react-native'


export default function CheckoutCounter({onItems}){
  return(
    <View style={styles.item}>
        <Text style={styles.txt} >ITEMS</Text>
        <View style={styles.items} >
          <Text style={styles.txt2} >{onItems}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  items:{
    borderRadius:30,
    width:40,
    height:40,
    position: 'relative',
    backgroundColor:'#5A5B77',
    left:80,
    bottom:30
   },
   item:{
    position:'absolute',
    bottom:550,
    left:20
  },
   txt:{
     color:'white',
     fontWeight:'bold',
     fontSize:20
   },
   txt2:{
     color:'white',
     fontWeight:'bold',
     fontSize:20,
     textAlign:'center',
     paddingTop: 5
   },
})
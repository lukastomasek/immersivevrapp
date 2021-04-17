import React from 'react'
import {View,Button, Text, StyleSheet, Image, Alert, TouchableOpacity} from 'react-native'



export default function checkoutItem({onHeader, onPrice,onDetails}){
  return(
  <View style={styles.checkoutItem}>
    <View>
       <Image style={styles.chair} source={require('../assets/chair.png')} />
       <View style={styles.container}>
          <Text style={styles.regularTxt}>{onHeader}</Text>
          <Text style={styles.price}>{onPrice}</Text>
          <Text style={styles.regularTxt}>{onDetails}</Text>
       </View>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
  checkoutItem:{
    justifyContent:'center',
    alignContent:'center',
    position:'absolute',
    backgroundColor:'#5A5B77',
    width:450,
    height:130,
    bottom:420
  },
  container:{
    position:'absolute',
    right:15,
    marginTop:10,
    marginBottom:10
  },
  chair:{
    width: 120,
    height:120,
    left:20
  },
  regularTxt:{
    color:'white',
    fontSize:18
  },
  price:{
    color: '#07B7FC',
    fontWeight:'bold',
    fontSize:20,
    marginTop:10,
    marginBottom:10
  },
})
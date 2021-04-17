import React from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native'
import Header from './Header'

const Checkout= ()=>{
  return(
    <View style={styles.container}>
      <Header heading='   Checkout Items   ' />  
      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#343551'
  },
})


export default Checkout
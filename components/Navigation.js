import React, {useEffect} from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native'


const Navigation = ()=>{
  return(
    <View style={styles.container}>
     <TouchableOpacity ><Image style={styles.btn}  source={require('../assets/cart.png')} /></TouchableOpacity>
     <TouchableOpacity><Image style={styles.btn} source={require('../assets/cart.png')} /></TouchableOpacity>
     <TouchableOpacity><Image style={styles.btn} source={require('../assets/cart.png')} /></TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    backgroundColor: '#D3D3D3',
    marginBottom: 1,
    justifyContent: 'flex-start',
    width: 450,
    height: 100,
    flexDirection:'row',
    justifyContent:'center',
    borderRadius: 20
  },
  btn:{
    width:60,
    height:60,
    marginLeft: 30,
    marginRight:30,
    marginTop:15,
    opacity: 1
  }
})

export default Navigation
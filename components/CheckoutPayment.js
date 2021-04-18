import React from 'react'
import {View,Button, Text, StyleSheet, Image, Alert, TouchableOpacity} from 'react-native'


export default function CheckoutPayment(){
  return(
    <View style={styles.checkoutItem}>
      <View>   
         <View style={styles.container}>
         
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
      height:80,
      bottom:300
    },
    container:{
      position:'absolute',
      right:25,
      marginTop:10,
      marginBottom:10
    },
    txt:{
      color:'white',
      fontSize:18,
      fontFamily: 'roboto-light'
    },
  
  })
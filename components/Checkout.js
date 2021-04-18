import React from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity, Alert,Button} from 'react-native'
import Header from './Header'
import CheckoutItem from './CheckoutItem'
import CheckoutCounter from  './CheckoutCounter'
import CheckoutPayment from './CheckoutPayment'

const Checkout= ({navigation}) =>{

  return(

    <View style={styles.container}>
      <Header heading='   Checkout Items   ' />  

      <CheckoutCounter onItems={1} />

      <CheckoutItem 
       onHeader='Immersive VR Chair  V1'
       onPrice = '$1999.99'
       onDetails = 'immersive VR chair version 1- 2020'
      />

      <CheckoutPayment />
      
      <View style={styles.btn}>
        <Button
          title="Check Out" 
          color="white" 
        />
      </View>
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

  btn:{
    textAlign:'center',
    backgroundColor: '#07B7FC',
    width:200,
    position: 'absolute',
    bottom: 80,
    borderRadius:10
  },
})


export default Checkout
import React from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity, Alert,Button} from 'react-native'
import Header from './Header'
import CheckoutItem from './CheckoutItem'
import CheckoutCounter from  './CheckoutCounter'
import CheckoutPayment from './CheckoutPayment'
import CheckoutShipping from './CheckoutShipping'

const CheckoutHeadset= ({navigation}) =>{

  return(
    <View style={styles.container}>
      <Header heading='   Checkout Items   ' />  

      {/* <CheckoutCounter onItems={1} /> */}
      
      <CheckoutItem 
       onHeader='Virtual Reality Headset'
       onPrice = '$399.99'
       onDetails = 'VR headset version 1.0'
       onImage = 'VR'
      />

      <CheckoutPayment />

      <CheckoutShipping />
      
      <View style={styles.btn}>
        <Button
          title="Check Out" 
          color="white" 
          onPress={()=> navigation.navigate('CheckoutDone')}
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
  txt:{
    color:'white',
    fontSize: 40
  }
})

export default CheckoutHeadset
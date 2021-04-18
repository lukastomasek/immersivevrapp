import React from 'react'
import {View,Button, Text, StyleSheet, Image, Alert, TouchableOpacity} from 'react-native'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button'

export default function CheckoutPayment(){

const radio_props = [
  {label: 'param1', value: 0 },
  {label: 'param2', value: 1 }
]

  return(
    <View style={styles.checkoutItem}>
      <View>   
         <View style={styles.container}>
         <RadioForm
            radio_props={radio_props}
            initial={0}
            onPress={()=> {}}
          />
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
    Text:{
      color:'white',
      fontSize:18,
      fontFamily: 'roboto-light'
    },
  
  })
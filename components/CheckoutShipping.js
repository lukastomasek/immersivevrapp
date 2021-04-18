import React from 'react'
import {View,Button, Text, StyleSheet, Image, Alert, TouchableOpacity} from 'react-native'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button'

export default function CheckoutShipping(){

  const radio_props = [
    {label: 'Pick Up', value: 0},
    {label: 'Ship To My Address', value: 1 }
  ]

  return(
    <View style={styles.checkoutItem}>
      <View>   
         <View style={styles.container}>
           <Text style={styles.heading}>shipping details :</Text>
         <RadioForm
            style= {styles.radio}
            radio_props={radio_props}
            initial={0}
            animation={true}
            buttonColor={'white'}
            buttonSize={18}
            labelStyle={{fontSize: 20, color: 'white', fontFamily: 'roboto-light'}}
            labelColor={'#07B7FC'}
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
      bottom:180
    },
    container:{
      position:'absolute',
      bottom: -35,
      left:40
    },
    Text:{
      color:'white',
      fontSize:18,
      fontFamily: 'roboto-light'
    },
    radio:{
      color: 'white'
    },
    heading:{
      color: 'white',
      fontSize:18,
      fontFamily: 'roboto-bold',
      textTransform:'uppercase',
      bottom:10,
      left:10,
      marginBottom:5
    }
  
  })
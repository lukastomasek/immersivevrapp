import React, {useEffect} from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native'



const Header = ({heading, onCart}) =>{
  return(
    <View style={styles.container}>
      <View style={styles.imgs}>
        <Image style={styles.logo} source={require('../assets/logo.png')}/>
        <TouchableOpacity onPress={()=> Alert.alert('cart is empty')}>
          <Image style={styles.cart} source={require('../assets/cart.png')}/>
          <Text style={styles.cardNum}>{onCart}</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.txt}>{heading}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1
  },
  imgs:{
    justifyContent:'center',
  },
  logo:{
    height:40,
    width:40,
    alignSelf: 'flex-start',
    marginTop:20,
    right:20
    
  },
  cart:{
    height:40,
    width:40,
    alignSelf: 'flex-end',
    bottom:38,
    left:20
  },
  txt:{
    color:'white',
    textAlign:'center',
    fontSize:35,
    fontWeight:'bold',
    textTransform: 'capitalize',
    marginTop:30,
    fontFamily:'roboto-bold'
  }
  ,cardNum:{
    color:'white',
    fontSize: 18,
    position: 'absolute',
    top: -55,
    right: -10,
    fontFamily: 'roboto-light'
  }
})


export default Header
import React, {useEffect} from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native'



const Header = ({heading}) =>{
  return(
    <View style={styles.container}>
      <View style={styles.imgs}>
        <Image style={styles.logo} source={require('../assets/logo.png')}/>
        <TouchableOpacity onPress={()=> Alert.alert('cart is empty')}>
          <Image style={styles.cart} source={require('../assets/cart.png')}/>
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
    marginTop:30
  }
})


export default Header
import React, {useState} from 'react'
import { useRef } from 'react'
import {View,Button, Text, StyleSheet, Image, Alert, TouchableOpacity, Animated} from 'react-native'
import { Easing, interpolate } from 'react-native-reanimated'
import { useEffect } from 'react/cjs/react.development'
import Header from './Header'


const Customize = ({navigation}) =>{

  const [purplechair,setPurpleChair] = useState(false)
  const [bluechair,setBlueChair] = useState(true)
  const [greenchair,setGreenChair] = useState(false)
  const [cart,setCart] = useState(0)

  const fadeAnim = new Animated.Value(0)

  const onImageChanged = () =>{
    Animated.timing(fadeAnim,{
      toValue:1,
      easing: Easing.in(),
      duration: 500,
      useNativeDriver:true
    }).start()
  }
  
  if(cart > 5){
    Alert.alert('out of chairs')
    setCart(0)
  }
 const checkCart = () =>{
    if(cart > 0){
      navigation.navigate('Checkout')
    }
  }
  return(
    <View style={styles.container}>  
     <Header heading='customize item' onCart={cart}/>
      { bluechair && <Animated.Image  style={{
        opacity:fadeAnim, 
        height:300,
        width:300,
        position:'absolute',
        top:200,
        }}  onLoad={onImageChanged}  source={require('../assets/chair.png')}/>}
      { greenchair&&  <Animated.Image style={{
          opacity:fadeAnim, 
          height:300,
          width:300,
          position:'absolute',
          top:200,
      }} onLoad={onImageChanged}  source={require('../assets/green-chair.png')}/>}
      { purplechair && <Animated.Image  style={{
          opacity:fadeAnim, 
          height:300,
          width:300,
          position:'absolute',
          top:200,
      }} onLoad={onImageChanged}  source={require('../assets/purple-chair.png')}/>}
      <View style={styles.cart}>
          <Button
          title="cart"
          onPress={()=>{checkCart()}}
          />
      </View>
     <View style={styles.container2}>
      <TouchableOpacity  onPress={()=> { 
        setBlueChair(true)
        setGreenChair(false)
        setPurpleChair(false)
      }} style={styles.blueBtn}></TouchableOpacity>
      <TouchableOpacity onPress={()=> {
        setGreenChair(true)
        setBlueChair(false)
        setPurpleChair(false)
 
        }} style={styles.greenBtn}></TouchableOpacity>
      <TouchableOpacity onPress={()=> {
        setPurpleChair(true)
        setBlueChair(false)
        setGreenChair(false) 
        }} style={styles.purpleBtn}>
      </TouchableOpacity>
    </View>
     <View style={styles.btn}>
      <Button
        title="Add To Cart" 
        color="white" 
        onPress={()=> {
          setCart( cart +1)
          navigation.navigate('Checkout')
        }} 
      />
     </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#343551'
  },
  txt:{
    color:'white',
    fontSize: 28,
    fontWeight:'bold'
  },
  chair:{
    height:300,
    width:300,
    position:'absolute',
    top:200,
  },
  btn:{
    textAlign:'center',
    backgroundColor: '#07B7FC',
    width:200,
    position: 'absolute',
    bottom: 80,
    borderRadius:10,
    fontFamily: 'roboto-light'
  },
  blueBtn:{
    width:35,
    height:35,
    backgroundColor: 'blue',
    margin: 30,
    borderRadius:30
  },
  greenBtn:{
    width:35,
    height:35,
    backgroundColor: 'green',
    margin: 30,
    borderRadius:30
  },
  purpleBtn:{
    width:35,
    height:35,
    backgroundColor: 'purple',
    margin: 30,
    borderRadius:30
  },
  container2:{
    backgroundColor: '#5A5B77',
    flex:1,
    position:'absolute',
    flexDirection:'row',
    justifyContent:'center',
    bottom:180,
    borderRadius:30,
    height:90,
  },
  cart:{
    position:'absolute',
    top:10,
    right:55,
    opacity:0
  }
})


export default Customize
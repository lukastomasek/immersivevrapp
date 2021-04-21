import React, {useRef,useEffect} from 'react'
import {View, Text, StyleSheet, Image, Animated} from 'react-native'
import { Easing } from 'react-native-reanimated'


const CheckoutDone = ({navigation}) =>{

  const fadeAnim = useRef(new Animated.Value(0)).current
  const fadeAnimTxt = useRef(new Animated.Value(0)).current

  useEffect(()=>{
    setTimeout(() => {
      navigation.navigate('Home')
    }, 3000);
  },[])

  useEffect(()=>{
    Animated.timing(
      fadeAnim,{
        toValue:1,
        easing: Easing.in(),
        duration:1000,
        useNativeDriver:true
      }
    ).start()
  },[fadeAnim])

  useEffect(()=>{
    Animated.timing(
      fadeAnimTxt,{
        toValue:1,
        easing : Easing.in(),
        duration:2200
      }
    ).start()
  },[fadeAnimTxt])


   return(
    <View style={styles.container}>
      <Animated.Image
      style={{
        opacity: fadeAnim
      }}
      source={require('../assets/done.png')} />
      <Animated.View style={{
        opacity: fadeAnimTxt
      }}>
        <Text style={styles.txt} >order has been placed</Text>
      </Animated.View>
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
    color:'#07B7FC',
    fontSize: 25,
    fontFamily: 'roboto-bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    top:30,
    
  }

});


export default CheckoutDone
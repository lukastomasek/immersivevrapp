import React, {useState} from 'react'
import {View,Button, Text, StyleSheet, Image, Alert, TouchableOpacity} from 'react-native'
import Header from './Header'


const Customize = ({navigation}) =>{

  const [purplechair,setPurpleChair] = useState(false)
  const [bluechair,setBlueChair] = useState(true)
  const [greenchair,setGreenChair] = useState(false)
  const [cart,setCart] = useState(0)


  if(cart > 5){
    Alert.alert('out of chairs')
    setCart(0)
  }

  return(
    <View style={styles.container}>  
     <Header heading='customize item' onCart={cart}/>
      { bluechair && <Image style={styles.chair} source={require('../assets/chair.png')}/>}
      { greenchair&&  <Image style={styles.chair} source={require('../assets/green-chair.png')}/>}
      { purplechair && <Image style={styles.chair} source={require('../assets/purple-chair.png')}/>}
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
        onPress={()=> setCart( cart +1)} 
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
  },
  btn:{
    textAlign:'center',
    backgroundColor: '#07B7FC',
    width:200,
    position: 'absolute',
    bottom: 80,
    borderRadius:10
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
    bottom:150,
    borderRadius:30,
    height:90,
  },
})


export default Customize
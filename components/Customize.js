import React, {useEffect} from 'react'
import {View,Button, Text, StyleSheet, Image, Alert} from 'react-native'
import Header from './Header'

const Customize = ({navigation}) =>{

  return(
    <View style={styles.container}>
     <Header heading='customize item'/>
     <Image style={styles.chair} source={require('../assets/chair.png')} />
     <View style={styles.btn}>
      <Button
        title="Add To Cart" 
        color="white" 
        onPress={()=>Alert.alert('added to cart!')} 
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
    bottom: 100,
    borderRadius:10
  }
})


export default Customize
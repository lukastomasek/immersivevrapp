import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Header from './Header'
import Nav from './Navigation'

const Home = ({navigation}) =>{
  return(
    <View style={styles.container}>
      <Header heading='featured products' />
      <Nav />
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
    fontWeight:'bold',
    flex:1
  },
  btn:{

  }
});


export default Home
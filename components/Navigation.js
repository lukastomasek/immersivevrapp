import * as React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native'
import * as RootNavigation from '../routes/RootNavigation';

const Navigation = ()=>{

  return(
    <View style={styles.container}>
     <TouchableOpacity ><Image style={styles.btn}  source={require('../assets/home.png')} /></TouchableOpacity>
     <TouchableOpacity><Image style={styles.btn} source={require('../assets/account.png')} /></TouchableOpacity>
     <TouchableOpacity  ><Image style={styles.btn} source={require('../assets/settings.png')} /></TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    backgroundColor: '#7C2AB5',
    marginBottom: 1,
    justifyContent: 'flex-start',
    width: 450,
    height: 100,
    flexDirection:'row',
    justifyContent:'center',
    borderRadius: 20
  },
  btn:{
    width:30,
    height:30,
    marginLeft: 40,
    marginRight:40,
    marginTop:15,
    opacity: 1
  }
})

export default Navigation
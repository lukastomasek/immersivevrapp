import React, {useEffect} from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'


const Customize = ({navigation}) =>{
  return(
    <View style={styles.container}>
      <Text style={styles.txt}>Customize Item</Text>
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
})


export default Customize
import React from 'react'
import {View, Text, StyleSheet} from 'react-native'


const Home = () =>{
  return(
    <View style={styles.container}>
       <Text style={styles.txt}>Home</Text>
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
  }
});


export default Home
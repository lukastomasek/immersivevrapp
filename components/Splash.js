import React, {useEffect} from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'


const Splash = ({navigation}) =>{

  useEffect(()=>{
    setTimeout(() => {
      navigation.navigate('Home')
     
    }, 2000);
  },[])
  
  return(
    <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
       <Text style={styles.txt}>IMMERSIVE <Text style={styles.txt2}>VR</Text></Text>
       <Text>Loading...</Text>
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
  logo: {
    width: 80,
    height: 80,
    marginBottom: 40
  },
  txt2:{
    color:'#7C2AB5',
    fontSize: 28,
    fontWeight:'bold'
  },
});


export default Splash
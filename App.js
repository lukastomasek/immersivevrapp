import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View,Alert } from 'react-native';
import Navigator from './routes/Homestack'

export default function App() {

  let removeSplash = false

  useEffect(()=>{
    setTimeout(()=> {
      removeSplash = true;
      Alert.alert('remove splash')
    },2000)
  },[])

  return (
     <Navigator splashRemove ={removeSplash} />
  )
}

const styles = StyleSheet.create({

});

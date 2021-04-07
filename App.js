import React from 'react';
import { StyleSheet, Text, View,Alert,StatusBar } from 'react-native';
import Navigator from './routes/Homestack'

export default function App() {
  return (
    <View style = {styles.container}>
      <Navigator />
      <StatusBar style='auto'/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
})

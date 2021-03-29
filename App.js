import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Alert } from 'react-native';
import Navigator from './routes/Homestack'

export default function App() {

  return (
     <Navigator />
  )
}

const styles = StyleSheet.create({

});

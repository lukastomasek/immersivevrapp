import React, {useEffect} from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import Header from './Header'

const Account = ({navigation}) =>{
  return(
    <View style={styles.container}>
     <Header heading='Account'/>
    </View>
  )
}

export default Account

import React ,{useState}from 'react';
import * as Font from 'expo-font'
import { StyleSheet, Text, View,Alert,StatusBar } from 'react-native';
import Navigator from './routes/Homestack'
import AppLoading from 'expo-app-loading'

const getFonts = () =>
  Font.loadAsync({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
  })


export default function App() {

  const [fontsLoaded,setfontsLoaded] = useState(false)

    
    return (
      <View style = {styles.container}>
        <Navigator />
        <StatusBar style='auto'/>
      </View>
    )

  // else{
  //     return (
  //       <AppLoadiçng
  //         startAsync={getFonts}
  //         onFinish={() => setfontsLoaded(true)}
  //         onError={Alert.alert('Failed to load assets!')}
  //       />
  //   )
  // }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
})

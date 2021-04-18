import React ,{useState}from 'react';
import * as Font from 'expo-font'
import { StyleSheet, Text, View,Alert,StatusBar } from 'react-native';
import Navigator from './routes/Homestack'
import AppLoading from 'expo-app-loading'

const getFonts = () =>{
  Font.loadAsync({
    'roboto-bold' : require('./assets/fonts/Roboto-Bold.ttf'),
    'roboto-light': require('./assets/fonts/Roboto-Light.ttf'),
    'roboto-regular:' : require('./assets/fonts/Roboto-Regular.ttf'),
  })
}


export default function App() {

  const[getFont,fontLoaded] = useState(false)
    
  if(getFont){
    return (
      <View style = {styles.container}>
        <Navigator />
        <StatusBar style='auto'/>
      </View>
    )
  }else{
    return(
      <AppLoading
        startAsync={getFonts}
        onError={()=> Alert.alert('Assets Failed To Load')}
        onFinish={()=> fontLoaded(true)}
      />
    )
  }

}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
})

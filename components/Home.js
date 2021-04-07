import React from 'react'
import {View, Image,Text, StyleSheet, TouchableOpacity,Dimensions} from 'react-native'
import Header from './Header'
import Nav from './Navigation'
import {navigationRef} from '../routes/RootNavigation';

const Home = ({navigation}) =>{

  const moveToCustom = () =>{
    navigation.navigate('Customize')
  }
  return(
    <View style={styles.container} ref={navigationRef}>
      <Header heading='featured products' />  
       <View style={styles.cards}>
        <TouchableOpacity onPress={moveToCustom} style={styles.card}>
            <Image style={styles.cardImg} source={require('../assets/card.png')} />
              <View>
              <Image style={styles.chair} source={require('../assets/chair.png')}/>
              <Text style={styles.detail}>Immersive VR Chair v1</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={moveToCustom} style={styles.card}>
            <Image style={styles.cardImg} source={require('../assets/card.png')} />
              <View>
              <Image style={styles.chair} source={require('../assets/chair.png')}/>
              <Text style={styles.detail}>Immersive VR Chair v2</Text>
              </View>
          </TouchableOpacity>
       </View>
       <View style={styles.container1}>
          <TouchableOpacity onPress={()=> navigation.navigate('Home')}><Image style={styles.btn}  source={require('../assets/home.png')} /></TouchableOpacity>
          <TouchableOpacity onPress={()=> navigation.navigate('Account')}><Image style={styles.btn} source={require('../assets/account.png')} /></TouchableOpacity>
          <TouchableOpacity onPress={()=> navigation.navigate('Settings')}><Image style={styles.btn} source={require('../assets/settings.png')} /></TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#343551'
  },
  txt:{
    color:'white',
    fontSize: 28,
    fontWeight:'bold',
    flex:1
  },
  cards:{
    flexDirection: 'row',
  },
  card:{
    display: 'flex',
    justifyContent: 'center',
    bottom: 280,
    margin: 30,
    right: 15,
  },
  cardImg:{
   width: 180,
   height:180,
   position: 'absolute',
   top: 0,
   bottom: 0,
   left: 0,
   right: 0,
  },
  chair:{
    width: 150,
    height:150,
    position: 'relative',
    alignSelf:'center',
    justifyContent:'center',
    left:20,
    top:20
  },
  detail:{
    position: 'absolute',
    top:200,
    textAlign:'center',
    left:30,
    color: 'white',
    fontSize: 16
  },
  container1:{
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
});


export default Home
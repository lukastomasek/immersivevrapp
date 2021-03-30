import React from 'react'
import {View, Image,Text, StyleSheet, TouchableOpacity,Dimensions} from 'react-native'
import Header from './Header'
import Nav from './Navigation'

const Home = ({navigation}) =>{

  const w = Dimensions.get('screen').width
  const h = Dimensions.get('screen').height

  const moveToCustom = () =>{
    navigation.navigate('Customize')
  }

  return(
    <View style={styles.container}>
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
      <Nav />
     
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
    fontWeight:'bold',
    flex:1
  },
  cards:{
    flexDirection: 'row',
  },
  card:{
    display: 'flex',
    justifyContent: 'center',
    bottom: 300,
    margin: 30,
    right: 25,
  },
  cardImg:{
   width: 200,
   height:200,
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
  }
});


export default Home
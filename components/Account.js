import React, {useEffect} from 'react'
import {View, Text, StyleSheet, FlatList,} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Header from './Header'

const Account = ({navigation}) =>{
  const Data = [
    {
      id: 0,
      title: 'Name'
    },
    {
      id:1,
      title: 'email'
    },{ 
      id:2,
      title: 'log out'
    }
  ]

  return(
    <View style={styles.container}>
     {/* <Header heading='Account'/> */}
      <FlatList style={styles.list}
         data={Data}
         renderItem={({item}) => (
          <TouchableOpacity>
             <Text style={styles.txt}>{item.title}</Text>
          </TouchableOpacity>
         )}
      />
    </View>

  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#343551'
  },
  txt:{
    color:'white',
    fontWeight:'bold',
    fontSize:25,
    margin: 20,
    textAlign:'center',
    textTransform: 'uppercase'
  },
  list:{
    marginTop: 100
  }
})

export default Account

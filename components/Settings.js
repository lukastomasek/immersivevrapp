import React, {useState} from 'react'
import {View, Text, StyleSheet, FlatList,Switch, Alert} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Header from './Header'

const Settings = ({navigation}) =>{

  const Data = [
    {
      id: 0,
      title: 'sound',
      isEnabled: true,
      Toggle : function(){
       isEnabled = !isEnabled
      }
    },
    {
      id:1,
      title: 'notification',
      isEnabled: true,
       
      Toggle : function(){
        isEnabled = !isEnabled
      }
     
    },{ 
      id:2,
      title: 'Access to location',
      isEnabled: true,
     
    }
  ]

  const [isEnabled1, setIsEnabled1] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
  const [isEnabled3, setIsEnabled3] = useState(false);
  const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);

  return(
    <View style={styles.container}>
     {/* <Header heading='Account'/> */}
        
      <FlatList style={styles.list}
         data={Data}
         renderItem={({item}) => (
          <TouchableOpacity style={styles.option} >
             <Text style={styles.txt}>{item.title}</Text>
          </TouchableOpacity>
         )}
      />
       <View style={styles.switches}>
          <Switch style = {styles.switch1}
                      trackColor={{ false: "#767577", true: "#81b0ff" }}
                      ios_backgroundColor="#3e3e3e"
                      onValueChange={(value)=>setIsEnabled1(value)}
                      value={isEnabled1}
                    />
                      <Switch style = {styles.switch2}
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                ios_backgroundColor="#3e3e3e"
                onValueChange={(value)=>setIsEnabled2(value)}
                value={isEnabled2}
              />
                <Switch style = {styles.switch3}
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                ios_backgroundColor="#3e3e3e"
                onValueChange={(value)=>setIsEnabled3(value)}
                value={isEnabled3}
              />
          </View>
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
    fontSize:22,
    margin: 20,
    textAlign:'center',
    textTransform: 'uppercase'
  },
  list:{
    marginTop: 100,
  },
  switch1:{ 
    display:'flex',
    alignSelf:'center',
    margin:30,
  },
  switch2:{ 
    display:'flex',
    alignSelf:'center',
    margin:10,
  },
  switch3:{ 
    display:'flex',
    alignSelf:'center',
    margin:30,
  },
  switches:{
    position: 'absolute',
    top:120,


  }
})

export default Settings

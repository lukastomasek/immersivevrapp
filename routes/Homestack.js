import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Splash from '../components/Splash'
import Home from '../components/Home'

const screens = {
  Splash:{
    screen: Splash,
    navigationOptions:{
      title: ''  
    }
  },
  Home:{
    screen: Home,
    navigationOptions:{
      headerLeft:null,
    }
  },
 
}

const homeStack = createStackNavigator(screens,{
  defaultNavigationOptions:{
    headerStyle: {backgroundColor:'#343551'},
    headerTintColor: 'white',
  }
})

export default createAppContainer(homeStack)
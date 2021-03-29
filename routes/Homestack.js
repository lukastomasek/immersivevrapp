import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Splash from '../components/Splash'
import Home from '../components/Home'

const screens = {
  Splash:{
    screen: Splash
  },
  Home:{
    screen: Home
  }
}

const homeStack = createStackNavigator(screens)

export default createAppContainer(homeStack)
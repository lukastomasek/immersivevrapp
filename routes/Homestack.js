import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Splash from '../components/Splash'
import Home from '../components/Home'
import Custom from '../components/Customize'
import Account from '../components/Account'
import Settings from '../components/Settings'
import Checkout from '../components/Checkout'
import CheckoutDone from '../components/CheckouDone'

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
  Customize:{
    screen: Custom
  },
  Account:{
    screen: Account
  },
  Settings:{
    screen: Settings
  },
  Checkout:{
    screen:Checkout
  },
  CheckoutDone:{
    screen: CheckoutDone
  }
 
}

const homeStack = createStackNavigator(screens,{
  defaultNavigationOptions:{
    headerStyle: {backgroundColor:'#343551'},
    headerTintColor: 'white',
  }
})

export default createAppContainer(homeStack)
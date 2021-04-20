import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Splash from '../components/Splash'
import Home from '../components/Home'
import Custom from '../components/Customize'
import Account from '../components/Account'
import Settings from '../components/Settings'
import Checkout from '../components/Checkout'
import CheckoutDone from '../components/CheckouDone'
import CustomizeHeadset from '../components/CustomizeHeadset'
import CheckoutHeadset from '../components/CheckoutHeadset'

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
  CheckoutHeadset:{
    screen: CheckoutHeadset
  },
  CheckoutDone:{
    screen: CheckoutDone
  },
  CustomizeHeadset:{
    screen: CustomizeHeadset
  },
 
}

const homeStack = createStackNavigator(screens,{
  defaultNavigationOptions:{
    headerStyle: {backgroundColor:'#343551'},
    headerTintColor: 'white',
  }
})

export default createAppContainer(homeStack)
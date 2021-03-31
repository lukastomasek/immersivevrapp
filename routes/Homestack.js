import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Splash from '../components/Splash'
import Home from '../components/Home'
import Custom from '../components/Customize'
import Account from '../components/Account'

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
  YourAccount:{
    screen: Account
  }
 
}

const homeStack = createStackNavigator(screens,{
  defaultNavigationOptions:{
    headerStyle: {backgroundColor:'#343551'},
    headerTintColor: 'white',
  }
})

export default createAppContainer(homeStack)
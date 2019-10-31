import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import Login from './src/Views/Login'
import Register from './src/Views/Register'

// export default App;


const AppNavigator = createStackNavigator(
  {
    Login: Login,
    Register: Register,
  },
  
  {
    initialRouteName: 'Login',
    header: null,
    headerMode: 'none'
  }

);

export default createAppContainer(AppNavigator);
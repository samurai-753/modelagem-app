import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import Login from './src/Views/Login'
import Register from './src/Views/Register'
import NewsLetterDetail from './src/Views/NewsLetterDetail';
import Profile from './src/Views/Profile';

// export default App;


const AppNavigator = createStackNavigator(
  {
    Login: Login,
    Register: Register,
    ViewNewsLetter: NewsLetterDetail,
    Profile: Profile

  },
  
  {
    initialRouteName: 'Profile',
    header: null,
    headerMode: 'none'
  }

);

export default createAppContainer(AppNavigator);
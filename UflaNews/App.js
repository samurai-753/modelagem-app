import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import Login from './src/Views/Login'
import Register from './src/Views/Register'
import NewsLetterDetail from './src/Views/NewsLetterDetail';
import Feed from './src/Views/Feed';

// export default App;


const AppNavigator = createStackNavigator(
  {
    Login: Login,
    Feed: Feed,
    Register: Register,
    ViewNewsLetter: NewsLetterDetail,
  },
  
  {
    initialRouteName: 'Feed',
    header: null,
    headerMode: 'none'
  }

);

export default createAppContainer(AppNavigator);
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import Login from './src/Views/Login'
import Registrar from './src/Views/Registrar'
import VisualizarBoletim from './src/Views/VisualizarBoletim';
import Feed from './src/Views/Feed';

// export default App;


const AppNavigator = createStackNavigator(
  {
    Login: Login,
    Feed: Feed,
    Registrar: Registrar,
    VisualizarBoletim: VisualizarBoletim,
  },
  
  {
    initialRouteName: 'Login',
    header: null,
    headerMode: 'none'
  }

);

export default createAppContainer(AppNavigator);
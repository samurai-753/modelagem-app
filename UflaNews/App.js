import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import Login from './src/Views/Login'

import Profile from './src/Views/Profile';
import Publisher from './src/Views/Publisher';

import Registrar from './src/Views/Registrar'
import VisualizarBoletim from './src/Views/VisualizarBoletim';
import Feed from './src/Views/Feed';

import Listagem from './src/Views/Listagem'

import { Provider } from 'react-redux';
import Store from "./src/store";
import React, {Component} from 'react';

const store = Store();


const AppNavigator = createStackNavigator(
  { 
    Login: Login,
    Feed: Feed,
    Registrar: Registrar,
    VisualizarBoletim: VisualizarBoletim,
    Profile: Profile,
    Publisher: Publisher,
    Listagem: Listagem
  },
  {
    initialRouteName: 'Login',
    header: null,
    headerMode: 'none'
  }

);

let Navigation = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
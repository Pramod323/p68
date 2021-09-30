import React from 'react';
import FacebookScreen from './screens/FacebookScreen';
import InstagramScreen from './screens/Instagram';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export default class App extends React.Component {
  render(){
    return <AppContainer />
  }
}

const TabNavigator = createBottomTabNavigator({
  Facebook : {screen: FacebookScreen},
  Instagram : {screen: InstagramScreen},
})

const AppContainer = createAppContainer(TabNavigator);

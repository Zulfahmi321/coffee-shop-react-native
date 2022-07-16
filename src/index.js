import { View, Text, StatusBar } from 'react-native'
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './screens/landing';

const Router = () => {
    const {Navigator, Screen} = createStackNavigator();
  return (
    <>
      <StatusBar barStyle={"light-content"}/>
      <Navigator>
        <Screen name="landing" component={Landing} options={{headerShown:false}} />
      </Navigator>
    </>
  )
}

export default Router
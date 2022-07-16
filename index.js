import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import React from 'react';

import {NavigationContainer} from "@react-navigation/native";
import { SafeAreaProvider } from 'react-native-safe-area-context';

import App from './src';
import {name as appName} from './app.json';

const AppWithRouter = () => (
    <SafeAreaProvider>
        <NavigationContainer>
            <App/>
        </NavigationContainer>
    </SafeAreaProvider>
)

AppRegistry.registerComponent(appName, () => AppWithRouter);
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Cities from './views/Cities';
import Home from './views/Home';
import Itineraries from './views/Itineraries';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk' 
import { Provider } from 'react-redux'
import rootReducer from './redux/reducers/rootReducer'
import Login from './views/Login'
import Register from './views/Register'

const centralizedStore = createStore(rootReducer, applyMiddleware(thunk))
const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider store={centralizedStore}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Register" component={Register}/>
            <Stack.Screen name="Cities" component={Cities}/>
            <Stack.Screen name="Itineraries" component={Itineraries}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

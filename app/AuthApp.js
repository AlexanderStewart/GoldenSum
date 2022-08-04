import { View } from 'react-native';
import React, { useState, useContext } from 'react';
import tw from 'tailwind-react-native-classnames';
import { UIContext } from './context/UIContext';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Play from './pages/Play';
import HowToPlay from './pages/slideups/HowToPlay';

export default function AuthApp(props) {

  const contextUI = useContext(UIContext);
  const {
    //...
  } = contextUI;

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName="Golden Sum"
      >
        <Stack.Screen name="Golden Sum" component={Game} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Game = () => {
  return (
    <View style={tw`flex flex-1 bg-white`}>

      {/* SlideUps */}
      <HowToPlay />

      <Play />
    </View>
  );
};
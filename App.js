
import React, { useState, useEffect } from 'react';
import { LogBox } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AuthApp from './app/AuthApp';
import UIProvider from './app/context/UIContext';
import UserProvider from './app/context/UserContext';

export default function App() {

  LogBox.ignoreAllLogs();

  return (
    <SafeAreaProvider>
      <UIProvider>
        <UserProvider>

          <AuthApp />

        </UserProvider>
      </UIProvider>
    </SafeAreaProvider>
  );
}
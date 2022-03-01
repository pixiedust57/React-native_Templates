/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';





const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

 

  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
      <Text>Hello world</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({})
  
export default App;

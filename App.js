import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, LogBox, View } from 'react-native';
import MyProductContainer from './screens/Products/MyProductsContainer'
import Header from './shared/Header'

LogBox.ignoreAllLogs(true);
export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <MyProductContainer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

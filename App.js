import * as React from 'react';
import Main from './components/Navigation/Main';
import { StyleSheet, Text, View, Image, Button, TextInput, ScrollView } from 'react-native';



export default function App() {
  return (
    <View style={styles.container} >
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

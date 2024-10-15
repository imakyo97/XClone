import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import AppBar from './src/components/AppBar';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <AppBar/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

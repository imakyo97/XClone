import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import AppBar from './src/components/AppBar';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <AppBar>
        <Text>あああ</Text>
        <Text>いいい</Text>
      </AppBar>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

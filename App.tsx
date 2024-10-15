import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
} from 'react-native';
import AppBar from './src/components/AppBar';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <AppBar>
        <Image style={styles.xIcon} source={require('./src/assets/X-Logo.jpg')} resizeMode={'cover'}/>
        <Text>いいい</Text>
      </AppBar>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  xIcon: {
    width: 32,
    height: 32,
  },
});

export default App;

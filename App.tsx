import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  Pressable,
} from 'react-native';
import AppBar from './src/components/AppBar';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <AppBar>
        <Image style={styles.xIcon} source={require('./src/assets/X-Logo.jpg')} resizeMode={'cover'}/>
        <Pressable style={styles.upgrade} onPress={() => {}}>
          <Text>アップグレード</Text>
        </Pressable>
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
  upgrade: {
    width: 120,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'gray',
    borderRadius: 16,
  },
});

export default App;

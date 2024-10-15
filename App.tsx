import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  Pressable,
  View,
} from 'react-native';
import AppBar from './src/components/AppBar';
import TabBar from './src/components/TabBar';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <AppBar>
        <Image style={styles.xIcon} source={require('./src/assets/X-Logo.jpg')} resizeMode={'cover'}/>
        <View style={styles.spaceView}>
          <Pressable style={styles.upgrade} onPress={() => {}}>
            <Text>アップグレード</Text>
          </Pressable>
        </View>
      </AppBar>
      <TabBar/>
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
  spaceView: {
    flex: 1,
    alignItems: 'flex-end',
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

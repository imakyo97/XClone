import * as React from 'react';
import { StyleSheet, View, Image, Pressable, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Home, Search, Community, Notification, Message } from './src/screens';
import AppBar from './src/components/AppBar';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              header: () => <HomeHeader/>,
            }}
          />
          <Tab.Screen
            name="Search"
            component={Search}
            options={{
              header: () => <HomeHeader/>,
            }}
          />
          <Tab.Screen
            name="Community"
            component={Community}
            options={{
              header: () => <HomeHeader/>,
            }}
          />
                    <Tab.Screen
            name="Notification"
            component={Notification}
            options={{
              header: () => <HomeHeader/>,
            }}
          />
                    <Tab.Screen
            name="Message"
            component={Message}
            options={{
              header: () => <HomeHeader/>,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const HomeHeader = () => (
  <AppBar>
    <Image style={styles.xIcon} source={require('./src/assets/X-Logo.jpg')} resizeMode={'cover'}/>
    <View style={styles.spaceView}>
      <Pressable style={styles.upgrade} onPress={() => {}}>
        <Text>アップグレード</Text>
      </Pressable>
    </View>
  </AppBar>
);

const styles = StyleSheet.create({
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

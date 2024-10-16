import React from 'react';
import { StyleSheet, View, Image, Pressable, Text, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
              tabBarIcon: HomeIcon,
            }}
          />
          <Tab.Screen
            name="Search"
            component={Search}
            options={{
              header: () => <SearchHeader/>,
              tabBarIcon: SearchIcon,
            }}
          />
          <Tab.Screen
            name="Community"
            component={Community}
            options={{
              header: () => <HomeHeader/>,
              tabBarIcon: CommunityIcon,
            }}
          />
                    <Tab.Screen
            name="Notification"
            component={Notification}
            options={{
              header: () => <HomeHeader/>,
              tabBarIcon: NotificationIcon,
            }}
          />
                    <Tab.Screen
            name="Message"
            component={Message}
            options={{
              header: () => <HomeHeader/>,
              tabBarIcon: MessageIcon,
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

const HomeIcon = ({ focused } : { focused: boolean }) => {
  let type = '';

  if (!focused) {
    type = '-outline';
  }

  return (
    <Ionicons name={'home' + type} size={24}/>
  );
};

const SearchHeader = () => {
  const [text, onChangeText] = React.useState('');

  return (
    <AppBar>
      <TextInput
          style={styles.search}
          onChangeText={onChangeText}
          value={text}
          placeholder="検索"
        />
      <View style={styles.spaceView}>
        <Pressable style={styles.settings}>
          <Ionicons name="settings-outline" size={24}/>
        </Pressable>
      </View>
    </AppBar>
  );
};

const SearchIcon = ({ focused } : { focused: boolean }) => {
  let type = '';

  if (!focused) {
    type = '-outline';
  }

  return (
    <Ionicons name={'search' + type} size={24}/>
  );
};

const CommunityIcon = ({ focused } : { focused: boolean }) => {
  let type = '';

  if (!focused) {
    type = '-outline';
  }

  return (
    <Ionicons name={'people' + type} size={24}/>
  );
};

const NotificationIcon = ({ focused } : { focused: boolean }) => {
  let type = '';

  if (!focused) {
    type = '-outline';
  }

  return (
    <Ionicons name={'notifications' + type} size={24}/>
  );
};

const MessageIcon = ({ focused } : { focused: boolean }) => {
  let type = '';

  if (!focused) {
    type = '-outline';
  }

  return (
    <Ionicons name={'mail' + type} size={24}/>
  );
};

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
  settings: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  search: {
    flex: 5,
    height: 40,
    marginLeft: 16,
    marginRight: 16,
    padding: 10,
    backgroundColor: 'lightgray',
    borderRadius: 20,
  },
});

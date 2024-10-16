import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import TabBar from '../components/TabBar';

function Home(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <TabBar/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;

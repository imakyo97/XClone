import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

function Home(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;

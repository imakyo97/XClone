import React from 'react';
import {
    StyleSheet,
} from 'react-native';
import { WebView } from 'react-native-webview';

function Community(): React.JSX.Element {
    return (
        <WebView
            source={{ uri: 'https://infinite.red' }}
            style={styles.container}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Community;

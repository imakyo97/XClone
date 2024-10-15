import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

function AppBar(): React.JSX.Element {
    return (
        <View style={styles.container}>
            <View style={styles.iconView}>
                <Image style={styles.icon} source={require('../assets/inko.png')} resizeMode={'contain'}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 50,
    },
    icon: {
        width: '100%',
        height: '100%',
    },
    iconView: {
        backgroundColor: 'gray',
        width: 32,
        height: 32,
        borderRadius: 16,
    },
});

export default AppBar;

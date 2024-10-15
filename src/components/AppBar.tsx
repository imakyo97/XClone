import React, { PropsWithChildren } from 'react';
import { StyleSheet, View, Image } from 'react-native';


function AppBar({ children }: PropsWithChildren): React.JSX.Element {
    return (
        <View style={styles.container}>
            <View style={styles.spaceView}>
                <View style={styles.iconView}>
                    <Image style={styles.icon} source={require('../assets/inko.png')} resizeMode={'contain'}/>
                </View>
            </View>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        paddingLeft: 16,
        paddingRight: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
    spaceView: {
        flex: 1,
        alignItems: 'flex-start',
    },
    icon: {
        width: '100%',
        height: '100%',
    },
    iconView: {
        backgroundColor: 'gray',
        width: 40,
        height: 40,
        borderRadius: 20,
    },
});

export default AppBar;

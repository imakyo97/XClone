import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';

function Search(): React.JSX.Element {
    return (
        <View style={styles.container}>
            <Text>大阪</Text>
            <Image style={styles.weatherIcon} source={require('../assets/01d.png')} resizeMode={'contain'}/>
            <Text>くもり</Text>
            <View style={styles.row}>
                <Text>30℃</Text>
                <Text>20℃</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        gap: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    weatherIcon: {
        width: 200,
        height: 200,
    },
});

export default Search;

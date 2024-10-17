import React, {useState, useEffect} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';
import { getWeather } from '../repository/weatherRepository';
import { WeatherData } from '../model/WeatherData';

function Search(): React.JSX.Element {
    const [weather, setWeather] = useState<WeatherData | null>(null);
    useEffect(() => {
        (async() => {
            const weatherData = await getWeather('osaka');
            setWeather(weatherData);
        })();
    }, []);

    return (
        <View style={styles.container}>
            <Text>{weather?.name}</Text>
            <Image style={styles.weatherIcon} source={require('../assets/01d.png')} resizeMode={'contain'}/>
            <Text>{weather?.weather[0].description}</Text>
            <View style={styles.row}>
                <Text>{`${weather?.main.temp_max}℃`}</Text>
                <Text>{`${weather?.main.temp_min}℃`}</Text>
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

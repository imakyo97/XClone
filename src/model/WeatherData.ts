export type WeatherData = {
    weather: Weather[],
    main: Main,
    name: string,
}

type Weather = {
    description: string,
    icon: string,
}

type Main = {
    temp_min: number,
    temp_max: number,
}

export function getWeatherIcon(icon: string | undefined) {
    switch (icon) {
        case '01d':
            return require('../assets/01d.png');
        case '02d':
            return require('../assets/02d.png');
        case '03d':
            return require('../assets/03d.png');
        case '04d':
            return require('../assets/04d.png');
        case '09d':
            return require('../assets/09d.png');
        case '10d':
            return require('../assets/10d.png');
        case '13d':
            return require('../assets/13d.png');
        case '50d':
            return require('../assets/50d.png');
        default:
            return require('../assets/01d.png');
    }
}

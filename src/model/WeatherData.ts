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

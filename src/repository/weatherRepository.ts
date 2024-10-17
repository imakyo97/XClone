import axios from 'axios';

import { WeatherData } from '../model/WeatherData';

export async function getWeather(city: string): Promise<WeatherData> {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9f3ab1e7ced559d013692e82ff4f65ea&units=metric&lang=ja`);
    return response.data as WeatherData;
}

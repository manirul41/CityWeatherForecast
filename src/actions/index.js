import axios from 'axios';

const API_KEY = 'c3c330281992d931d0033ae1443910dd';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},bd`;
    const request = axios.get(url);
    console.log("weather action", request);
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
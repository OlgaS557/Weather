import { PUT_MESSAGE, PUT_WEATHER_INFO } from "../actions/weatherAction";
import { Action, State, WeatherInfo } from "../types";

const initialState: State = {
    message: 'Enter city name'
}

export const weatherReducer = (state = initialState, action: Action<string | WeatherInfo>): State => {
    switch (action.type) {
        case PUT_WEATHER_INFO:
            return {...state, weatherInfo: action.payload as WeatherInfo, message: null}
        case PUT_MESSAGE:
            return {...state, message: action.payload as string}
        default:
            return state;
    }
}
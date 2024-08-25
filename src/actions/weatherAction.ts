import { WeatherInfo, Action, Dispatch } from "../types";
import { api_key, base_url } from "../utils/constants";

export const PUT_WEATHER_INFO = 'PUT_WEATHER_INFO';
export const PUT_MESSAGE = 'PUT_MESSAGE';

export const putWeatherInfoAction = (weatherInfo: WeatherInfo): Action<WeatherInfo> => {
    return {
        type: PUT_WEATHER_INFO,
        payload: weatherInfo
    }
}

export const putMessageAction = (message: string): Action<string> => {
    return {
        type: PUT_MESSAGE,
        payload: message
    }
}

export const getWeatherAction = (city: string) => {
    return async (dispatch: Dispatch) => {
        dispatch(putMessageAction('Pending...'));
        try {
            const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`);
            const data = await response.json();
            const weatherInfo = {
                country: data.sys.country,
                city: data.name,
                temp: data.main.temp,
                pressure: data.main.pressure,
                sunset: data.sys.sunset
            };
            dispatch(putWeatherInfoAction(weatherInfo));
        } catch (e) {
            console.log(e);
            dispatch(putMessageAction('Enter correct city name'));
        }
    }
}

// export const getWeatherAction = city => {
//     return dispatch => {
//         dispatch(putMessageAction('Pending...'))
//         fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
//             .then(response => response.json())
//             .then(data => ({
//                 country: data.sys.country,
//                 city: data.name,
//                 temp: data.main.temp,
//                 pressure: data.main.pressure,
//                 sunset: data.sys.sunset
//             }))
//             .then(weatherInfo => {
//                 dispatch(putWeatherInfoAction(weatherInfo))
//             })
//             .catch(e => {
//                 console.log(e);
//                 dispatch(putMessageAction('Enter correct city name'))
//             });
//     }
// }
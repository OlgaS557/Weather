import { useSelector } from 'react-redux'
import { State, WeatherInfo } from '../types';

function Weather() {
    const message = useSelector<State, string | null>(state => state.message);
    const weather = useSelector<State, WeatherInfo>(state => state.weatherInfo!);

    return (
        <div className='infoWeath'>
            {!message &&
                <div>
                    <p>Location: {weather.country}, {weather.city} </p>
                    <p>Temp: {weather.temp} </p>
                    <p>Pressure: {weather.pressure} </p>
                    <p>Sunset: {new Date(weather.sunset * 1000).toTimeString()}</p>
                </div>
            }
            <p>{message}</p>
        </div>
    )
}

export default Weather

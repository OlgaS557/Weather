import React, { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getWeatherAction } from '../actions/weatherAction';

const FormControl = () => {
    const [city, setCity] = useState('');
    const dispatch = useDispatch();

    const handleGetCitySubmit = () => {
        dispatch(getWeatherAction(city));
        setCity('');
    }

    const handleCityChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCity(e.target.value);
    }

    return (
        <div>
            <input
                onChange={handleCityChange}
                type='text'
                placeholder='city'
                value={city}
            />
            <button onClick={handleGetCitySubmit}>Get Weather</button>
        </div>
    )

}

export default FormControl

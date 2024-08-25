export interface WeatherInfo {
    country: string,
    city: string,
    temp: number,
    pressure: number,
    sunset: number
}

export interface Action<T> {
    type: string,
    payload?: T
}

export interface State {
    message: string | null,
    weatherInfo?: WeatherInfo
}

export type Dispatch = (action: Action<string | WeatherInfo>) => State;
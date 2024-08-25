import {applyMiddleware, legacy_createStore} from "redux";
import {weatherReducer} from "../reducers/weatherReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

export const store = legacy_createStore(weatherReducer, composeWithDevTools(applyMiddleware(thunk)));
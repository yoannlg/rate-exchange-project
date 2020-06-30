import { combineReducers } from 'redux';
import ReducerCountries from './reducer_countries';
import reducerRateExchange from './reducer_rate_exchange';

const rootReducer = combineReducers({
  countriesReducer : ReducerCountries,
  rateExchandeReducer : reducerRateExchange
});

export default rootReducer;

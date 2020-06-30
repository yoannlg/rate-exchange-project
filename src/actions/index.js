import axios from "axios";

export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_RATE_EXCHANGE = 'GET_RATE_EXCHANGE'

export function fetchCountries() {
  return function(dispatch) {
    axios.get("https://restcountries.eu/rest/v2/all").then(axiosResponse => {
      dispatch({type: GET_COUNTRIES, payload: axiosResponse.data})
    })
  }
}


const formatedDate = (date) => {
  return date.toISOString().split('T')[0]
}
const getLastMonth = (date) => {
  let now = new Date();
  now.setMonth(now.getMonth()-1);
  return formatedDate(now)
}

export function fetchRateExchange(country) {
  return function(dispatch){
    axios.get(`https://api.exchangeratesapi.io/history?start_at=${getLastMonth()}&end_at=${formatedDate(new Date())}&base=USD&symbols=${country.code}`).then(axiosResponse => {
      dispatch({type: GET_RATE_EXCHANGE, payload: {rates: axiosResponse.data.rates, ...country}})
    })
  }
}
import { GET_COUNTRIES } from '../actions'

const initialState = {
  countries : []
};

const getCountriesInfo = (data) => {
  return data.map(countrie => {
    return {
      name: countrie.name,
      currencyCode: countrie.currencies[0].code,
      flag: countrie.flag,
      code: countrie.alpha3Code
    }
  }).filter(c => {
    return c.currencyCode !== "USD"
  })
}

export default function(countryReducer = initialState, action) {
  switch(action.type){
    case GET_COUNTRIES:
      return {
        ...countryReducer,
        countries : getCountriesInfo(action.payload)
      };
  }
  return countryReducer;
}
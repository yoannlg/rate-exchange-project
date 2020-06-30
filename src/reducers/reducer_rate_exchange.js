import { GET_RATE_EXCHANGE } from '../actions' 

const initialState = {
  rateExchangeList: []
}


export default function(oldRateEchangeReducer = initialState, action) {
  switch(action.type){
    case GET_RATE_EXCHANGE : 
    return {
      ...oldRateEchangeReducer,
      rateEchangeList : [action.payload, ...oldRateEchangeReducer.rateEchangeList]
    }
    default : return oldRateEchangeReducer;
  }
}
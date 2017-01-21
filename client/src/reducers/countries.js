import { FETCH_COUNTRIES_IN_PROGRESS, FETCH_COUNTRIES_SUCCEDED, FETCH_COUNTRIES_FAILED, SELECT_COUNTRY } from '../actions/const';

const initialState = {
  collection: [],
  selected: {},
  error: {},
  isFetching: false  
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COUNTRIES_IN_PROGRESS:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_COUNTRIES_SUCCEDED:
      return {
        ...state,
        isFetching: false,
        selected: {},
        collection: [
          ...action.payload.countries
        ]
      }
    case FETCH_COUNTRIES_FAILED:
      return {
        ...state,
        isFetching: false,
        error: Object.assign({}, action.payload)
      }
    case SELECT_COUNTRY:
     return {
       ...state,
       selected: Object.assign({}, action.payload.selectedCountry)
     }
    default: {
      return state;
    }
  }
}

module.exports = reducer;

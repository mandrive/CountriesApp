import { SELECT_COUNTRY } from './const';

function action(country) {
  return { 
    type: SELECT_COUNTRY,
    payload: {
      selectedCountry: country 
    }
  }
}

module.exports = action;

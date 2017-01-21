import { ADD_COUNTRY_IN_PROGRESS, ADD_COUNTRY_SUCCEDED, ADD_COUNTRY_FAILED } from './const';
import fetchCountries from './fetchCountries';
import axios from 'axios'; 

function addingCountryInProgress() {
  return {
    type: ADD_COUNTRY_IN_PROGRESS
  }
}

function addingCountrySucceded() {
  return {
    type: ADD_COUNTRY_SUCCEDED
  }
}

function addingCountryFailed() {
  return {
    type: ADD_COUNTRY_FAILED
  }
}

function action(country) {
  return (dispatch) => {
    dispatch(addingCountryInProgress());

    axios.post('http://localhost:9555/api/countries', {
      Name: country.Name,
      Capital: {
        Name: country.Capital.Name
      }
    }).then((response) => {
      dispatch(addingCountrySucceded());
      dispatch(fetchCountries());
    })
    .catch((err) => {
      dispatch(addingCountryFailed());
    })
  }
}

module.exports = action;

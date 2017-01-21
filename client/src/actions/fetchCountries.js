import { FETCH_COUNTRIES, FETCH_COUNTRIES_IN_PROGRESS, FETCH_COUNTRIES_SUCCEDED, FETCH_COUNTRIES_FAILED } from './const';
import axios from 'axios'; 

function fetchingCountriesInProgress() {
  return { type: FETCH_COUNTRIES_IN_PROGRESS };
}

function fetchingSucceded(countries) {
  return {
    type: FETCH_COUNTRIES_SUCCEDED,
    payload: {
      countries: countries
    }
  }
}

function fetchingFailed(err) {
  return {
    type: FETCH_COUNTRIES_FAILED,
    payload: {
      error: 'Fetching countries failed. Details: ' + err
    }
  }
}

function action() {
  return (dispatch) => {
    dispatch(fetchingCountriesInProgress());

    axios.get('http://localhost:9555/api/countries')
    .then((response) => {
      dispatch(fetchingSucceded(response.data))
    })
    .catch((err) => {
      dispatch(fetchingFailed(err))
    });
  }
}

module.exports = action;

import { FETCH_COUNTRIES } from './const';

function action(parameter) {
  return { type: FETCH_COUNTRIES, parameter };
}

module.exports = action;

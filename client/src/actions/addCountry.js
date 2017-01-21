import { ADD_COUNTRY } from './const';

function action(parameter) {
  return { type: ADD_COUNTRY, parameter };
}

module.exports = action;

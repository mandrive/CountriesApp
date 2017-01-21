import { SELECT_COUNTRY } from './const';

function action(parameter) {
  return { type: SELECT_COUNTRY, parameter };
}

module.exports = action;

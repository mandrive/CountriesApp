/* Exports all the actions from a single point.

Allows to import actions like so:

import {action1, action2} from '../actions/'
*/
/* Populated by react-webpack-redux:action */
import fetchCountries from '../actions/fetchCountries.js';
import selectCountry from '../actions/selectCountry.js';
import addCountry from '../actions/addCountry.js';
const actions = {
  addCountry,
  selectCountry,
  fetchCountries
};
module.exports = actions;

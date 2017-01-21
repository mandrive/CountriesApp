import React, { Component, PropTypes } from 'react';
import { addCountry, selectCountry, fetchCountries } from '../actions/';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Main from '../components/App';
import CountriesList from '../components/CountriesList';

class App extends Component {
  render() {
    const {actions, countries} = this.props;

    return (
      <div>
        <CountriesList
          countries={this.props.countries.collection}
          selectCountry={this.props.selectCountry}
        />
      </div>
      )
  }
}
App.propTypes = {
  actions: PropTypes.object.isRequired,
  countries: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const props = { countries: state.countries };
  return props;
};

function mapDispatchToProps(dispatch) {
  const actions = {
    addCountry,
    selectCountry,
    fetchCountries
  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

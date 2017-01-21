import React, { Component, PropTypes } from 'react';
import { addCountry, selectCountry, fetchCountries } from '../actions/';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Main from '../components/App';
import CountriesList from '../components/CountriesList';
import CountryDetails from '../components/CountryDetails';

class App extends Component {
  componentDidMount() {
    this.props.actions.fetchCountries();
  }
  render() {
    const {actions, countries} = this.props;

    return (
      <div className="row">
        <div className="col col-lg-3">
          <CountriesList
            countries={this.props.countries.collection}
            selectCountry={this.props.actions.selectCountry}
          />
        </div>
        <div className="col col-lg-9">
          <CountryDetails selectedCountry={this.props.countries.selected}/>
        </div>
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

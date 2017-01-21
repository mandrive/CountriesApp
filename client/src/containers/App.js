import React, { Component, PropTypes } from 'react';
import { addCountry, selectCountry, fetchCountries } from '../actions/';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CountriesList from '../components/CountriesList';
import CountryDetails from '../components/CountryDetails';
import AddCountryForm  from '../components/AddCountryForm';

class App extends Component {
  componentDidMount() {
    this.props.actions.fetchCountries();
  }
  render() {
    const {actions, countries } = this.props;
    
    return (
      <div>
        <div className="jumbotron">
            <h1>#CountriesApp</h1>
        </div>
        <div className="row">
          
          <div className="col col-lg-3">
            <CountriesList
              countries={countries.collection}
              selectedCountry={countries.selected}
              selectCountry={this.props.actions.selectCountry}
            />
          </div>
          <div className="col col-lg-9">
            <CountryDetails selectedCountry={countries.selected}/>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-lg-12">
            <AddCountryForm onSubmit={this.props.actions.addCountry}/>
          </div>
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

import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './styles/countrydetails.cssmodule.scss';

@cssmodules(styles)
class CountryDetails extends React.Component {

  render() {
    var countryDetails = this.props.selectedCountry && this.props.selectedCountry.Id
                            ? (<div className="card">
                                  <div className="card-block">
                                    <h2>Country name: {this.props.selectedCountry.Name}</h2>
                                    <h4>Capital name: {this.props.selectedCountry.Capital.Name}</h4>
                                  </div>
                              </div>)
                            : (<h3>Select a country from list on the left</h3>)

    return (
      <div className="countrydetails-component">
        {countryDetails}
      </div>
    );
  }
}

export default CountryDetails;

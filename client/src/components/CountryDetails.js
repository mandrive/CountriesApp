import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './styles/countrydetails.cssmodule.scss';

@cssmodules(styles)
class CountryDetails extends React.Component {

  render() {
    var countryDetails = this.props.selectedCountry && this.props.selectedCountry.Id ? <div>Selected country!</div> : <h3>Select a country from list on the left</h3>

    return (
      <div className="countrydetails-component">
        {countryDetails}
      </div>
    );
  }
}

export default CountryDetails;

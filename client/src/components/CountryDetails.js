import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './countrydetails.cssmodule.scss';

@cssmodules(styles)
class CountryDetails extends React.Component {

  render() {
    return (
      <div className="countrydetails-component" styleName="countrydetails-component">
        Please edit src/components//CountryDetails.js to update this component!
      </div>
    );
  }
}

CountryDetails.displayName = 'CountryDetails';
CountryDetails.propTypes = {};
CountryDetails.defaultProps = {};

export default CountryDetails;

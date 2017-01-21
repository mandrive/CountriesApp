import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './countrieslist.cssmodule.scss';

@cssmodules(styles)
class CountriesList extends React.Component {

  render() {
    return (
      <div className="countrieslist-component" styleName="countrieslist-component">
        Please edit src/components//CountriesList.js to update this component!
      </div>
    );
  }
}

CountriesList.displayName = 'CountriesList';
CountriesList.propTypes = {};
CountriesList.defaultProps = {};

export default CountriesList;

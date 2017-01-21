import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './country.cssmodule.scss';

@cssmodules(styles)
class Country extends React.Component {

  render() {
    return (
      <div className="country-component" styleName="country-component">
        Please edit src/components//Country.js to update this component!
      </div>
    );
  }
}

Country.displayName = 'Country';
Country.propTypes = {};
Country.defaultProps = {};

export default Country;

import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './styles/country.cssmodule.scss';

@cssmodules(styles)
class Country extends React.Component {
  render() {
    return (
      <div className="country-component" styleName="country-component">
        <span>{this.props.country.Name}</span>
        <button className="btn btn-primary" onClick={() => {this.props.onSelect(this.props.country);}}>Show details</button>
      </div>
    );
  }
}

export default Country;

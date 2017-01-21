import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './styles/countrieslist.cssmodule.scss';

import Country from './Country';

@cssmodules(styles)
class CountriesList extends React.Component {

  render() {
    var countries = this.props.countries && this.props.countries.length ? 
        <ul>{this.props.countries.map(c => (<li key={c.Id}><Country country={c} onSelect={this.props.selectCountry} /></li>))}</ul>
        : <h2>No countries loaded</h2>;

    return (
      <div className="countrieslist-component">
        <h1>Countries list:</h1>
          {countries}
      </div>
    );
  }
}

export default CountriesList;

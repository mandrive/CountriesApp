import React from 'react';
import cssmodules from 'react-css-modules';

import Country from './Country';

class CountriesList extends React.Component {
  render() {
    var countries = this.props.countries && this.props.countries.length ? 
        <div className="list-group">{this.props.countries.map(c => 
          <Country 
            key={c.Id}
            country={c}
            onSelect={this.props.selectCountry}
            isActive={this.props.selectedCountry.Id == c.Id} />)}</div>
        : <h2>No countries loaded</h2>;

    return (
      <div className="countrieslist-component">
          {countries}
      </div>
    );
  }
}

export default CountriesList;

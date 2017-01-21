import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './styles/country.cssmodule.scss';

@cssmodules(styles)
class Country extends React.Component {
  render() {
    return (
      <a href="#" className="list-group-item" onClick={(e) => { e.preventDefault(); this.props.onSelect(this.props.country);}}>
        {this.props.country.Name}
      </a>
    );
  }
}

export default Country;

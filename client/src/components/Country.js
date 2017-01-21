import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './styles/country.cssmodule.scss';

@cssmodules(styles)
class Country extends React.Component {
  render() {
    return (
      <button className={"list-group-item list-group-item-action " + (this.props.isActive ? "active" : "")} onClick={() => { this.props.onSelect(this.props.country);}}>
        {this.props.country.Name}
      </button>
    );
  }
}

export default Country;

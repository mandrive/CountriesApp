import React from 'react';
import styles from './styles/country.cssmodule.scss';

class AddCountryForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            countryName: '',
            capitalName: ''
        };

        this.onCountryNameChange = this.onCountryNameChange.bind(this);
        this.onCapitalNameChange = this.onCapitalNameChange.bind(this);
    }
    onCountryNameChange(e) {
        this.setState({countryName: e.target.value});
    }
    onCapitalNameChange(e) {
        this.setState({capitalName: e.target.value});
    }
  render() {
    return (
      <form onSubmit={(e) => { e.preventDefault(); this.props.onSubmit({ Name: this.state.countryName, Capital: { Name: this.state.capitalName }})}}>
        <div className="form-group">
            <label htmlFor="countryname">Country Name</label>
            <input type="text" className="form-control" id="countryname" placeholder="Country name..." onChange={this.onCountryNameChange} />
        </div>
        <div className="form-group">
            <label htmlFor="capitalname">Capital Name</label>
            <input type="text" className="form-control" id="capitalname" placeholder="Capital name..." onChange={this.onCapitalNameChange} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

export default AddCountryForm;

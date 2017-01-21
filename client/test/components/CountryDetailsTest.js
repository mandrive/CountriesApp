import React from 'react';
import { shallow } from 'enzyme';
import CountryDetails from 'components//CountryDetails.js';

describe('<CountryDetails />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<CountryDetails />);
  });

  describe('when rendering the component', () => {

    it('should have a className of "countrydetails-component"', () => {
      expect(component.hasClass('countrydetails-component')).to.equal(true);
    });
  });
});

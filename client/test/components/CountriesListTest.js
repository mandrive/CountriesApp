import React from 'react';
import { shallow } from 'enzyme';
import CountriesList from 'components//CountriesList.js';

describe('<CountriesList />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<CountriesList />);
  });

  describe('when rendering the component', () => {

    it('should have a className of "countrieslist-component"', () => {
      expect(component.hasClass('countrieslist-component')).to.equal(true);
    });
  });
});

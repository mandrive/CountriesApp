import React from 'react';
import { shallow } from 'enzyme';
import Country from 'components//Country.js';

describe('<Country />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<Country />);
  });

  describe('when rendering the component', () => {

    it('should have a className of "country-component"', () => {
      expect(component.hasClass('country-component')).to.equal(true);
    });
  });
});

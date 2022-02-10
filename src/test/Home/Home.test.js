import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Home } from '../../components';

Enzyme.configure({ adapter: new Adapter() });

describe('Home', () => {
    it('rendering home', () => {
        const component = shallow(<Home />);
        expect(component).not.toBe(null);
        expect(component.getElements()).toMatchSnapshot();
    });
});
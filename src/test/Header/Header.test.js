import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Header } from '../../components';

Enzyme.configure({ adapter: new Adapter() });

describe('Header', () => {
    it('rendering header', () => {
        const component = shallow(<Header />);
        expect(component).not.toBe(null);
        expect(component.getElements()).toMatchSnapshot();
    });
});
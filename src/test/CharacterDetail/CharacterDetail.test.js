import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { CharacterDetail } from '../../components';

Enzyme.configure({ adapter: new Adapter() });

describe('CharacterDetail', () => {
    it('rendering character detail', () => {
        const component = shallow(<CharacterDetail />);
        expect(component).not.toBe(null);
        expect(component.getElements()).toMatchSnapshot();
    });
});
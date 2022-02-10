import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { EpisodeDetail } from '../../components';

Enzyme.configure({ adapter: new Adapter() });

describe('EpisodeDetail', () => {
    it('rendering episode detail', () => {
        const component = shallow(<EpisodeDetail />);
        expect(component).not.toBe(null);
        expect(component.getElements()).toMatchSnapshot();
    });
});
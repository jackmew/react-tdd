import React from 'react';
import { shallow } from 'enzyme';
import Gift from './Gift'

const gift = shallow(<Gift />);

describe('Gift', () => {
    it('renders correctly', () => {
        expect(gift).toMatchSnapshot();
    });
    it('initialize a person and present in `state`', () => {
        expect(gift.state()).toEqual({ person: '', present: '' });
    });

    describe('when typing into the person input', () => {
        const person = 'Uncle';
        
        beforeEach(() => {
            gift.find('.input-person').simulate('change', { target: { value: person }});
        });

        it('update the person in `state`', () => {
            expect(gift.state().person).toEqual(person);
        });
    });

    describe('when typing into the present input', () => {
        const present = 'Golf';
        beforeEach(() => {
            gift.find('.input-present').simulate('change', { target: { value: present }});
        });

        it('update the present in `state`', () => {
            expect(gift.state().present).toEqual(present);
        });
    });
});
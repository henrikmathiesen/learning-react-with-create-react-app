import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import AddGreeter from './AddGreeter';

describe('AddGreeter', () => {

    const mockAddGreeting = jest.fn();
    const component = shallow(
        <AddGreeter addGreeting={mockAddGreeting} />
    );

    // Write a generic snapshot test

    it('Renders and matches our snapshot', () => {
        const component = renderer.create(
            <AddGreeter />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    // Check content

    it('Contains the form', () => {
        expect(component.find('input')).toHaveLength(1);
        expect(component.find('button')).toHaveLength(1);
    });

    // Check interactions

    it('Calls the passed in addGreeting function when add button is clicked', () => {
        component.find('button').simulate('click');
        expect(mockAddGreeting).toBeCalled();
    });

    it('Updates the form when keys are pressed', () => {
        const updateVal = 'foo';
        const event = {
            target: {
                value: updateVal
            }
        }

        component.instance().handleUpdate(event);
        expect(component.state('greetingName')).toEqual(updateVal);
    });

    it('Blanks out the greetingName when the button is clicked', () => {
        const updateVal = 'foo';
        const event = {
            target: {
                value: updateVal
            }
        }

        component.instance().handleUpdate(event);

        expect(component.state('greetingName')).toEqual(updateVal);
        component.find('button').simulate('click');
        expect(component.state('greetingName')).toHaveLength(0);
    });
});

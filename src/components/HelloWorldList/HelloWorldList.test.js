import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import HelloWorldList from './HelloWorldList';
import AddGreeter from '../AddGreeter/AddGreeter';
import HelloWorldWithState from '../HelloWorldWithState/HelloWorldWithState';
import HelloWorld from '../HelloWorld/HelloWorld';

describe('HelloWorldList', () => {

    beforeAll(() => {
        // If console gives error, test fails
        console.error = error => {
            throw new Error(error);
        };
    });

    const component = shallow(
        <HelloWorldList />
    );

    // 1) Write a generic snapshot test

    it('Renders and matches our snapshot', () => {
        const component = renderer.create(
            <HelloWorldList />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    // 2) Write some sub-component-specific tests / check content

    it('Contains an AddGreeter subcomponent', () => {
        expect(component.find(AddGreeter)).toHaveLength(1);
        expect(component.find(HelloWorld).length).toBe(1);                          // jasmine syntax works here also (toEqual also)
    });

    it('Contains the same number of HelloWorldWithState as greetings', () => {
        const HelloWorldWithStates = component.find(HelloWorldWithState).length;
        const greetings = component.state('greetings').length;
        expect(HelloWorldWithStates).toEqual(greetings);
    });

    // 3) Check interactions

    it('Adds another greeting when the add greeting function is called', () => {
        const before = component.find(HelloWorldWithState).length;
        component.instance().addGreeting('Sample');                                   // Call a function on a component
        const after = component.find(HelloWorldWithState).length;
        expect(after).toBeGreaterThan(before);
    });

    it('Removes a greeting from the list when the remove greeting function is called', () => {
        const before = component.find(HelloWorldWithState).length;
        const removeMe = component.state('greetings')[0];
        component.instance().removeGreeting(removeMe);
        const after = component.find(HelloWorldWithState).length;
        expect(after).toBeLessThan(before);
    });

});

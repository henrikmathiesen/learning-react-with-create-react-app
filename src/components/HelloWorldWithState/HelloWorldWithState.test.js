import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import HelloWorldWithState from './HelloWorldWithState';

// Can actually reference the component like this HelloWorldWithState (without quotes) but this creates noise in test command prompt
describe('HelloWorldWithState', () => {

    beforeAll(() => {
        // If console gives error, test fails
        console.error = error => {
            throw new Error(error);
        };
    });

    // Set up a shallow rendered component with enzyme api
    const name = 'Person';
    const mockRemoveGreeting = jest.fn();
    const component = shallow(
        <HelloWorldWithState name={name} removeGreeting={mockRemoveGreeting} />
    );

    // 1) Write a generic snapshot test (these are not shallow, if we look at the snapshot of a component that has children (HelloWorldList for example) we can see that)

    it('Renders and matches our snapshot', () => {
        const component = renderer.create(
            <HelloWorldWithState name="Person" />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    // 2) Write some sub-component-specific tests (skip since we dont have any sub components)

    // 3) Check content

    it('Contains the supplied name', () => {
        expect(component.text()).toContain(name);
    });

    // 4) Check interactions

    it('Modifies the greeting when frenchify button is clicked', () => {
        component.find('button.ts-french').simulate('click');
        expect(component.text()).toContain('Bonjour');
    });

    it('Calls the passed in removeGreeting function when remove button is clicked', () => {
        component.find('button.ts-remove').simulate('click');
        expect(mockRemoveGreeting).toBeCalled();
    });
});


// We installed some new packages for this (npm throwed error, needed to do npm cache clean / run bash as admin)

// react-test-renderer
// - Render components to pure JavaScript objects, without depending on the DOM or a native mobile environment
// - We can create a JSON from it and make a snapshot for snapshot testing

// enzyme
// - More flexibility, like shallow rendering (test components in isolation without children), although react-addons-test-utils also has this
// - Also mimicking jQuery's API for DOM manipulation and traversal
// - Seems more easy to use than react-addons-test-utils
// - "Using Enzyme gives you the same functionality as ReactTestUtils but with much cleaner, simpler commands"
// - https://medium.com/@malinnaleach/testing-react-a-beginners-guide-755a8828c222#.1bcemeuvl

// react-addons-test-utils
// - enzyme requires this package
// - It has its own test api, see HelloWorld.test.js

// snapshot testing: https://facebook.github.io/jest/blog/2016/07/27/jest-14.html
// press u in test runner to update snap shot if change was intentional

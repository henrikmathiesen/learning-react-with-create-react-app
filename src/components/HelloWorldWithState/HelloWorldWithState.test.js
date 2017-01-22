import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import HelloWorldWithState from './HelloWorldWithState';

// Can actually reference the component like this HelloWorldWithState but this creates noise in test command prompt
describe('HelloWorldWithState', () => {

    const name = 'Person';
    const mockRemoveGreeting = jest.fn();
    const component = shallow(
        <HelloWorldWithState name={name} removeGreeting={mockRemoveGreeting} />
    );

    it('Renders and matches our snapshot', () => {
        const component = renderer.create(
            <HelloWorldWithState name="Person" />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

});


// We installed some new packages for this (npm throwed error, needed to do npm cache clean / run bash as admin)
// react-test-renderer: Render components to pure JavaScript objects, without depending on the DOM or a native mobile environment
// enzyme: More flexibility, like shallow rendering (test components in isolation without children)
// react-addons-test-utils: enzyme requires this package

// snapshot testing: https://facebook.github.io/jest/blog/2016/07/27/jest-14.html

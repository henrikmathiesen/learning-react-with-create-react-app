import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import HelloWorldList from './HelloWorldList';
import AddGreeter from '../AddGreeter/AddGreeter';
import HelloWorldWithState from '../HelloWorldWithState/HelloWorldWithState';
import HelloWorld from '../HelloWorld/HelloWorld';

describe('HelloWorldList', () => {

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

    // 2) Write some sub-component-specific tests

    it('contains an AddGreeter subcomponent', () => {
        expect(component.find(AddGreeter)).toHaveLength(1);
        expect(component.find(HelloWorld).length).toBe(1);  // jasmine syntax works here also (toEqual also)
    });

});

import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import { mount } from 'enzyme';
import HelloWorld from './HelloWorld';

describe('HelloWorld', () => {

    const mockTest = jest.fn();
    const name = 'Person';

    it('Renders with correct text in props', () => {
        // Shallow rendering using ReactTestUtils
        const renderer = ReactTestUtils.createRenderer();
        renderer.render(<HelloWorld name={name} />);
        const result = renderer.getRenderOutput();
        
        expect(result.props.children).toContain('Person');
    });

    it('Renders with correct text in props (using enzyme for testing)', () => {
        // Deep rendering using enzyme
        const component = mount(<HelloWorld name={name} />);
        expect(component.props().name).toContain('Person');
    });

});

// We are not using ReactTestUtils in the other tests
// - With enzyme in HelloWorldWithState.test we can NOT do this expect(component.props.children).toContain('Person'); , we can not do it with shallow rendering
// - BUT we can do it with deep rendering using enzyme, see test 2
// - With ReactTestUtils here, we can NOT query DOM like this expect(result.text()).toContain('Person');

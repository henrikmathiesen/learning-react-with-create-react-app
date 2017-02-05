import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import HelloWorld from './HelloWorld';

describe('HelloWorld', () => {

    const mockTest = jest.fn();
    const name = 'Person';

    it('Renders with correct text', () => {
        const renderer = ReactTestUtils.createRenderer();
        renderer.render(<HelloWorld name={name} />);
        const result = renderer.getRenderOutput();
        expect(result.props.children).toContain('Person');
    });

});

// We are not using ReactTestUtils in the other tests
// - With enzyme in HelloWorldWithState.test we can NOT do this expect(component.props.children).toContain('Person');
// - With ReactTestUtils here, we can NOT query DOM like this expect(result.text()).toContain('Person');

import React from 'react';
import HelloWorldWithState from './HelloWorldWithState';

// Can actually reference the component like this
describe(HelloWorldWithState, () => {

    it('Should pass', () => {
        expect(true).toBe(true);
    });

});


// We installed some new packages for this (npm throwed error, needed to do npm cache clean / run bash as admin)
// react-test-renderer: Render components to pure JavaScript objects, without depending on the DOM or a native mobile environment
// enzyme: More flexibility, like shallow rendering (test components in isolation without children)
// react-addons-test-utils: enzyme requires this package

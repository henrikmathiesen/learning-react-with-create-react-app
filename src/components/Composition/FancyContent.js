import React from 'react';
import FancyBox from './FancyBox';

const FancyContent = props => {
    return (
        <FancyBox color={props.color}>
            <h2>Some Header</h2>
            <p>Some Fancy Content Here</p>
        </FancyBox>
    );
}

export default FancyContent;

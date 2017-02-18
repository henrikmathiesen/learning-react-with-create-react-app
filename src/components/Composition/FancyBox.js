import React from 'react';
import './FancyBox.css';

// https://facebook.github.io/react/docs/composition-vs-inheritance.html
// Also Note {props.left} {props.right} in SplitPane example


const FancyBox = props => {
    return(
        <div className={'FancyBox FancyBox-' + props.color}>
            {props.children}
        </div>
    );
};

export default FancyBox;

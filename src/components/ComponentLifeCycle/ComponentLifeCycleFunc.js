import React from 'react';
import './ComponentLifeCycleFunc.css'

const ComponentLifeCycleFunc = props => {
    return(
        <div className="ComponentLifeCycleFunc">Iam a function component and does not have lifecycle methods</div>
    );
}

ComponentLifeCycleFunc.defaultProps = {
    foo: 'bar'
};

ComponentLifeCycleFunc.propTypes = {
    foo: React.PropTypes.string.isRequired
};

export default ComponentLifeCycleFunc;

// function style components: "These components must not retain internal state, do not have backing instances, and do not have the component lifecycle methods"
// "There are currently no special optimizations done for component functions, although we might add such optimizations in the future. But for now, they perform exactly as classes."

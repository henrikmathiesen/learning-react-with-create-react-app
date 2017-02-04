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

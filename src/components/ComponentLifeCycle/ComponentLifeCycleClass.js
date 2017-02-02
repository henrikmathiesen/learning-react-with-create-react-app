import React, { Component } from 'react';
import './ComponentLifeCycle.css';

class ComponentLifeCycleClass extends Component {

    constructor(props) {
        super(props);
        this.state = { foo: 'bar' };
    }

    render() {
        return (
            <div className="ComponentLifeCycle">Hi! Iam a Component, yes Iam.</div>
        );
    }

}

export default ComponentLifeCycleClass;

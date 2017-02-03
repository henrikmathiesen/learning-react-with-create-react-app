import React, { Component } from 'react';
import ComponentLifeCycleClass from './ComponentLifeCycleClass';
import './ComponentLifeCycleClassParent.css';

class ComponentLifeCycleClassParent extends Component {

    constructor(props) {
        super(props);
        this.changeMessage = this.changeMessage.bind(this);
        this.state = { message: 'The Component Lifecycle' };
    }

    changeMessage() {
        this.setState({ message: 'Yeah!' });
    }

    render() {
        return (
            <div className="ComponentLifeCycleClassParent">
                <div onClick={this.changeMessage}>Change Message</div>
                <ComponentLifeCycleClass message={this.state.message} />
            </div>
        );
    }
}

export default ComponentLifeCycleClassParent;

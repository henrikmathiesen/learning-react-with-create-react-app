import React, { Component } from 'react';
import ComponentLifeCycleClass from './ComponentLifeCycleClass';
import ComponentLifeCycleFunc from './ComponentLifeCycleFunc';
import './ComponentLifeCycleClassParent.css';

class ComponentLifeCycleClassParent extends Component {

    constructor(props) {
        super(props);
        this.state = { message: 'The Component Lifecycle', renderChild: true };
        this.changeMessage = this.changeMessage.bind(this);
        this.unmountChild = this.unmountChild.bind(this);
    }

    changeMessage() {
        this.setState({ message: 'Yeah!' });
    }

    unmountChild() {
        this.setState({ renderChild: false });
    }

    render() {
        return (
            <div className="ComponentLifeCycleClassParent">
                <div onClick={this.changeMessage}>Change Message</div>
                <div onClick={this.unmountChild}>Unmount dat child</div>
                {this.state.renderChild ? <ComponentLifeCycleClass message={this.state.message} /> : null}
                <ComponentLifeCycleFunc />
            </div>
        );
    }
}

export default ComponentLifeCycleClassParent;

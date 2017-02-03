import React, { Component } from 'react';
import './ComponentLifeCycle.css';

class ComponentLifeCycleClass extends Component {

    changeState() {
        this.setState({ foo: 'baz' });
    }

    // # MOUNTING

    constructor(props) {
        super(props);
        this.state = { foo: 'bar' };
        this.changeState = this.changeState.bind(this);
        console.log("Life cycle, MOUNTING 1): constructor");
    }

    componentWillMount() {
        console.log("Life cycle, MOUNTING 2): componentWillMount");
    }

    render() {
        console.log("Life cycle, MOUNTING/RENDER 3): Render");

        return (
            <div className="ComponentLifeCycle" onClick={this.changeState}>{this.props.message}</div>
        );
    }

    componentDidMount() {
        console.log("Life cycle, MOUNTING 4): componentDidMount");
    }

    // # UPDATING

    componentWillReceiveProps() {
        console.log("Life cycle, UPDATING: componentWillReceiveProps");
    }

    shouldComponentUpdate() {
        console.log("Life cycle, UPDATING 1): shouldComponentUpdate");
        return true; // We can decide if we should continue with the update by returning a boolean here
    }

    componentWillUpdate() {
        console.log("Life cycle, UPDATING 2): componentWillUpdate");
    }

    // render(){} UPDATING 3

    componentDidUpdate() {
        console.log("Life cycle, UPDATING 4): componentDidUpdate");
    }

    // # UNMOUNTING

    componentWillUnmount() {
        console.log("Life cycle, UNMOUNTING: componentWillUnmount");
    }
}

export default ComponentLifeCycleClass;


// # MOUNTING
// These methods are called when an instance of a component is being created and inserted into the DOM

// Constructor
// - "Don't execute side effects in constructor. It's only for initializing state (and perhaps other variables). Don't make async calls or change the state of your app from there."

// componentWillMount
// - "Rarely useful"
// - "ES6 class constructor is equivalent of componentWillMount"
// - "There is talk about removing componentWillMount from class components since it serves the same purpose as the constructor."

// componentDidMount
// - "If your initialization depends upon the DOM, use componentDidMount, otherwise use constructor"
// - "Make ajax calls in this life cycle hook"

// http://stackoverflow.com/questions/29899116/what-is-the-difference-between-componentwillmount-and-componentdidmount-in-react
// http://stackoverflow.com/questions/27139366/why-do-the-react-docs-recommend-doing-ajax-in-componentdidmount-not-componentwi

// # UPDATING
// An update can be caused by changes to props or state. These methods are called when a component is being re-rendered

// - Non of the Updating functions were called on the initial "load"
// - All the functions, including render, are called when we change state, even though we do not use state in the JSX

// # UNMOUNTING
// This method is called when a component is being removed from the DOM

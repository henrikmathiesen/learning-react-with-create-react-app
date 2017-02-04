import React, { Component } from 'react';
import './ComponentLifeCycleClass.css';

class ComponentLifeCycleClass extends Component {

    changeState() {
        this.setState({ foo: 'baz' }, () => {
            console.log("state change callback, but use componentDidUpdate() instead");
        });
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
            <div className="ComponentLifeCycleClass" onClick={this.changeState}>{this.props.message} {this.props.messageToo}</div>
        );
    }

    componentDidMount() {
        console.log("Life cycle, MOUNTING 4): componentDidMount");
    }

    // # UPDATING

    componentWillReceiveProps(nextProps) {
        console.log("Life cycle, UPDATING 0): componentWillReceiveProps", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Life cycle, UPDATING 1): shouldComponentUpdate", { nextProps, nextState });
        return true; // We can decide if we should continue with the update by returning a boolean here
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("Life cycle, UPDATING 2): componentWillUpdate", { nextProps, nextState });
    }

    // render(){} UPDATING 3

    componentDidUpdate(prevProps, prevState) {
        console.log("Life cycle, UPDATING 4): componentDidUpdate", { prevProps, prevState });
    }

    // # UNMOUNTING

    componentWillUnmount() {
        console.log("Life cycle, UNMOUNTING: componentWillUnmount");
    }
}

// # CLASS PROPERTIES

ComponentLifeCycleClass.defaultProps = {
    message: 'The default message if not provided, providing a null value will set it to null though',
    messageToo: 'Yeah!'
}

ComponentLifeCycleClass.displayName = "Used in debugging messages, JSX set it to a default string";

// Run time type checking, used when app runs in debug mode
ComponentLifeCycleClass.propTypes = {
    message: React.PropTypes.string.isRequired,
    messageToo: React.PropTypes.string.isRequired // required is fullfilled via defaultProps
};

export default ComponentLifeCycleClass;


// # MOUNTING
// These methods are called when an instance of a component is being created and inserted into the DOM

// Constructor
// - "Don't execute side effects in constructor. It's only for initializing state (and perhaps other variables). Don't make async calls or change the state of your app from there."

// componentWillMount
// - "Rarely useful"
// - "ES6 class constructor is equivalent of componentWillMount"
// - "There is talk about removing componentWillMount from class components since it serves the same purpose as the constructor."
// - "Generally, we recommend using the constructor() instead."

// componentDidMount
// - "If your initialization depends upon the DOM, use componentDidMount, otherwise use constructor"
// - "Make ajax calls in this life cycle hook"
// - "Setting state in this method will trigger a re-rendering"

// http://stackoverflow.com/questions/29899116/what-is-the-difference-between-componentwillmount-and-componentdidmount-in-react
// http://stackoverflow.com/questions/27139366/why-do-the-react-docs-recommend-doing-ajax-in-componentdidmount-not-componentwi

// # UPDATING
// An update can be caused by changes to props or state. These methods are called when a component is being re-rendered

// - Non of the Updating functions were called on the initial "load"
// - All the functions, including render, are called when we change state, even though we do not use state in the JSX
// - Note that you cannot call this.setState() in componentWillUpdate(). If you need to update state in response to a prop change, use componentWillReceiveProps() instead.

// componentDidUpdate: 
// - Use this as an opportunity to operate on the DOM when the component has been updated. 
// - This is also a good place to do network requests as long as you compare the current props to previous props 
// - (e.g. a network request may not be necessary if the props have not changed).

// componentWillUnmount
// - is invoked immediately before a component is unmounted and destroyed. 
// - Perform any necessary cleanup in this method, such as invalidating timers, 
// - canceling network requests, or cleaning up any DOM elements that were created in componentDidMount

// # UNMOUNTING
// This method is called when a component is being removed from the DOM

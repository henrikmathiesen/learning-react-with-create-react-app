import React, { Component } from 'react';
import './ComponentLifeCycle.css';

class ComponentLifeCycleClass extends Component {

    constructor(props) {
        super(props);
        this.state = { foo: 'bar' };
        console.log("Life cycle 1): constructor");
    }

    componentWillMount() {
        console.log("Life cycle 2): componentWillMount");
    }

    render() {
        console.log("Life cycle 3): Render");

        return (
            <div className="ComponentLifeCycle">{this.props.message}</div>
        );
    }

    componentDidMount() {
        console.log("Life cycle 4): componentDidMount");
    }
}

export default ComponentLifeCycleClass;


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

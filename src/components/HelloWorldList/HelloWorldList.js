import React, { Component } from 'react';
import HelloWorldWithState from '../HelloWorldWithState/HelloWorldWithState';
import HelloWorld from '../HelloWorld/HelloWorld';
import AddGreeter from '../AddGreeter/AddGreeter';

class HelloWorldList extends Component {

    constructor() {
        super();

        this.state = {
            greetings: [
                'Adam',
                'Bertil',
                'Ceasar'
            ]
        };

        this.addGreeting = this.addGreeting.bind(this);         // *
        this.removeGreeting = this.removeGreeting.bind(this);   // *
        this.test = this.test.bind(this);
    }

    renderGreetings() {
        return this.state.greetings.map((name, i) => <HelloWorldWithState key={i} name={name} removeGreeting={this.removeGreeting} />);
    }

    addGreeting(newName) {
        // We can not modify state directly (we must use setState), but could do it like this
        // const greetings = this.state.greetings;
        // greetings.push(newName);
        // this.setState({ greetings: greetings });

        // This is however cleaner, using the spread operator that returns a new array
        this.setState({ greetings: [...this.state.greetings, newName] });
    }

    removeGreeting(removeName) {
        // We could do it like this
        // const greetings = this.state.greetings;
        // const indexToRemove = greetings.indexOf(removeName);
        // greetings.splice(indexToRemove, 1);
        // this.setState({ greetings: greetings });

        // This is cleaner
        const filteredGreetings = this.state.greetings.filter(name => name !== removeName);
        this.setState({ greetings: filteredGreetings });
    }

    test() {
        console.log("test");
    }

    render() {
        return (
            <div>
                <AddGreeter addGreeting={this.addGreeting} />
                {this.renderGreetings()}
                <HelloWorld test={this.test} />
            </div>
        );
    }
}

export default HelloWorldList;

// A class Component that renders two components, one of them via a function, sending in arguments as props.
// We also need to set an unique key so React can seperate the items in the loop.

// * We dont need to renderGreetings = renderGreetings.bind(this), since its not a callback from event.
// * We need it on addGreeting and removeGreeting though, since it has a bind in the child component.

// We removed props in the constructor since this component doesnt take props

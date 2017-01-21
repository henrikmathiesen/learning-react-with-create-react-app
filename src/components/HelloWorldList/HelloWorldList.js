import React, { Component } from 'react';
import HelloWorldWithState from '../HelloWorldWithState/HelloWorldWithState';
import AddGreeter from '../AddGreeter/AddGreeter';

class HelloWorldList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            greetings: [
                'Adam',
                'Bertil',
                'Ceasar'
            ]
        };

        this.addGreeting = this.addGreeting.bind(this); // *

    }

    renderGreetings() {
        return this.state.greetings.map(name => <HelloWorldWithState key={name} name={name} />);
    }

    addGreeting(newName) {
        // We can not modify state directly (we must use setState), but could do it like this
        //var greetings = this.state.greetings;
        //greetings.push(newName);
        //this.setState({ greetings: greetings });

        // This is however cleaner, using the spread operator that returns a new array
        this.setState({ greetings: [...this.state.greetings, newName] });
    }

    render() {
        return (
            <div>
                <AddGreeter addGreeting={this.addGreeting} />
                {this.renderGreetings()}
            </div>
        );
    }
}

export default HelloWorldList;

// A class Component that renders two components, via a function, sending in arguments as props.
// We also need to set an unique key so React can seperate the items in the loop.

// * We dont need to renderGreetings = renderGreetings.bind(this), since its not a callback from event.
// * We need it on addGreeting though, since it has a bind in the child component.

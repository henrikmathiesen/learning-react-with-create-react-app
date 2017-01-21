import React, { Component } from 'react';
import HelloWorldWithState from '../HelloWorldWithState/HelloWorldWithState';

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

    }

    renderGreetings() {
        return this.state.greetings.map(name => <HelloWorldWithState key={name} name={name} />);
    }

    render() {
        return (
            <div className="HelloWorldList">
                {this.renderGreetings()}
            </div>
        );
    }
}

export default HelloWorldList;

// A class Component that renders two components, via a function, sending in arguments as props.
// We also need to set an unique key so React can seperate the items in the loop.

// * We dont need to renderGreetings = renderGreetings.bind(this), since its not a callback from event

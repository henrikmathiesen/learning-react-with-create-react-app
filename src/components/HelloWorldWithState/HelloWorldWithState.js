import React, { Component } from 'react';
import './HelloWorldWithState.css';

class HelloWorldWithState extends Component {

    constructor(props) {
        super(props);
        this.state = { greeting: 'Hello there' };

        this.french = this.french.bind(this); // *
    }

    french() {
        this.setState({ greeting: 'Bonjour' });
    }

    render() {
        return (
            <div className="HelloWorldWithState">
                <div>
                    {this.state.greeting} {this.props.name} World!
                </div>
                <div>
                    <button onClick={this.french}>Frenchify!</button>
                </div>
            </div>
        );
    }
}

export default HelloWorldWithState;


// Import the default export from 'react' in node_modules as React.
// Also import named export Component from 'react'.
// We use a class here, because this component focuses on more than just rendering content.
// We need to define a render function in our class for rendering JSX.
// This component can also get props passed to it, but since this is a class we get those in the constructor,
// that means that we have to use this.props.name instead of props.name

// OBS
// A simple constructor like this is not needed, it seems that it is done automaticly, and in fact the linter complains about this as Useless constructor
// constructor(props) {
//  super(props);
// }

// HOWEVER
// If we use state, we set that up in the constructor, lite above

// Changing state
// Any state changes NEED to happen via the this.setState function

// * This tells Javascript "Hey, any time you see a reference to this inside of the frenchify function, I want you specifically to refer to ME."

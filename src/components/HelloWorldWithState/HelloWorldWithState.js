import React, { Component } from 'react';
import './HelloWorldWithState.css';

class HelloWorldWithState extends Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div className="HelloWorldWithState">Hello {this.props.name} World!</div>
        );
    }
}

export default HelloWorldWithState;


// Import the default export from 'react' in node_modules as React.
// Also import named export Component from 'react'.
// We use a class here, because this component focuses on more than just rendering content.
// This component can also get props passed to it, but since this is a class we get those in the constructor,
// that means that we have to use this.props.name instead of props.name

// OBS
// A simple constructor like this is not needed, it seems that it is done automaticly, and in fact the linter complains about this as Useless constructor
// constructor(props) {
//  super(props);
// }

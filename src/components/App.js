import React from 'react';
import HelloWorld from './HelloWorld/HelloWorld';
import HelloWorldWithState from './HelloWorldWithState/HelloWorldWithState';
import './App.css';

const App = () => {
    return(
        <div className="App">
            <HelloWorld name="JavaScript" />
            <HelloWorld name="React" />
            <HelloWorldWithState name="Angular" />
        </div>
    );
}

export default App;



// This is the App Component, a base component that index.js or routes.js handles.
// Here we used the functional style for the component, instead of classes,
// this is preferable when the component is focused on presentation rather than state and logic.
// The App Component renders 2 HelloWorld components, sending in arguments as props.

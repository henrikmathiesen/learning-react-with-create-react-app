import React from 'react';
import HelloWorldList from './HelloWorldList/HelloWorldList';
import HelloWorld from './HelloWorld/HelloWorld';
import ComponentLifeCycleClass from './ComponentLifeCycle/ComponentLifeCycleClass';
import './App.css';

const App = () => {
    return(
        <div className="App">
            <ComponentLifeCycleClass message="The Component Lifecycle" />
            <HelloWorld name="JavaScript" />
            <HelloWorld name="React" />
            <HelloWorldList />
        </div>
    );
}

export default App;



// This is the App Component, a base component that index.js or routes.js handles.
// Here we use the functional style for the component, instead of classes,
// this is preferable when the component is focused on presentation rather than state and logic.
// The App Component renders 2 HelloWorld components, sending in arguments as props.
// The App Component also renders 1 HelloWorldList

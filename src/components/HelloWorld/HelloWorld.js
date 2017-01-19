import React from 'react';
import './HelloWorld.css';

const HelloWorld = (props) => {
    return(
        <div className="HelloWorld">Hello {props.name} World!</div>
    );
}

export default HelloWorld;



// HelloWorld component, can recieve a prop that is passed in from parent

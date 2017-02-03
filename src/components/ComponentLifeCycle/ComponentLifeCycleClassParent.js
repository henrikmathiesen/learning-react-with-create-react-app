import React, { Component } from 'react';
import ComponentLifeCycleClass from './ComponentLifeCycleClass';

class ComponentLifeCycleClassParent extends Component {
    render(){
        return(
            <ComponentLifeCycleClass message="The Component Lifecycle" />
        );
    }
}

export default ComponentLifeCycleClassParent;

import React, { Component } from 'react';
import HelloWorldWithState from '../HelloWorldWithState/HelloWorldWithState';

class HelloWorldList extends Comment {
    render() {
        return (
            <div className="HelloWorldList">
                <HelloWorldWithState name="Adam" />
                <HelloWorldWithState name="Bertil" />
            </div>
        );
    }
}

export default HelloWorldList;

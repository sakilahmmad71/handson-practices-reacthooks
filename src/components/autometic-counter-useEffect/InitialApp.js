import React, { Component } from 'react';
import CounterClass from './CounterClass';
import CounterFunc from './CounterFunc';

class InitialApp extends Component {
    render() {
        return (
            <div>
                {/* <CounterClass /> */}
                <CounterFunc />
            </div>
        );
    }
}

export default InitialApp;

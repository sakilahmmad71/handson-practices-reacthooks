import React, { Component } from 'react';
import CountComponent from './CountComponent';
import FuncComponent from './FuncComponent';

export class InitialApp extends Component {
    render() {
        return (
            <div>
                {/* <CountComponent /> */}
                <FuncComponent />
            </div>
        );
    }
}

export default InitialApp;

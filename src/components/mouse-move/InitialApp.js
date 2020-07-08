import React, { Component } from 'react';
import ClassComponent from './ClassComponent';
import FunctionComponent from './FunctionalComponent';
import ToggleComponent from './ToggleComponent';

class InitialApp extends Component {
    render() {
        return (
            <div>
                {/* <ClassComponent /> */}
                {/* <FunctionComponent /> */}
                <ToggleComponent />
            </div>
        );
    }
}

export default InitialApp;

import React, { Component } from 'react';

import ClassCounter from './ClassCounter';
import FuncCounter from './FuncCounter';

class Counter extends Component {
    render() {
        return (
            <div style={{ display: 'flex' }}>
                <ClassCounter />
                <hr />
                <FuncCounter />
            </div>
        );
    }
}

export default Counter;

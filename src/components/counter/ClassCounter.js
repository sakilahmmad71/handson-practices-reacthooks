import React, { Component } from 'react';

class ClassCounter extends Component {
    state = {
        count: 0,
    };

    changeCount = () => {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1,
            };
        });
    };

    render() {
        return (
            <div>
                <h1>Class Counter App</h1>
                <button onClick={this.changeCount}>Count {this.state.count}</button>
            </div>
        );
    }
}

export default ClassCounter;

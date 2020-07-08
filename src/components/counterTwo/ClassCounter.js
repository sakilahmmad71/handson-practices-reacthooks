import React, { Component } from 'react';

class ClassCounter extends Component {
    state = {
        count: 0,
    };

    incCounter = () => {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1,
            };
        });
    };

    decCounter = () => {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1,
            };
        });
    };

    resCounter = () => {
        this.setState({ count: 0 });
    };

    render() {
        return (
            <div>
                <h3>Class Counter App</h3>
                <h1>{this.state.count}</h1>
                <button onClick={this.incCounter}>Increment</button>
                <button onClick={this.decCounter}>Decrement</button>
                <button onClick={this.resCounter}>Reset</button>
            </div>
        );
    }
}

export default ClassCounter;

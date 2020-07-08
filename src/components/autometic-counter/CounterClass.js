import React, { Component } from 'react';

class CounterClass extends Component {
    state = {
        count: 0,
    };

    componentDidMount() {
        this.interval = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    tick = () => {
        this.setState({
            count: this.state.count + 1,
        });
    };

    render() {
        return (
            <div>
                <h1>Count - {this.state.count}</h1>
            </div>
        );
    }
}

export default CounterClass;

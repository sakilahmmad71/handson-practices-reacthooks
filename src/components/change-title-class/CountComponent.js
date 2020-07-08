import React, { Component } from 'react';

class CountComponent extends Component {
    state = {
        count: 0,
        name: '',
    };

    componentDidMount() {
        document.title = `You clicked ${this.state.count} times.`;
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            console.log('Componentdidmountchanging over time');
            document.title = `You clicked ${this.state.count} times.`;
        }
    }

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
                <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={(e) => this.setState({ name: e.target.value })}
                />
                <button onClick={this.changeCount}>You clicked {this.state.count} times.</button>
            </div>
        );
    }
}

export default CountComponent;

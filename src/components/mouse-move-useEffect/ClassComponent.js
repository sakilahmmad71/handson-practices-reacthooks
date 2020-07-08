import React, { Component } from 'react';

class ClassComponent extends Component {
    state = {
        x: 0,
        y: 0,
    };

    changeMove = (e) => {
        console.log('mouse moving');
        this.setState({ x: e.clientX, y: e.clientY });
    };

    componentDidMount() {
        console.log('component mounted');
        window.addEventListener('mousemove', this.changeMove);
    }

    componentWillUnmount() {
        console.log('componentunmounted');
        window.removeEventListener('mousemove', this.changeMove);
    }

    render() {
        return (
            <div>
                <h2>
                    X - {this.state.x} and Y - {this.state.y}
                </h2>
            </div>
        );
    }
}

export default ClassComponent;

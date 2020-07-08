import React, { useReducer } from 'react';

const initialState = {
    firstCount: 0,
    secondCount: 15,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, firstCount: state.firstCount + action.value };
        case 'decrement':
            return { ...state, firstCount: state.firstCount - action.value };
        case 'reset':
            return initialState;

        case 'increment2':
            return { ...state, secondCount: state.secondCount + action.value };
        case 'decrement2':
            return { ...state, secondCount: state.secondCount - action.value };
    }
};

const UseReducer = () => {
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <div>FirstCount = {count.firstCount}</div>
            <div>SecondCount = {count.secondCount}</div>
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>
                Increment firstcount
            </button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>
                decrement firstcount
            </button>
            <button onClick={() => dispatch({ type: 'reset' })}>reset firstcount</button>
            <hr />
            <button onClick={() => dispatch({ type: 'increment2', value: 10 })}>
                Increment firstcount
            </button>
            <button onClick={() => dispatch({ type: 'decrement2', value: 10 })}>
                decrement firstcount
            </button>
        </div>
    );
};

export default UseReducer;

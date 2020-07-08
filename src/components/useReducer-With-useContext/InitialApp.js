import React, { useReducer, createContext } from 'react';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';

export const CountContext = createContext();

const initialState = 0;

const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState;
    }
};

const InitialApp = () => {
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <CountContext.Provider value={{ countState: count, dispatchCount: dispatch }}>
            <div>
                Count = {count}
                <ComponentA />
                <ComponentB />
                <ComponentC />
            </div>
        </CountContext.Provider>
    );
};

export default InitialApp;

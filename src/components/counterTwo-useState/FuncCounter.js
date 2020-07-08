import React, { useState } from 'react';

const FuncCounter = () => {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);

    const incCount = () => {
        setCount((prevCount) => prevCount + 1);
    };

    const decCount = () => {
        setCount((prevCount) => prevCount - 1);
    };

    const resCount = () => {
        setCount(initialCount);
    };

    return (
        <div>
            <h3>Function Counter App</h3>
            <h1>{count}</h1>
            <button onClick={incCount}>Increment</button>
            <button onClick={decCount}>Decrement</button>
            <button onClick={resCount}>Reset</button>
        </div>
    );
};

export default FuncCounter;

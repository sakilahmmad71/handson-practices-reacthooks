import React, { useState } from 'react';

const FuncCounter = () => {
    const [count, setCount] = useState(0);

    const changeCount = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h1>Function Counter App</h1>
            <button onClick={changeCount}>Count {count}</button>
        </div>
    );
};

export default FuncCounter;

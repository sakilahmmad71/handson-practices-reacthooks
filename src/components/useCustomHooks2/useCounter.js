import { useState } from 'react';

const useCounter = (initialCount = 0, changeValue = 1) => {
    const [count, setCount] = useState(initialCount);

    const increment = () => {
        setCount((prevCount) => prevCount + changeValue);
    };

    const decrement = () => {
        setCount((prevCount) => prevCount - changeValue);
    };

    const reset = () => {
        setCount(initialCount);
    };

    return [count, increment, decrement, reset];
};

export default useCounter;

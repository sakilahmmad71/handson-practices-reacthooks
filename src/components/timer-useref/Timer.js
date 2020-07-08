import React, { useState, useRef, useEffect } from 'react';

const Timer = () => {
    const [count, setCount] = useState(0);

    const intervalRef = useRef();

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
        }, 1000);

        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <div>
            Timer count - {count}
            <button onClick={() => clearInterval(intervalRef.current)}>Clear Timer</button>
        </div>
    );
};

export default Timer;

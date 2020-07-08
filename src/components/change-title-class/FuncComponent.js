import React, { useState, useEffect } from 'react';

const FuncComponent = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        console.log('useEffect calling every changes');
        document.title = `You have clicked ${count} times`;
    }, [count]);

    return (
        <div>
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>You clicked {count} times</button>
        </div>
    );
};

export default FuncComponent;

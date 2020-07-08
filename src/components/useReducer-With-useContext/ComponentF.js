import React, { useContext } from 'react';
import { CountContext } from './InitialApp';

const ComponentF = () => {
    const count = useContext(CountContext);
    return (
        <div>
            ComponentF - {count.countState}
            <button onClick={() => count.dispatchCount('increment')}>Increment</button>
            <button onClick={() => count.dispatchCount('decrement')}>decrement</button>
            <button onClick={() => count.dispatchCount('reset')}>reset</button>
        </div>
    );
};

export default ComponentF;

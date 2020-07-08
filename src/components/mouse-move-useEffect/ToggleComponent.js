import React, { useState } from 'react';
import Toggler from './FunctionalComponent';
import TogglerClass from './ClassComponent';

const ToggleComponent = () => {
    const [display, setDisplay] = useState(true);
    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle display</button>
            {display && <Toggler />}
        </div>
    );
};

export default ToggleComponent;

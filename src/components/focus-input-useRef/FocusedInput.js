import React, { useRef, useEffect } from 'react';

const FocusedInput = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);
    return (
        <div>
            <input ref={inputRef} type="text" name="name" />
        </div>
    );
};

export default FocusedInput;
